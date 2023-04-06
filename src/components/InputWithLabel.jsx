const InputWithLabel = ({ id, value, type = 'text', onInputChange, children }) => (
  <>
    <label htmlFor={id}>{children}</label>
    <input 
      type={type}
      id={id}
      value={value}
      onChange={onInputChange} 
    />
  </>
);

export default InputWithLabel