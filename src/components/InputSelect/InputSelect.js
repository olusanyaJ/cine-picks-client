import "./InputSelect.scss";

const InputSelect = ({ label, name, type, value }) => {
  return (
    <section className="field">
      <label htmlFor={name} className="field__label">
        {label}
      </label>
      <select name={name} id={name} className="field__select">
        <option value="">Choose a Language</option>
        <option value="dog">English</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
    </section>
  );
};

export default InputSelect;
