const DropDown = (props) => {
  const labelName = props.labelName;
  const placeholder = props.placeholder;
  const dropdownValues = props.dropdownValues;
  const dropdownValue = props.value;

  const onChangeDropwnHandler = (e) => {
    e.preventDefault();
    const { value } = e.target;
    props.onChangeDropdown(value);
  };
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{labelName}</span>
      </label>
      <select
        className="select select-bordered"
        onChange={onChangeDropwnHandler}
        value={dropdownValue}
      >
        <option key={placeholder} disabled>
          Choose a {placeholder}
        </option>
        {dropdownValues.map((value) => (
          <option key={value}>{value}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
