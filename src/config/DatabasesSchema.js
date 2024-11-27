const databaseSchema = {
    real_estate_listings: {
      name: 'real_estate_listings',
      label: 'Listagens de Imóveis',
      columns: {
        idf_listing: { label: 'ID Listagem', type: 'number' },
        idf_property_type: {
          label: 'Tipo de Imóvel',
          type: 'select',
          valueSources: ['value'],
          fieldSettings: {
            listValues: [
              { value: 1, title: 'Apartamento' },
              { value: 2, title: 'Casa em Condomínio' },
              { value: 3, title: 'Sítio' },
              { value: 4, title: 'Terreno' },
              { value: 5, title: 'Sobrado' },
              { value: 6, title: 'Kitnet' },
              { value: 7, title: 'Loja' }
            ]
          }
        },
        price_sale: { label: 'Preço Venda', type: 'number' },
        in_condominium: { label: 'Em Condomínio', type: 'boolean' },
        index_: { label: 'Índice', type: 'number' },
        score: { label: 'Score', type: 'number' },
        num_bedrooms: { label: 'Número de Quartos', type: 'number' }
      }
    },
    rental_properties: {
      name: 'rental_properties',
      label: 'Propriedades para Aluguel',
      columns: {
        id_listing: { label: 'ID', type: 'number' },
        price_rent: { label: 'Preço Aluguel', type: 'number' },
        area: { label: 'Área', type: 'number' },
        year_built: { label: 'Ano de Construção', type: 'number' },
        condition: { label: 'Condição', type: 'select', valueSources: ['value'], fieldSettings: { listValues: [{ value: 'new', title: 'Novo' }, { value: 'used', title: 'Usado' }] } },
        num_bathrooms: { label: 'Número de Banheiros', type: 'number' }
      }
    }
  };
  
  export default databaseSchema;