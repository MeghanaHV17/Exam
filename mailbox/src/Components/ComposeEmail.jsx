import React, { useState } from 'react';

function ComposeEmail({ onClose }) {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSend = () => {
    alert(`Email sent to ${to} with subject "${subject}"`);
    onClose();
  };

  return (
    <div className="email-view">
      <h2>Compose Email</h2>
      <input placeholder="To" value={to} onChange={e => setTo(e.target.value)} />
      <input placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} />
      <textarea placeholder="Body" value={body} onChange={e => setBody(e.target.value)} />
      <button onClick={handleSend}>Send</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default ComposeEmail;