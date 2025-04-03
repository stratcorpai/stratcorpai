
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, RefreshCw, Bot, User, ArrowRight, Brain, Users, BarChart3, Building, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

type AssessmentChatProps = {
  autoAssessMode?: boolean;
  completedCount?: number;
  assessmentTypes?: string[];
  onCompleteAutoAssessment?: (type: string, result: any) => void;
};

const AssessmentChat = ({ 
  autoAssessMode = false, 
  completedCount = 0,
  assessmentTypes = [],
  onCompleteAutoAssessment 
}: AssessmentChatProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState('chat');
  const [currentAutoAssessType, setCurrentAutoAssessType] = useState<string | null>(null);
  const [autoAssessProgress, setAutoAssessProgress] = useState(0);
  const [detectedKeywords, setDetectedKeywords] = useState<Record<string, number>>({});
  
  // Load stored assessment results
  const savedResults = JSON.parse(localStorage.getItem('stratifiedAssessments') || '{}');
  
  // Initial message setup
  useEffect(() => {
    let initialMessage: Message;
    
    if (autoAssessMode) {
      // Start auto-assess mode with specific message
      initialMessage = {
        id: '1',
        role: 'assistant',
        content: "I'll help you complete assessments through our conversation! This is a more natural way to gather insights about your organization. I'll ask you questions about your organization, and based on your responses, I'll automatically generate assessment results. Let's start with learning about your organization - could you tell me about your company's size, industry, and main challenges?",
        timestamp: new Date()
      };
      
      // Pre-fill some detected keywords
      setDetectedKeywords({
        'company_size': 0,
        'industry': 0,
        'challenges': 0,
        'strategy': 0,
        'digital': 0,
        'ai': 0
      });
    } else if (completedCount === 0) {
      // No assessments completed
      initialMessage = {
        id: '1',
        role: 'assistant',
        content: "Welcome to the StratCorp AI assistant! Complete assessments to unlock more capabilities. I can help answer questions about the assessment process or provide general guidance based on your needs.",
        timestamp: new Date()
      };
    } else if (completedCount < assessmentTypes.length) {
      // Some assessments completed
      initialMessage = {
        id: '1',
        role: 'assistant',
        content: `You've completed ${completedCount} of ${assessmentTypes.length} assessments. I can discuss your current results or help you with the remaining assessments. What would you like to know?`,
        timestamp: new Date()
      };
    } else {
      // All assessments completed
      initialMessage = {
        id: '1',
        role: 'assistant',
        content: "Congratulations on completing all assessments! I'm your StratCorp AI assistant, ready to discuss your assessment results and provide further insights. How can I help you today?",
        timestamp: new Date()
      };
    }
    
    setMessages([initialMessage]);
  }, [autoAssessMode, completedCount, assessmentTypes.length]);
  
  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      let response;
      
      if (autoAssessMode) {
        // Process for auto-assessment mode
        const { updatedKeywords, nextAssessType } = processAutoAssessmentInput(inputValue);
        setDetectedKeywords(updatedKeywords);
        
        // Calculate progress based on keywords
        const keywordCount = Object.values(updatedKeywords).reduce((sum, count) => sum + Math.min(count, 3), 0);
        const maxPossibleCount = Object.keys(updatedKeywords).length * 3; // Cap at 3 mentions per keyword
        const progress = Math.min(Math.round((keywordCount / maxPossibleCount) * 100), 100);
        setAutoAssessProgress(progress);
        
        // Check if we have enough data for an assessment
        if (nextAssessType && nextAssessType !== currentAutoAssessType) {
          setCurrentAutoAssessType(nextAssessType);
          
          // Generate assessment result for this type
          const result = generateAutoAssessmentResult(nextAssessType, updatedKeywords);
          
          // Notify parent component
          if (onCompleteAutoAssessment) {
            onCompleteAutoAssessment(nextAssessType, result);
          }
          
          // Response indicates assessment completion
          response = `Based on our conversation, I've completed an assessment of your organization's ${nextAssessType.replace(/-/g, ' ')}. You can view the detailed results in your assessment dashboard.
          
Would you like to continue our conversation to generate more assessments? I still need to learn more about ${getNextTopicPrompt(nextAssessType)}.`;
        } else {
          // Continue gathering information
          response = generateAutoAssessResponse(inputValue, updatedKeywords, progress);
        }
      } else {
        // Standard chat response
        response = await generateAIResponse(userMessage.content, savedResults);
      }
      
      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      toast.error('Failed to generate a response. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const processAutoAssessmentInput = (input: string) => {
    const lowerInput = input.toLowerCase();
    const updatedKeywords = { ...detectedKeywords };
    
    // Define keywords to detect for each assessment type
    const keywordMapping: Record<string, string[]> = {
      'ai-readiness': ['ai', 'artificial intelligence', 'machine learning', 'data', 'automation'],
      'board-effectiveness': ['board', 'directors', 'governance', 'oversight', 'committee'],
      'business-strategy': ['strategy', 'market', 'competitive', 'growth', 'vision'],
      'organizational-structure': ['structure', 'department', 'reporting', 'hierarchy', 'team'],
      'digital-transformation': ['digital', 'transformation', 'technology', 'innovation', 'platform'],
      'executive-alignment': ['executive', 'leadership', 'alignment', 'management', 'communication']
    };
    
    // Update keyword counts
    Object.keys(keywordMapping).forEach(assessType => {
      keywordMapping[assessType].forEach(keyword => {
        if (lowerInput.includes(keyword)) {
          // Create the keyword if it doesn't exist
          if (!updatedKeywords[keyword]) {
            updatedKeywords[keyword] = 0;
          }
          updatedKeywords[keyword] += 1;
        }
      });
    });
    
    // Check if we have enough information for an assessment
    let nextAssessType: string | null = null;
    let highestScore = 0;
    
    Object.entries(keywordMapping).forEach(([assessType, keywords]) => {
      // Skip if already completed via auto-assessment
      if (currentAutoAssessType === assessType) return;
      
      // Calculate how many relevant keywords were mentioned
      const score = keywords.reduce((sum, keyword) => {
        return sum + (updatedKeywords[keyword] || 0);
      }, 0);
      
      if (score > highestScore && score >= 3) { // Threshold to trigger assessment
        highestScore = score;
        nextAssessType = assessType;
      }
    });
    
    return { updatedKeywords, nextAssessType };
  };
  
  const generateAutoAssessmentResult = (assessmentType: string, keywords: Record<string, number>) => {
    // Generate a realistic assessment result based on conversation data
    const score = 40 + Math.floor(Math.random() * 40); // Base score between 40-80
    
    // Generate strengths, opportunities and recommendations based on assessment type
    const strengths = generateRelevantAutoStrengths(assessmentType, keywords);
    const opportunities = generateRelevantAutoOpportunities(assessmentType, keywords);
    const recommendations = generateRelevantAutoRecommendations(assessmentType, keywords);
    
    return {
      score,
      strengths,
      opportunities,
      recommendations,
      autoGenerated: true
    };
  };
  
  const getNextTopicPrompt = (currentType: string) => {
    // Determine what topic to ask about next based on current assessment
    const topicMap: Record<string, string> = {
      'ai-readiness': 'your digital transformation initiatives',
      'board-effectiveness': 'your executive leadership team',
      'business-strategy': 'your organizational structure',
      'organizational-structure': 'your board governance',
      'digital-transformation': 'your AI initiatives',
      'executive-alignment': 'your business strategy'
    };
    
    return topicMap[currentType] || 'your organization';
  };
  
  const generateAutoAssessResponse = (userInput: string, keywords: Record<string, number>, progress: number) => {
    // Generate an appropriate response to gather more information
    const lowerInput = userInput.toLowerCase();
    
    // Check what aspects we need more information about
    const needsMoreInfo: string[] = [];
    
    if (!lowerInput.includes('ai') && !lowerInput.includes('artificial intelligence')) {
      needsMoreInfo.push('AI initiatives or plans');
    }
    
    if (!lowerInput.includes('board') && !lowerInput.includes('director')) {
      needsMoreInfo.push('board structure and governance');
    }
    
    if (!lowerInput.includes('strategy') && !lowerInput.includes('competitive')) {
      needsMoreInfo.push('business strategy and competitive positioning');
    }
    
    if (!lowerInput.includes('structure') && !lowerInput.includes('reporting')) {
      needsMoreInfo.push('organizational structure');
    }
    
    if (!lowerInput.includes('digital') && !lowerInput.includes('technology')) {
      needsMoreInfo.push('digital transformation efforts');
    }
    
    if (!lowerInput.includes('executive') && !lowerInput.includes('leadership')) {
      needsMoreInfo.push('executive leadership team');
    }
    
    // If we have less than 3 topics to ask about, add some general questions
    if (needsMoreInfo.length < 3) {
      needsMoreInfo.push('current challenges and priorities');
      needsMoreInfo.push('future goals and vision');
    }
    
    // Pick 1-2 topics to ask about
    const topicsToAsk = needsMoreInfo.slice(0, 2);
    
    // Generate response with progress indicator
    return `Thank you for sharing that information. I've analyzed ${progress}% of what I need to generate a comprehensive assessment.
    
Could you tell me more about your organization's ${topicsToAsk.join(' and ')}? This will help me complete a more accurate assessment.`;
  };
  
  const generateRelevantAutoStrengths = (assessmentType: string, keywords: Record<string, number>) => {
    // Generate strengths based on assessment type and conversation keywords
    const strengthsByType: Record<string, string[]> = {
      "ai-readiness": [
        "Strong leadership commitment to AI transformation",
        "Good data governance foundations in place",
        "Clear alignment between AI initiatives and business objectives",
        "Existing pockets of AI expertise across key departments"
      ],
      "board-effectiveness": [
        "Diverse range of relevant expertise on the board",
        "Strong strategic oversight and vision",
        "Effective governance and risk management protocols",
        "Productive working relationship with executive team"
      ],
      "business-strategy": [
        "Clear articulation of strategic priorities",
        "Strong market position in core segments",
        "Effective competitive differentiation",
        "Alignment between strategy and organizational capabilities"
      ],
      "organizational-structure": [
        "Adaptable structure that evolves with strategic needs",
        "Clear accountability and decision rights",
        "Effective cross-functional collaboration mechanisms",
        "Appropriate balance of centralization and decentralization"
      ],
      "digital-transformation": [
        "Strong digital vision aligned to business strategy",
        "Effective technology modernization roadmap",
        "Good digital skills across key functions",
        "Customer-centric approach to digital initiatives"
      ],
      "executive-alignment": [
        "Strong alignment on strategic priorities",
        "Effective executive decision-making processes",
        "Collaborative leadership team dynamics",
        "Clear cascade of priorities from executive team"
      ]
    };
    
    // Select 3 relevant strengths for the assessment type
    return (strengthsByType[assessmentType] || []).slice(0, 3);
  };
  
  const generateRelevantAutoOpportunities = (assessmentType: string, keywords: Record<string, number>) => {
    // Similar to strengths, but for improvement opportunities
    const opportunitiesByType: Record<string, string[]> = {
      "ai-readiness": [
        "Develop more comprehensive data strategy for AI applications",
        "Strengthen cross-functional AI governance",
        "Build broader AI literacy across the organization",
        "Create more robust AI experimentation frameworks"
      ],
      "board-effectiveness": [
        "Enhance strategic foresight capabilities",
        "Improve board succession planning process",
        "Strengthen technology expertise representation",
        "Develop more robust board evaluation practices"
      ],
      "business-strategy": [
        "Accelerate response to emerging market opportunities",
        "Strengthen strategic communication throughout organization",
        "Develop more agile strategic planning processes",
        "Enhance strategic resource allocation mechanisms"
      ],
      "organizational-structure": [
        "Reduce organizational silos that impede collaboration",
        "Streamline decision-making processes for greater agility",
        "Strengthen matrix management capabilities",
        "Align incentive structures with collaborative behaviors"
      ],
      "digital-transformation": [
        "Accelerate legacy system modernization",
        "Develop comprehensive digital talent strategy",
        "Strengthen digital change management approach",
        "Improve digital metrics and measurement frameworks"
      ],
      "executive-alignment": [
        "Create more robust strategic alignment mechanisms",
        "Strengthen collective accountability at executive level",
        "Enhance executive team psychological safety",
        "Improve strategic cascading throughout organization"
      ]
    };
    
    // Select 3 relevant opportunities
    return (opportunitiesByType[assessmentType] || []).slice(0, 3);
  };
  
  const generateRelevantAutoRecommendations = (assessmentType: string, keywords: Record<string, number>) => {
    // Similar to strengths and opportunities, but for actionable recommendations
    const recommendationsByType: Record<string, string[]> = {
      "ai-readiness": [
        "Establish a cross-functional AI governance council with clear mandate and authority",
        "Develop a comprehensive data strategy focused on supporting AI applications",
        "Implement an AI knowledge development program for key leadership",
        "Create an AI pilot framework with clear success metrics and scaling criteria"
      ],
      "board-effectiveness": [
        "Conduct a comprehensive board skills assessment against future strategic needs",
        "Implement quarterly strategic deep-dive sessions separate from regular board meetings",
        "Establish a more structured board evaluation process with external facilitation",
        "Create a board technology committee to strengthen digital oversight"
      ],
      "business-strategy": [
        "Implement quarterly strategy review sessions with explicit assumption testing",
        "Develop a strategic narrative that can be effectively communicated at all levels",
        "Create a strategic initiatives dashboard with clear success metrics",
        "Establish cross-functional strategy execution teams for key priorities"
      ],
      "organizational-structure": [
        "Conduct a decision mapping exercise to identify and address bottlenecks",
        "Implement formal cross-functional teaming structures for key initiatives",
        "Review incentive systems to ensure alignment with collaborative behaviors",
        "Establish clear organizational design principles aligned to strategic priorities"
      ],
      "digital-transformation": [
        "Develop an integrated digital transformation roadmap with clear sequencing",
        "Create a digital skills academy to address capability gaps systematically",
        "Implement digital transformation metrics that balance process and outcomes",
        "Establish a digital governance framework that enables rather than controls"
      ],
      "executive-alignment": [
        "Conduct a strategic alignment session with structured follow-up mechanisms",
        "Implement a collective leadership development program for the executive team",
        "Establish clear decision protocols for different types of executive decisions",
        "Create a cascading mechanism to translate executive priorities throughout organization"
      ]
    };
    
    // Select 3 relevant recommendations
    return (recommendationsByType[assessmentType] || []).slice(0, 3);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const resetConversation = () => {
    let initialMessage: Message;
    
    if (autoAssessMode) {
      initialMessage = {
        id: Date.now().toString(),
        role: 'assistant',
        content: "I've reset our conversation. Let's start again with your organization's details. Could you tell me about your company's size, industry, and main challenges?",
        timestamp: new Date()
      };
      // Reset auto-assessment progress
      setAutoAssessProgress(0);
      setDetectedKeywords({});
      setCurrentAutoAssessType(null);
    } else {
      initialMessage = {
        id: Date.now().toString(),
        role: 'assistant',
        content: "I've reset our conversation. How else can I help you with your assessment results?",
        timestamp: new Date()
      };
    }
    
    setMessages([initialMessage]);
  };
  
  const generateAIResponse = async (userMessage: string, assessmentResults: any) => {
    // In a real implementation, this would use the Azure OpenAI or Claude API
    // Here we'll return contextually relevant responses based on the message and results
    
    const messageLower = userMessage.toLowerCase();
    
    // Prepare responses based on common question patterns
    if (messageLower.includes('summary') || messageLower.includes('overview')) {
      return createSummaryResponse(assessmentResults);
    }
    
    if (messageLower.includes('strength') || messageLower.includes('strong')) {
      return createStrengthsResponse(assessmentResults);
    }
    
    if (messageLower.includes('weakness') || messageLower.includes('opportunity') || messageLower.includes('improve')) {
      return createOpportunitiesResponse(assessmentResults);
    }
    
    if (messageLower.includes('recommend') || messageLower.includes('action') || messageLower.includes('next step')) {
      return createRecommendationsResponse(assessmentResults);
    }
    
    if (Object.keys(assessmentResults).some(assessType => messageLower.includes(assessType.replace('-', ' ')))) {
      // If user asks about a specific assessment type
      const matchingType = Object.keys(assessmentResults).find(
        type => messageLower.includes(type.replace('-', ' '))
      );
      
      if (matchingType) {
        return createAssessmentSpecificResponse(matchingType, assessmentResults[matchingType]);
      }
    }
    
    // Default response for other questions
    return createGeneralResponse(userMessage, assessmentResults);
  };
  
  // Helper functions to generate relevant responses
  const createSummaryResponse = (results: any) => {
    const assessmentNames = {
      'ai-readiness': 'AI Readiness',
      'board-effectiveness': 'Board Effectiveness',
      'business-strategy': 'Business Strategy',
      'organizational-structure': 'Organizational Structure',
      'digital-transformation': 'Digital Transformation',
      'executive-alignment': 'Executive Alignment'
    };
    
    // Calculate average score
    const scores = Object.values(results).map((r: any) => r.score);
    const averageScore = scores.reduce((a: number, b: number) => a + b, 0) / scores.length;
    
    // Determine areas of strength and weakness
    const sortedAssessments = Object.entries(results)
      .sort((a: any, b: any) => b[1].score - a[1].score);
    
    const topAssessments = sortedAssessments.slice(0, 2);
    const bottomAssessments = sortedAssessments.slice(-2);
    
    const topAreas = topAssessments
      .map(([type, data]: [string, any]) => 
        `${assessmentNames[type as keyof typeof assessmentNames]} (${data.score})`
      );
    
    const bottomAreas = bottomAssessments
      .map(([type, data]: [string, any]) => 
        `${assessmentNames[type as keyof typeof assessmentNames]} (${data.score})`
      );
    
    return `
Based on your completed assessments, here's a comprehensive overview:

Your organization's average score across all assessments is **${Math.round(averageScore)}** out of 100.

**Areas of Strength:**
- ${topAreas.join('\n- ')}

**Areas for Development:**
- ${bottomAreas.join('\n- ')}

The results suggest your organization has substantial capabilities in ${topAssessments[0][0].replace('-', ' ')}, while there are opportunities to strengthen your approach to ${bottomAssessments[0][0].replace('-', ' ')}.

Would you like me to provide more specific insights on any particular area?
    `;
  };
  
  const createStrengthsResponse = (results: any) => {
    // Gather all strengths across assessments
    const allStrengths: string[] = [];
    
    Object.entries(results).forEach(([type, data]: [string, any]) => {
      if (data.strengths) {
        data.strengths.forEach((strength: string) => {
          allStrengths.push(`**${type.replace('-', ' ')}**: ${strength}`);
        });
      }
    });
    
    return `
Based on your assessments, here are your organization's key strengths:

${allStrengths.join('\n\n')}

These strengths provide a foundation for your organization to build upon. Would you like recommendations on how to further leverage these strengths?
    `;
  };
  
  const createOpportunitiesResponse = (results: any) => {
    // Gather all opportunities across assessments
    const allOpportunities: string[] = [];
    
    Object.entries(results).forEach(([type, data]: [string, any]) => {
      if (data.opportunities) {
        data.opportunities.forEach((opportunity: string) => {
          allOpportunities.push(`**${type.replace('-', ' ')}**: ${opportunity}`);
        });
      }
    });
    
    return `
Your assessments identified these key opportunities for development:

${allOpportunities.join('\n\n')}

Addressing these areas could significantly enhance your organization's effectiveness. Would you like more specific suggestions on how to address any of these opportunities?
    `;
  };
  
  const createRecommendationsResponse = (results: any) => {
    // Gather top recommendations across assessments
    const priorityRecommendations: string[] = [];
    
    // Sort assessments by score (lowest first for priority focus)
    const sortedAssessments = Object.entries(results)
      .sort((a: any, b: any) => a[1].score - b[1].score)
      .slice(0, 3); // Focus on top 3 areas needing improvement
    
    sortedAssessments.forEach(([type, data]: [string, any]) => {
      if (data.recommendations && data.recommendations.length > 0) {
        priorityRecommendations.push(`**${type.replace('-', ' ')} (Score: ${data.score})**: ${data.recommendations[0]}`);
      }
    });
    
    return `
Based on your assessment results, here are the highest-priority recommendations:

${priorityRecommendations.join('\n\n')}

These recommendations target your most significant opportunity areas. Would you like me to develop a more detailed action plan for any of these recommendations?
    `;
  };
  
  const createAssessmentSpecificResponse = (assessmentType: string, assessmentData: any) => {
    const formattedType = assessmentType.replace('-', ' ');
    const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
    const formattedTitle = formattedType.split(' ').map(capitalize).join(' ');
    
    return `
## ${formattedTitle} Assessment Results

**Overall Score:** ${assessmentData.score}/100

**Key Strengths:**
${assessmentData.strengths.map((s: string) => `- ${s}`).join('\n')}

**Opportunities for Development:**
${assessmentData.opportunities.map((o: string) => `- ${o}`).join('\n')}

**Recommendations:**
${assessmentData.recommendations.map((r: string) => `- ${r}`).join('\n')}

Would you like to explore any specific aspect of this assessment in more detail?
    `;
  };
  
  const createGeneralResponse = (userMessage: string, results: any) => {
    // Generic responses based on message sentiment and context
    const responses = [
      `Thank you for your question. Based on your assessment results, I'd suggest focusing on improving your ${Object.keys(results)[0].replace('-', ' ')} capabilities first, as it appears to be an area where targeted improvements could yield significant benefits.`,
      
      `Looking at your results holistically, your organization appears to be at a pivotal stage where strategic improvements in key areas could yield substantial results. The assessments suggest that balancing short-term operational excellence with long-term strategic vision will be crucial.`,
      
      `Your assessment results indicate varying levels of maturity across different dimensions. This is quite normal, and suggests a targeted approach to organizational development rather than broad-based initiatives would be most effective.`,
      
      `I notice from your assessments that there appears to be some alignment between challenges in organizational structure and executive alignment. This often indicates an opportunity for meaningful structural reforms that better support your strategic objectives.`
    ];
    
    // Select a somewhat random but contextual response
    const responseIndex = Math.floor(userMessage.length % responses.length);
    return responses[responseIndex];
  };
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="section-padding bg-white"
    >
      <div className="container-custom max-w-4xl">
        <Card className="border shadow-lg overflow-hidden">
          <CardHeader className="bg-stratified text-white p-6">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center text-xl">
                <Bot className="mr-2 h-5 w-5" />
                StratCorp AI Assistant
                {autoAssessMode && (
                  <Badge variant="outline" className="ml-2 bg-white/10 text-white">Auto-Assess Mode</Badge>
                )}
              </CardTitle>
              
              {!autoAssessMode && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                      View Assessment Overview
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Assessment Results Overview</DialogTitle>
                    </DialogHeader>
                    
                    <Tabs value={tab} onValueChange={setTab} className="w-full mt-4">
                      <TabsList className="grid grid-cols-3 mb-6">
                        <TabsTrigger value="chat">Chat</TabsTrigger>
                        <TabsTrigger value="scores">Scores</TabsTrigger>
                        <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="chat" className="space-y-4">
                        <div className="text-sm text-gray-600">
                          <p className="mb-3">The AI assistant can help you understand your assessment results by:</p>
                          <ul className="list-disc pl-5 space-y-1.5">
                            <li>Providing summaries across all assessments</li>
                            <li>Explaining specific assessment results</li>
                            <li>Recommending action plans based on your results</li>
                            <li>Answering questions about organizational development</li>
                          </ul>
                          
                          <p className="mt-4 font-medium">Try asking:</p>
                          <ul className="list-disc pl-5 space-y-1.5 text-stratified">
                            <li>"Summarize my assessment results"</li>
                            <li>"What are my organization's key strengths?"</li>
                            <li>"What are our biggest opportunities for improvement?"</li>
                            <li>"Tell me about our AI readiness assessment"</li>
                          </ul>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="scores" className="space-y-4">
                        <div className="space-y-4">
                          {Object.entries(savedResults).map(([type, data]: [string, any]) => (
                            <div key={type} className="flex justify-between items-center border-b pb-3">
                              <div className="font-medium flex items-center">
                                {type.replace('-', ' ')}
                                {data.autoGenerated && (
                                  <Badge variant="outline" className="ml-2 text-xs">Auto-Generated</Badge>
                                )}
                              </div>
                              <div className={`text-lg font-bold ${data.score >= 70 ? 'text-emerald-600' : data.score >= 50 ? 'text-amber-600' : 'text-red-600'}`}>
                                {data.score}/100
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="recommendations" className="space-y-4">
                        <div className="space-y-6">
                          {Object.entries(savedResults).map(([type, data]: [string, any]) => (
                            <div key={type} className="space-y-2">
                              <h4 className="font-medium text-stratified">{type.replace('-', ' ')}</h4>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                {data.recommendations.map((rec: string, i: number) => (
                                  <li key={i}>{rec}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
              )}
            </div>
            
            {autoAssessMode && (
              <div className="mt-4">
                <div className="flex justify-between text-xs mb-1">
                  <span>Assessment Progress</span>
                  <span>{autoAssessProgress}%</span>
                </div>
                <Progress value={autoAssessProgress} className="h-2 bg-white/20" />
                
                {currentAutoAssessType && (
                  <div className="mt-2 text-sm flex items-center">
                    <ClipboardCheck className="h-4 w-4 mr-1" />
                    <span>
                      Completed: {currentAutoAssessType.replace(/-/g, ' ')} assessment
                    </span>
                  </div>
                )}
              </div>
            )}
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="flex flex-col h-[400px]">
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <Avatar className={`h-8 w-8 ${message.role === 'user' ? 'ml-2' : 'mr-2'}`}>
                        {message.role === 'assistant' ? (
                          <AvatarImage src="/lovable-uploads/bbbadf15-0ecd-4cdd-88b6-7bb56e21837f.png" alt="AI" />
                        ) : null}
                        <AvatarFallback>
                          {message.role === 'assistant' ? <Bot size={16} /> : <User size={16} />}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div 
                        className={`rounded-lg p-3 ${
                          message.role === 'assistant' 
                            ? 'bg-gray-100 text-gray-800' 
                            : 'bg-stratified text-white'
                        }`}
                      >
                        <div className="whitespace-pre-line text-sm">
                          {message.content}
                        </div>
                        <div className="text-xs mt-1 opacity-70">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              <div className="border-t pt-4">
                <div className="flex items-center gap-2">
                  <Textarea
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="min-h-9 resize-none"
                    disabled={isLoading}
                  />
                  
                  <div className="flex gap-2">
                    <Button
                      onClick={handleSendMessage}
                      disabled={isLoading || !inputValue.trim()}
                      className="bg-stratified hover:bg-stratified-dark text-white"
                    >
                      {isLoading ? (
                        <RefreshCw className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={resetConversation}
                      className="px-2"
                      title="Reset conversation"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 mt-2">
                  {autoAssessMode 
                    ? "Just chat naturally about your organization. I'll automatically generate assessments based on our conversation."
                    : `This AI assistant has ${completedCount === assessmentTypes.length ? 'full' : 'limited'} access to your assessment results and can provide personalized insights.`
                  }
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
};

export default AssessmentChat;
