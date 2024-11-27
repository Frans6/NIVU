import React from 'react';
import Select from 'react-select';
import '../css/Home.css';
import customStyles from '../utils/CustomStyles';

const TableSelector = ({ tables, selectedTable, onTableSelect, selectedColumns, onColumnSelect, theme }) => {
  const options = Object.keys(tables).map(tableName => ({
    value: tableName,
    label: tables[tableName].label
  }));

  const columnOptions = selectedTable ? [
    { value: 'all', label: 'Selecionar todas as colunas' },
    ...Object.entries(tables[selectedTable].columns).map(([colName, colData]) => ({
      value: colName,
      label: colData.label
    }))
  ] : [];

  return (
    <div className="table-selector">
      <Select
        value={selectedTable ? { value: selectedTable, label: tables[selectedTable]?.label } : null}
        onChange={(option) => onTableSelect(option.value)}
        options={options}
        classNamePrefix="custom-select"
        placeholder="Selecione uma tabela"
        styles={customStyles(theme)}
      />

      {selectedTable && (
        <div className="column-selector">
          <h4>Colunas:</h4>
          <Select
            isMulti
            value={selectedColumns.map(col => ({ value: col, label: tables[selectedTable].columns[col].label }))}
            onChange={(selectedOptions) => {
              const columns = selectedOptions ? selectedOptions.map(option => option.value) : [];
              onColumnSelect(columns);
            }}
            options={columnOptions}
            classNamePrefix="custom-select"
            placeholder="Selecione as colunas"
            styles={customStyles(theme)}
          />
        </div>
      )}
    </div>
  );
};

export default TableSelector;