import React from "react";

import "./form-input.styles.scss";

//this other props are everything being passed to this component - like name, type, value, required etc
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        // this will always have the from input label class
        // and will add the shrink class if the user has typed anything
        className={`${otherProps.value.length} ? 'shrink; : ''} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
