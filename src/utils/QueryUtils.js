import { BasicConfig, Utils as QbUtils } from '@react-awesome-query-builder/ui';
import databaseSchema from '../config/DatabasesSchema';

export const updateConfig = (queries, setQueries, queryKey, table) => {
  const newConfig = {
    ...BasicConfig,
    fields: databaseSchema[table]?.columns || {}
  };
  setQueries(prev => ({
    ...prev,
    [queryKey]: {
      ...prev[queryKey],
      config: newConfig
    }
  }));
};

export const addQuery = (queries, setQueries) => {
  const newQueryKey = `query${Object.keys(queries).length + 1}`;
  const newQueryTitle = `Consulta ${Object.keys(queries).length + 1}`;
  setQueries(prev => ({
    ...prev,
    [newQueryKey]: {
      title: newQueryTitle,
      tree: QbUtils.checkTree(QbUtils.loadTree({ id: QbUtils.uuid(), type: 'group' }), BasicConfig),
      selectedTable: '',
      selectedColumns: [],
      limit: 0,
      orderBy: [],
      orderDirection: 'ASC',
      config: BasicConfig
    }
  }));
};

export const deleteQuery = (queries, setQueries, queryKey) => {
  setQueries(prev => {
    const newQueries = { ...prev };
    delete newQueries[queryKey];
    const renumberedQueries = {};
    Object.keys(newQueries).forEach((key, index) => {
      renumberedQueries[`query${index + 1}`] = {
        ...newQueries[key],
        title: `Consulta ${index + 1}`
      };
    });
    return renumberedQueries;
  });
};

export const updateQuery = (queries, setQueries, queryKey, updates) => {
  setQueries(prev => ({
    ...prev,
    [queryKey]: { ...prev[queryKey], ...updates }
  }));
};

export const renderSQL = (queries, queryKey) => {
  const query = queries[queryKey];
  if (!query.selectedTable && !query.selectedColumns.length && !QbUtils.sqlFormat(query.tree, query.config)) return '';
  
  const columns = query.selectedColumns.length ? query.selectedColumns.join(', ') : '*';
  const baseSQL = QbUtils.sqlFormat(query.tree, query.config) || '';
  const orderBySQL = query.orderBy.length ? `ORDER BY ${query.orderBy.join(', ')} ${query.orderDirection}` : '';
  const limitSQL = query.limit > 0 ? `LIMIT ${query.limit}` : '';
  
  return `SELECT ${columns} 
          FROM ${query.selectedTable} 
          ${baseSQL ? `WHERE ${baseSQL}` : ''}
          ${orderBySQL}
          ${limitSQL}`.trim();
};

export const combineQueries = (queries, setCombinedSQL, setError) => {
  const sqls = Object.keys(queries).map(queryKey => {
    const query = queries[queryKey];
    const columns = query.selectedColumns.length ? query.selectedColumns.join(', ') : '*';
    const baseSQL = QbUtils.sqlFormat(query.tree, query.config) || '';
    
    return `SELECT ${columns} 
            FROM ${query.selectedTable} 
            ${baseSQL ? `WHERE ${baseSQL}` : ''}`.trim();
  }).filter(sql => sql);

  const columnCounts = sqls.map(sql => sql.split('SELECT')[1].split('FROM')[0].split(',').length);

  if (new Set(columnCounts).size !== 1) {
    setError('Todas as consultas devem ter o mesmo número de colunas selecionadas para o UNION ALL.');
    return;
  }

  const baseSQL = sqls.join('\n\n    UNION ALL\n\n    ');

  const query = queries[Object.keys(queries)[0]];
  let finalSQL = `WITH listing_level_base AS (
    ${baseSQL}
  )
  SELECT * FROM listing_level_base`;

  if (query.orderBy) {
    finalSQL += ` ORDER BY ${query.orderBy} ${query.orderDirection || 'ASC'}`;
  }
  if (query.limit) {
    finalSQL += ` LIMIT ${query.limit}`;
  }

  setCombinedSQL(finalSQL);
  setError('');
};

export const isGenerateButtonDisabled = (queries) => {
  return Object.values(queries).some(query => 
    !query.selectedTable || !query.selectedColumns.length || !QbUtils.sqlFormat(query.tree, query.config)
  );
};