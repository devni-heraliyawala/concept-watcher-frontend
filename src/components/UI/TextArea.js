const TextArea = (props) => {
  const labelName = props.labelName;
  const placeholder = props.placeholder;
  const textAreaValue = props.value;

  const onInputTextAreaHandler = (e) => {
    e.preventDefault();
    const { value } = e.target;
    props.onInputTextArea(value);
  };
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{labelName}</span>
      </label>
      <textarea
        className="textarea textarea-bordered h-80"
        placeholder={placeholder}
        value={textAreaValue}
        onInput={onInputTextAreaHandler}
      ></textarea>
    </div>
  );
};

export default TextArea;
