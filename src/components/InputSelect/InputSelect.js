import "./InputSelect.scss";

const InputSelect = ({ name, value, onChange }) => {
  return (
    <section className="field">
      <select
        name={name}
        id={name}
        className="field__select"
        value={value}
        onChange={onChange}
      >
        <option value="">Choose a Language</option>
        <option value="english">English</option>
        <option value="french">French</option>
        <option value="spanish">Spanish</option>
        <option value="italian">Italian</option>
      </select>
    </section>
  );
};

export default InputSelect;
