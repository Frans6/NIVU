const customStyles = (theme) => ({
  option: (provided, state) => ({
    ...provided,
    backgroundColor: theme === 'dark' ? (state.isSelected ? '#333' : state.isFocused ? '#444' : '#555') : (state.isSelected ? '#0062ff' : state.isFocused ? '#0056e0' : null),
    color: theme === 'dark' ? '#fff' : (state.isSelected || state.isFocused ? '#fff' : '#000'),
    padding: 10,
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: theme === 'dark' ? '#555' : '#fff',
    color: theme === 'dark' ? '#ddd' : '#000',
    borderColor: theme === 'dark' ? '#666' : '#ccc',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: theme === 'dark' ? '#ddd' : '#000',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: theme === 'dark' ? '#ddd' : '#000',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: theme === 'dark' ? '#555' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: theme === 'dark' ? '#333' : '#e0e0e0',
    color: theme === 'dark' ? '#fff' : '#000',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: theme === 'dark' ? '#fff' : '#000',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: theme === 'dark' ? '#fff' : '#000',
    ':hover': {
      backgroundColor: theme === 'dark' ? '#555' : '#ccc',
      color: theme === 'dark' ? '#fff' : '#000',
    },
  }),
});

export default customStyles;