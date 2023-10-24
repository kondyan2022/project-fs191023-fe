const RadioOption = ({ id, name, value, checked, label, onChange }) => (
  <div className="radio">
    <input
      className="radio-input"
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      required
    />
    <label className="radio-label" htmlFor={id}>
      {label}
    </label>
  </div>
);
export default RadioOption;
