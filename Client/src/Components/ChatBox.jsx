// ChatBox.js
import React from 'react';

function ChatBox({ messages }) {
  return (
    <div className="chat-box mb-4" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
      {messages.map((msg, index) => (
        <div key={index} className="message mb-2">
          <div className="alert alert-primary">
            <span>{msg.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatBox;
