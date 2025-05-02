import React, { useState } from 'react';
import { MessageCircleIcon, XIcon, SendIcon } from 'lucide-react';
export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{
    text: string;
    isUser: boolean;
  }>>([{
    text: 'Hello! How can I help you today?',
    isUser: false
  }]);
  const [input, setInput] = useState('');
  const toggleChat = () => setIsOpen(!isOpen);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    // Add user message
    setMessages(prev => [...prev, {
      text: input,
      isUser: true
    }]);
    setInput('');
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: 'Thanks for your message! One of our team members will get back to you soon.',
        isUser: false
      }]);
    }, 1000);
  };
  return <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="bg-blue-900 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-medium">Royal Communications Chat</h3>
            <button onClick={toggleChat} className="text-white hover:text-yellow-500 transition-colors" aria-label="Close chat">
              <XIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-lg px-4 py-2 max-w-[80%] ${msg.isUser ? 'bg-coral-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                  {msg.text}
                </div>
              </div>)}
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-2">
              <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Type your message..." className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500" />
              <button type="submit" className="bg-coral-500 text-white p-2 rounded-md hover:bg-coral-600 transition-colors" aria-label="Send message">
                <SendIcon className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div> : <button onClick={toggleChat} className="bg-coral-500 text-white p-4 rounded-full shadow-lg hover:bg-coral-600 transition-colors" aria-label="Open chat">
          <MessageCircleIcon className="h-6 w-6" />
        </button>}
    </div>;
};