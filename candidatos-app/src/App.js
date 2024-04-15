// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; // Importe o Router e Link
import Candidate from './Candidate';
import CandidateForm from './CandidateForm'; // Importe o componente CandidateForm
import Header from './Header';
import Footer from './Footer';
import './App.css'; // Importe o arquivo de estilos CSS

function App() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/candidates')
      .then(response => response.json())
      .then(data => setCandidates(data))
      .catch(error => console.error('Erro ao buscar candidatos:', error));
  }, []);

  return (
    <Router> {/* Envolve o conteúdo em um Router */}
      <div className="App">
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Página Inicial</Link>
            </li>
            <li>
              <Link to="/cadastro">Cadastro de Candidato</Link> {/* Link para a página de cadastro de candidatos */}
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/cadastro">
            <CandidateForm /> {/* Renderiza o componente CandidateForm quando a rota for '/cadastro' */}
          </Route>
          <Route path="/">
            <div className="candidates-container">
              {candidates.map(candidate => (
                <Candidate key={candidate.email} data={candidate} />
              ))}
            </div>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
