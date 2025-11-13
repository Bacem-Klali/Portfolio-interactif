import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    console.log('Simulation:', { name, email, message });
    setSent(true);
    setName(''); setEmail(''); setMessage('');
  };

  return (
    <div className="contact-page">
      <h2>Contact</h2>
      {sent && <div className="success">Message envoye</div>}
      <form onSubmit={submit}>
        <label>
          Nom
          <input value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label>
          Email
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>
          Message
          <textarea value={message} onChange={e => setMessage(e.target.value)} required />
        </label>
        <button className="btn-primary" type="submit">Envoyer un message</button>
      </form>
    </div>
  );
};

export default Contact;
