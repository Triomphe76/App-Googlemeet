import React, { useState, useRef, useEffect } from 'react';
import { Match, Message } from '../types';
import { MESSAGES_DATA } from '../constants';
import { ChevronLeftIcon, PaperAirplaneIcon, VerifiedIcon } from './icons';

interface ChatScreenProps {
  match: Match;
  onBack: () => void;
}

const ChatScreen: React.FC<ChatScreenProps> = ({ match, onBack }) => {
  const [messages, setMessages] = useState<Message[]>(MESSAGES_DATA);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const message: Message = {
      id: messages.length + 1,
      sender: 'me',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="h-full flex flex-col bg-gray-800">
      <header className="flex-shrink-0 bg-gray-900/80 backdrop-blur-sm p-3 flex items-center shadow-md">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-gray-700">
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </button>
        <img src={match.avatar} alt={match.name} className="w-10 h-10 rounded-full object-cover ml-3" />
        <div className="flex items-center gap-2 ml-3">
          <h2 className="text-lg font-bold text-white">{match.name}</h2>
          {match.isVerified && <VerifiedIcon className="w-5 h-5 text-cyan-400" />}
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            {msg.sender === 'them' && <img src={match.avatar} alt={match.name} className="w-6 h-6 rounded-full self-start"/>}
            <div className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl ${msg.sender === 'me' ? 'bg-pink-600 text-white rounded-br-none' : 'bg-gray-700 text-gray-200 rounded-bl-none'}`}>
              <p>{msg.text}</p>
              <span className="text-xs text-gray-400 block text-right mt-1">{msg.timestamp}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <footer className="flex-shrink-0 p-3 bg-gray-900 border-t border-gray-700/50">
        <form onSubmit={handleSendMessage} className="flex items-center gap-3">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Écrivez un message..."
            className="flex-1 bg-gray-700 border-gray-600 text-white rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button type="submit" className="p-3 bg-pink-600 rounded-full text-white hover:bg-pink-700 transition-colors disabled:bg-gray-600">
            <PaperAirplaneIcon className="w-6 h-6" />
          </button>
        </form>
      </footer>
    </div>
  );
};

export default ChatScreen;