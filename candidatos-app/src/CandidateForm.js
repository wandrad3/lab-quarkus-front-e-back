// CandidateForm.js
import React, { useState } from 'react';
import './CandidateForm.css'

function CandidateForm() {
  const [formData, setFormData] = useState({
    photo: '',
    givenName: '',
    familyName: '',
    email: '',
    phone: '',
    jobTitle: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/candidates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Candidato cadastrado com sucesso!');
        // Limpar os campos do formulário após o cadastro
        setFormData({
          photo: '',
          givenName: '',
          familyName: '',
          email: '',
          phone: '',
          jobTitle: ''
        });
      } else {
        console.error('Erro ao cadastrar candidato:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao cadastrar candidato:', error.message);
    }
  };

  return (
    <div className="cadastro-candidato">
      <h2>Cadastro de Candidato</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="photo">Foto:</label>
          <input type="text" id="photo" name="photo" value={formData.photo} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="givenName">Nome:</label>
          <input type="text" id="givenName" name="givenName" value={formData.givenName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="familyName">Sobrenome:</label>
          <input type="text" id="familyName" name="familyName" value={formData.familyName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefone:</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="jobTitle">Cargo:</label>
          <input type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CandidateForm;
