import React from 'react';

function EmailView({ email, onBack }) {
  return (
    <div className="email-view">
      <button onClick={onBack}>Back</button>
      <h2>{email.subject}</h2>
      <p><strong>From:</strong> {email.sender}</p>
      <p>{email.body}</p>
    </div>
  );
}

export default EmailView;