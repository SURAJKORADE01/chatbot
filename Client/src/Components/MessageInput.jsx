// MessageInput.js
import React from 'react';

function MessageInput({ input, setInput, onSendMessage }) {
  const handleInputChange = (event) => setInput(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSendMessage(input);
    setInput('');
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="form" onSubmit={handleSubmit} style={{ width: '100%' }}>
        <div className="input-group">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message"
            className="form-control"
            style={{ borderRadius: '30px' }}
          />
          <button type="submit" className="btn btn-primary" style={{ borderRadius: '30px', marginLeft: '10px' }}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default MessageInput;
