const TRELLO_API_KEY = process.env.TRELLO_API_KEY;
const TRELLO_TOKEN = process.env.TRELLO_TOKEN;
const TRELLO_LIST_ID = process.env.TRELLO_LIST_ID;

const requiredFields = ["name", "email", "inquiry_type", "message"];

const validatePayload = (payload) => {
  for (const field of requiredFields) {
    if (!payload?.[field] || String(payload[field]).trim() === "") {
      return `Missing required field: ${field}`;
    }
  }
  return null;
};

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Invalid JSON payload" }),
    };
  }

  const validationError = validatePayload(payload);
  if (validationError) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: validationError }),
    };
  }

  if (!TRELLO_API_KEY || !TRELLO_TOKEN || !TRELLO_LIST_ID) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "Server integration not configured",
        details: "Missing Trello environment variables",
      }),
    };
  }

  const cardName = `${payload.inquiry_type.toUpperCase()} - ${payload.name} (${payload.company || "No company"})`;
  const cardDescription = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || "N/A"}`,
    `Inquiry Type: ${payload.inquiry_type}`,
    `Audience Tag: ${payload.audienceTag || "N/A"}`,
    `Intent Label: ${payload.intentLabel || "N/A"}`,
    `Source Context: ${payload.sourceContext || "Unknown"}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  try {
    const response = await fetch("https://api.trello.com/1/cards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idList: TRELLO_LIST_ID,
        name: cardName,
        desc: cardDescription,
        pos: "top",
        key: TRELLO_API_KEY,
        token: TRELLO_TOKEN,
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      return {
        statusCode: response.status,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          error: "Failed to create Trello card",
          details,
        }),
      };
    }

    const card = await response.json();
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ok: true,
        cardId: card.id,
        cardUrl: card.url,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "Unexpected integration error",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
    };
  }
};

