import React, { useState } from 'react';
import { Query, Builder, Utils as QbUtils, BasicConfig } from '@react-awesome-query-builder/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlus, faCopy } from '@fortawesome/free-solid-svg-icons';
import TableSelector from '../components/TableSelector';
import OrderBySelector from '../components/OrderBySelector';
import '../css/Query.css';
import '../css/Home.css';
import databaseSchema from '../config/DatabasesSchema';
import { updateConfig, addQuery, deleteQuery, updateQuery, renderSQL, combineQueries, isGenerateButtonDisabled } from '../utils/QueryUtils';

const Home = ({ theme }) => {
  const [queries, setQueries] = useState({
    query1: {
      title: 'Consulta 1',
      tree: QbUtils.checkTree(QbUtils.loadTree({ id: QbUtils.uuid(), type: 'group' }), BasicConfig),
      selectedTable: '',
      selectedColumns: [],
      limit: 0,
      orderBy: [],
      orderDirection: 'ASC',
      config: BasicConfig
    }
  });

  const [combinedSQL, setCombinedSQL] = useState('');
  const [error, setError] = useState('');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('SQL copiado para a área de transferência!');
    }).catch(err => {
      console.error('Erro ao copiar o texto: ', err);
    });
  };

  return (
    <div className="home-page">
      <h1>Construtor de Consultas SQL</h1>
      {Object.entries(queries).map(([queryKey, query]) => (
        <div key={queryKey} className="query-section">
          <h3>{query.title}</h3>
          <button className="delete-query-button" onClick={() => deleteQuery(queries, setQueries, queryKey)} title="Deletar Query">
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          <TableSelector
            tables={databaseSchema}
            selectedTable={query.selectedTable}
            onTableSelect={(table) => {
              updateQuery(queries, setQueries, queryKey, { selectedTable: table });
              updateConfig(queries, setQueries, queryKey, table);
            }}
            selectedColumns={query.selectedColumns}
            onColumnSelect={(columns) => updateQuery(queries, setQueries, queryKey, { selectedColumns: columns })}
            theme={theme}
          />
          <Query
            {...query.config}
            value={query.tree}
            onChange={(newTree) => updateQuery(queries, setQueries, queryKey, { tree: newTree })}
            renderBuilder={props => (
              <div className="query-builder-container">
                <Builder {...props} />
              </div>
            )}
          />
          <div className="limit-order-container">
            <OrderBySelector
              columns={query.selectedColumns}
              orderBy={query.orderBy}
              onOrderByChange={(orderBy) => updateQuery(queries, setQueries, queryKey, { orderBy })}
              orderDirection={query.orderDirection}
              onOrderDirectionChange={(orderDirection) => updateQuery(queries, setQueries, queryKey, { orderDirection })}
              theme={theme}
            />
            <div className="limit-selector">
              <label className="input-label">
                Limite:
                <input
                  type="number"
                  value={query.limit}
                  onChange={(e) => updateQuery(queries, setQueries, queryKey, { limit: parseInt(e.target.value, 10) })}
                  className="input-field"
                />
              </label>
            </div>
          </div>
          <div className="sql-preview">
            <h4>Preview SQL:</h4>
            <pre>{renderSQL(queries, queryKey)}</pre>
            <button className="copy-sql-button" onClick={() => copyToClipboard(renderSQL(queries, queryKey))}>
              <FontAwesomeIcon icon={faCopy} /> Copiar SQL
            </button>
          </div>
        </div>
      ))}
      
      <button className="add-query-button" onClick={() => addQuery(queries, setQueries)} title='Adicionar Query'>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      
      {Object.keys(queries).length > 1 && (
        <div className="button-container">
          <button className="combine-button" onClick={() => combineQueries(queries, setCombinedSQL, setError)} disabled={isGenerateButtonDisabled(queries)}>
            Gerar Query Completa
          </button>
        </div>
      )}
      
      {error && <div className="error-message">{error}</div>}
      
      <div className={`combined-sql ${theme}`}>
        <h3>SQL Final:</h3>
        <pre>{combinedSQL}</pre>
        <button className="copy-sql-button" onClick={() => copyToClipboard(combinedSQL)}>
          <FontAwesomeIcon icon={faCopy} /> Copiar SQL
        </button>
      </div>
    </div>
  );
};

export default Home;