import React, { useState } from 'react';
import '../css/About.css';

const About = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="about-page">
      <h1>Sobre o Sistema</h1>
      <p>
        Este sistema é uma ferramenta de construção de consultas SQL interativas. Ele permite que os usuários selecionem tabelas, colunas e apliquem filtros para gerar consultas SQL personalizadas.
      </p>
      <div className="about-section">
        <h2 onClick={() => toggleSection('como-funciona')} className="accordion-header">
          Como Funciona
        </h2>
        {activeSection === 'como-funciona' && (
          <div className="accordion-content">
            <p>O sistema funciona da seguinte maneira:</p>
            <ol>
              <li><strong>Seleção de Tabelas:</strong> Escolha uma tabela da base de dados disponível.</li>
              <li><strong>Escolha de Colunas:</strong> Selecione as colunas que deseja incluir na consulta.</li>
              <li><strong>Aplicação de Filtros:</strong> Adicione filtros e condições para refinar os resultados.</li>
              <li><strong>Ordenação:</strong> Defina a ordenação dos resultados, se necessário.</li>
              <li><strong>Limite de Resultados:</strong> Especifique um limite para o número de resultados retornados.</li>
              <li><strong>Visualização e Execução:</strong> Visualize a consulta SQL gerada e execute-a para obter os resultados.</li>
            </ol>
          </div>
        )}
      </div>
      <div className="about-section">
        <h2 onClick={() => toggleSection('objetivo')} className="accordion-header">
          Objetivo do Sistema
        </h2>
        {activeSection === 'objetivo' && (
          <div className="accordion-content">
            <p>
              O objetivo deste sistema é facilitar a criação de consultas SQL complexas sem a necessidade de escrever código manualmente. Ele é especialmente útil para usuários que não têm experiência em SQL, mas precisam extrair dados de um banco de dados de forma eficiente.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;