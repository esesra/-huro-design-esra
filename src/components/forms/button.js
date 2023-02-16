import React from "react";


const Button = ({isBold,
  isRounded,
  isPrimary,
  isInfo,
  isSuccess,
  isWarning,
  isDanger,
  isLight,
  iswhite,
  ButtonText,
  action,
  isHoverable,
  isGrey,
  isCircle,
  isDisabled,
  isLoading,
  isOutlined,
  icon,
  isElevated,
  isSmall,
  alignRight,
  alignLeft,
  alignCenter, children}) => {
  
  const getButtonClass = () => {
    const ClassName = [];

    if (isPrimary) {
      ClassName.push("is-primary");
    }
    if (isInfo) {
      ClassName.push("is-info");
    }
    if (isSuccess) {
      ClassName.push("is-success");
    }
    if (isWarning) {
      ClassName.push("is-warning");
    }
    if (isDanger) {
      ClassName.push("is-danger");
    }
    if (isLight) {
      ClassName.push("is-light");
    }
    if (iswhite) {
      ClassName.push("is-white");
    }
    if (isBold) {
      ClassName.push("is-bold");
    }
    if (isRounded) {
      ClassName.push("is-rounded");
    }
    if (isElevated) {
      ClassName.push("is-elevated");
    }
    if (action) {
      ClassName.push("h-action");
    }
    if (isHoverable) {
      ClassName.push("is-hoverable");
    }
    if (isGrey) {
      ClassName.push("is-grey");
    }
    if (isCircle) {
      ClassName.push("is-circle");
    }
    if (isDisabled) {
      ClassName.push("is-disabled");
    }
    if (isLoading) {
      ClassName.push("is-loading");
    }
    if (isOutlined) {
      ClassName.push("is-outlined");
    }

    return ClassName.join(" ");
  };
  const getIconClass = () => {
    const Class = [];

    if (isSmall) {
      Class.push("is-small");
    }
    if (alignRight) {
      Class.push("align-right");
    }
    if (alignLeft) {
      Class.push("align-right");
    }
    if (alignCenter) {
      Class.push("align-right");
    }

    return Class.join(" ");
  };

  return (
    <button className={`button h-button  ${getButtonClass()}`}>
      {icon && <span className={`icon ${getIconClass()}`}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
