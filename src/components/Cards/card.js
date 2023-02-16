import React from "react";

const Card = ({
  sCard,
  rCard,
  lCard,
  isRaised,
  isPrimary,
  isSecondary,
  isInfo,
  isSuccess,
  isWarning,
  isDanger,
  demoCard,
  isMultiline,
  isNarrow,
  demoTitle,
  is1,
  is2,
  is3,
  is4,
  is5,
  is6,
  is7,
  is8,
  is9,
  is10,
  is11,
  is12,
  cardHeader,
  headerClass,
  cardMedia,
  children,

}) => {
  const getColumn = () => {
    const ClassName = [];

    if (isMultiline) {
        ClassName.push("is-multiline");
    }
    if (is1) {
        ClassName.push("is-1");
    }
    if (is2) {
        ClassName.push("is-2");
    }
    if (is3) {
        ClassName.push("is-3");
    }
    if (is4) {
        ClassName.push("is-4");
    }
    if (is5) {
        ClassName.push("is-5");
    }
    if (is6) {
        ClassName.push("is-6");
    }
    if (is7) {
        ClassName.push("is-7");
    }
    if (is8) {
        ClassName.push("is-8");
    }
    if (is9) {
        ClassName.push("is-9");
    }
    if (is10) {
        ClassName.push("is-10");
    }
    if (is11) {
        ClassName.push("is-11");
    }
    if (is12) {
        ClassName.push("is-12");
    }

    return ClassName.join(" ");
  };
  const getCard = () => {
    const Class = [];

    if (sCard) {
      Class.push("s-card");
    }
    if (rCard) {
      Class.push("r-card");
    }
    if (lCard) {
      Class.push("l-card");
    }
    if (isRaised) {
      Class.push("is-raised");
    }
    if (isPrimary) {
      Class.push("is-primary");
    }
    if (isSecondary) {
        Class.push("is-secondary");
      }
    if (isInfo) {
      Class.push("is-info");
    }
    if (isSuccess) {
      Class.push("is-success");
    }
    if (isWarning) {
      Class.push("is-warning");
    }
    if (isDanger) {
      Class.push("is-danger");
    }
    if (demoCard) {
        Class.push("demo-card");
      }
      if (demoTitle) {
        Class.push("demo-title");
      }



    return Class.join(" ");
  };

  return (
    <div className={`column ${getColumn()}`}>
      <div className={`${getCard()}`}>
        {cardHeader &&  <h3 className={headerClass}>{cardHeader}</h3> }
       {children}
      </div>
    </div>
  );
};

export default Card;
