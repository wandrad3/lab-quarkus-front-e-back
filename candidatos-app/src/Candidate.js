// Candidate.js
import React from 'react';
import './Candidate.css'

function Candidate({ data }) {
  const { photo, fullName, email, phone, jobTitle } = data;

  // Verifica se há uma foto antes de renderizar o candidato
  if (!photo) {
    return null; // Retorna null se não houver foto
  }

  return (
    <div className="candidate">
      <img src={photo} alt={`${fullName}`} />
      <div>
        <h2>{`${fullName}`}</h2>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{jobTitle}</p>
      </div>
    </div>
  );
}

export default Candidate;
