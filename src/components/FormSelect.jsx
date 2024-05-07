function FormSelect({ label, name, list, defaultVal, size }) {
  return (
    <div className="form-control ">
      <label className="label" htmlFor={name}>
        <span className="label-text capitalize">{label}</span>
      </label>
      <select name={name} id={name} className={`select select-bordered ${size}`} defaultValue={defaultVal}>
        {list.map((item) => {
          return <option key={item} value={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default FormSelect