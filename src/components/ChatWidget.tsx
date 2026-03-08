import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const quickReplies: Record<string, string> = {
  "What is ISHAN BETA MD?": "ISHAN BETA MD is an advanced WhatsApp automation bot (V3 ULTRA) with 50K+ active users. It provides features like movie downloads, AI chat, group management tools, music hub, and privacy protection — all through simple WhatsApp commands.",
  "How to get pair code?": "To get your pair code, visit the official pairing website:\n\nhttps://ishan-x-md-beta-pair-web-main.onrender.com\n\nFollow the instructions there to link ISHAN BETA MD to your WhatsApp account.",
  "List all commands": "Here are the available commands:\n\n`.alive` `.menu` `.movie` `.song` `.fb` `.tiktok` `.vv` `.apk` `.image` `.logo` `.video` `.anime` `.jid` `.pin` `.join` `.forward`\n\nType `.menu` in your WhatsApp to see the full categorized list!",
  "How to deploy?": "1. Download the source code from GitHub\n2. Fork the repository\n3. Set up your environment variables\n4. Deploy on a platform like Heroku, Render, or Railway\n5. Scan the QR code or use the pair code to connect\n\nFor more help, join our support group!",
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "👋 Hi! I'm the ISHAN-X AI Assistant. How can I help you today? Choose a question below or type your own!" },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;
    setInput("");

    const userMsg: Message = { role: "user", content: msg };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const reply = quickReplies[msg] ||
        "Thanks for your message! For detailed assistance, please join our WhatsApp support group or contact the developer directly. I can help with basic questions about ISHAN BETA MD commands, deployment, and features.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    }, 600);
  };

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-primary flex items-center justify-center glow-box-strong hover:opacity-90 transition-opacity"
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="w-6 h-6 text-primary-foreground" /> : <MessageCircle className="w-6 h-6 text-primary-foreground" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[70vh] flex flex-col glass-card overflow-hidden border-primary/20"
          >
            {/* Header */}
            <div className="px-4 py-3 gradient-primary flex items-center gap-3">
              <Bot className="w-6 h-6 text-primary-foreground" />
              <div>
                <div className="font-display text-sm tracking-wider text-primary-foreground">ISHAN-X AI</div>
                <div className="text-xs text-primary-foreground/70">Assistant</div>
              </div>
              <div className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80 min-h-[200px]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full gradient-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-primary-foreground" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] px-3 py-2 rounded-lg text-sm font-body whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-none"
                        : "bg-secondary text-secondary-foreground rounded-bl-none"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {Object.keys(quickReplies).map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="text-xs px-2.5 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors font-body"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-border/50 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 bg-secondary/50 border border-border/50 rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 font-body"
              />
              <button
                onClick={() => handleSend()}
                className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center hover:opacity-90 transition-opacity shrink-0"
              >
                <Send className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
