
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, RefreshCw, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

const AssessmentChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState('chat');
  
  // Load stored assessment results
  const savedResults = JSON.parse(localStorage.getItem('stratifiedAssessments') || '{}');
  
  // Initial welcome message when component mounts
  useEffect(() => {
    const initialMessage: Message = {
      id: '1',
      role: 'assistant',
      content: "Congratulations on completing all assessments! I'm your StratCorp AI assistant, ready to discuss your assessment results and provide further insights. How can I help you today?",
      timestamp: new Date()
    };
    
    setMessages([initialMessage]);
  }, []);
  
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
      // In a real implementation, this would call the Azure OpenAI or Claude API
      // with the context of all assessment results
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Generate a response based on the question and assessment results
      const response = await generateAIResponse(userMessage.content, savedResults);
      
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
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const resetConversation = () => {
    const initialMessage: Message = {
      id: Date.now().toString(),
      role: 'assistant',
      content: "I've reset our conversation. How else can I help you with your assessment results?",
      timestamp: new Date()
    };
    
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
              </CardTitle>
              
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
                            <div className="font-medium">{type.replace('-', ' ')}</div>
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
            </div>
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
                  This AI assistant has access to all your assessment results and can provide personalized insights.
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
