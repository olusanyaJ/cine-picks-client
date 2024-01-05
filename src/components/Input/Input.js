import "./Input.scss";

const Input = ({ label, name, type, value }) => {
  return (
    <section className="field">
      <label htmlFor={name} className="field__label">
        {label}
      </label>
      <input type={type} id={name} name={name} className="field__input" />
    </section>
  );
};

export default Input;
