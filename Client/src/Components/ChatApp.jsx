import React, { useState, useEffect } from 'react';
import ChatBox from './ChatBox';
import MessageInput from './MessageInput';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const fetchMessages = async () => {
    const response = await axios.get('http://localhost:5000/messages');
    setMessages(response.data);
  };

  const handleSendMessage = async (message) => {
    if (message.trim()) {
      const response = await axios.post('http://localhost:5000/messages', { message });
      setMessages([...messages, response.data]);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="chat-app container my-4" style={{ maxWidth: '600px' }}>
      <ChatBox messages={messages} />
      <MessageInput input={input} setInput={setInput} onSendMessage={handleSendMessage} />
    </div>
  );
}

export default ChatApp;
