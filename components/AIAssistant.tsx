
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, MessageSquare, Loader2, Sparkles } from 'lucide-react';
import { getSchoolAssistantResponse } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: 'Halo! Saya Smart Assistant SMAN 2 Tompaso. Ada yang bisa saya bantu terkait info PPDB, profil sekolah, atau fasilitas kami?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getSchoolAssistantResponse(userMsg);
      setMessages(prev => [...prev, { role: 'ai', text: response || 'Maaf, saya sedang melakukan sinkronisasi data.' }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: 'Koneksi terputus. Silakan coba lagi.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[150]">
      {isOpen ? (
        <div className="bg-white w-[380px] md:w-[450px] h-[600px] rounded-[48px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border border-gray-100 flex flex-col overflow-hidden animate-reveal">
          {/* Enhanced Header */}
          <div className="bg-[#0A0F1E] p-8 text-white flex justify-between items-center relative overflow-hidden shrink-0">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#F3C623]/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="flex items-center space-x-5 relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F3C623] to-yellow-300 rounded-[20px] flex items-center justify-center text-[#0A0F1E] shadow-xl shadow-yellow-500/20 transform rotate-3">
                <Bot className="h-7 w-7" />
              </div>
              <div>
                <h4 className="font-black text-lg tracking-tighter">Smart AI Vision</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.25em]">Online Support</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="bg-white/5 hover:bg-[#F3C623] hover:text-[#0A0F1E] p-3 rounded-2xl transition-all relative z-10 active:scale-90"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Chat Interface */}
          <div 
            ref={scrollRef}
            className="flex-grow p-8 overflow-y-auto space-y-8 bg-[#F8F9FB] custom-scrollbar"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-reveal`}>
                <div className={`max-w-[85%] p-5 rounded-[30px] text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#0A0F1E] text-white rounded-tr-none' 
                    : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none font-light'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-5 rounded-[30px] shadow-sm border border-gray-100 rounded-tl-none flex items-center space-x-3">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 bg-[#F3C623] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#F3C623] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-[#F3C623] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Berpikir...</span>
                </div>
              </div>
            )}
          </div>

          {/* Luxury Input Bar */}
          <div className="p-8 bg-white border-t border-gray-50 flex items-center space-x-4 shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Tanyakan apapun tentang sekolah..."
              className="flex-grow text-sm border-none bg-gray-50 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#F3C623]/20 focus:bg-white transition-all font-medium placeholder:text-gray-300"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-[#0A0F1E] text-white p-5 rounded-2xl hover:bg-[#F3C623] hover:text-[#0A0F1E] active:scale-90 disabled:opacity-30 disabled:grayscale transition-all shadow-xl shadow-blue-900/10"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#0A0F1E] text-white p-6 rounded-[32px] shadow-[0_30px_60px_-15px_rgba(10,15,30,0.4)] hover:scale-110 active:scale-95 transition-all group flex items-center space-x-4 border border-white/10 animate-float"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#F3C623] rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>
            <MessageSquare className="h-7 w-7 text-[#F3C623] relative z-10" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0A0F1E] animate-pulse"></div>
          </div>
          <span className="font-black text-xs uppercase tracking-[0.3em] pr-3">Consult AI</span>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
