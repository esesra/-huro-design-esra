import React from "react";

const Input = (props) => {
  const {
    PlaceHolder,
    FormHelpText,
    Value,
    ClassNameForControl,
    HandleInputData,
    Type,
    InputClassName,
    LeftIcon,
    ValidationIconSucces,
    ValidationIconError,
    Size,
    MaxLength,
    MinLength,
    OnSubmit,
  } = props;

  return (
    <div className="field" onSubmit={OnSubmit}>
      <div className={`control ${ClassNameForControl}`}>
        <input
          type={Type}
          className={`input ${InputClassName}`}
          placeholder={PlaceHolder}
          value={Value}
          onChange={HandleInputData}
          size={`${Size}`}
          maxLength={`${MaxLength}`}
          minLength={`${MinLength}`}
        />
        {LeftIcon &&(<div className="form-icon">
          {LeftIcon}
        </div>)}
        {ValidationIconSucces &&(
        <div className="validation-icon is-success">{ValidationIconSucces}</div>)}
        {ValidationIconError &&(
        <div className="validation-icon is-error">{ValidationIconError}</div>)}
      </div>
      { FormHelpText &&( <p className="help success-text">{FormHelpText}</p>)}
    
    </div>
  );
};

export default Input;
