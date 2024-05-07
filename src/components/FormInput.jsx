import React from "react";

const FormInput = ({ label, type, name, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label className=" w-full mb-3">
        <div className="label">
          <span className="label-text capitalize">{label}</span>
        </div>
        <input
          type={type}
          name={name}
          placeholder="Type here"
          defaultValue={defaultValue}
          className={`input input-bordered w-full ${size}`}
        />
      </label>
    </div>
  );
};
export default FormInput;
