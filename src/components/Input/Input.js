import "./Input.scss";

const Input = ({ name, type, value, placeholder, onChange }) => {
  return (
    <section className="field">
      <input
        type={type}
        id={name}
        name={name}
        className="field__input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </section>
  );
};

export default Input;
