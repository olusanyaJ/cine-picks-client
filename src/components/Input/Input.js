import "./Input.scss";

const Input = ({ name, type, value, placeholder, onChange, isError }) => {
  const inputClassName = `field__input ${isError ? "error" : ""}`;

  return (
    <section className="field">
      <input
        type={type}
        id={name}
        name={name}
        className={inputClassName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </section>
  );
};

export default Input;
