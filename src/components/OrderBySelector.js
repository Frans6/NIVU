import React from 'react';
import Select from 'react-select';
import '../css/Home.css';
import customStyles from '../utils/CustomStyles';

const OrderBySelector = ({ columns, orderBy, onOrderByChange, orderDirection, onOrderDirectionChange, theme }) => {
  const handleOrderByChange = (selectedOptions) => {
    const selectedColumns = selectedOptions ? selectedOptions.map(option => option.value) : [];
    onOrderByChange(selectedColumns);
  };

  return (
    <div className={`order-by-container ${theme}`}>
      <div className="order-by-selector">
        <label>
          <span className="input-label">Ordenar por:</span>
          <Select
            isMulti
            value={orderBy.map(col => ({ value: col, label: col })) || 'Selecione uma coluna'}
            onChange={handleOrderByChange}
            options={columns.map(col => ({ value: col, label: col }))}
            placeholder="Selecione as colunas"
            classNamePrefix="custom-select"
            styles={customStyles(theme)}
          />
        </label>
      </div>
      <div className="order-direction-selector">
        <label className="input-label">
          Direção:
          <select
            value={orderDirection}
            onChange={(e) => onOrderDirectionChange(e.target.value)}
            className="input-field"
          >
            <option value="ASC">ASC</option>
            <option value="DESC">DESC</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default OrderBySelector;