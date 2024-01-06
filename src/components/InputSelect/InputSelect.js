import "./InputSelect.scss";

const InputSelect = ({ name, value, onChange, isError, label }) => {
  const inputClassName = `field__select ${isError ? "error" : ""}`;

  return (
    <section className="field">
      <select
        name={name}
        id={name}
        className={inputClassName}
        value={value}
        onChange={onChange}
      >
        <option label={label}></option>
        <option value="english">English</option>
        <option value="french">French</option>
        <option value="spanish">Spanish</option>
        <option value="italian">Italian</option>
      </select>
    </section>
  );
};

export default InputSelect;
