import React from "react";
import { FiCheck } from "react-icons/fi";
import Button from "./button";

const CreateButton = () => {
  return (
    <>
      <div className="m-5 "  style={{ display: "inline-block"}}>
        <Button isInfo isBold>
        Info
        </Button>
      </div>
      <div style={{ display: "inline-block", margin: "20px" }}>
        <Button isWarning>
        Warning
        </Button>
      </div>
      <div style={{ display: "inline-block", margin: "20px" }}>
        <Button isPrimary isRounded>
        Primary
        </Button>
      </div>
      <div style={{ display: "inline-block", margin: "20px" }}>
        <Button action isHoverable>

        </Button>
      </div>
      <div style={{ display: "inline-block", margin: "20px" }}>
        <Button isDanger isOutlined >
        Danger
        </Button>
      </div>
      <div style={{ display: "inline-block", margin: "20px" }}>
        <Button isDanger isLoading>
        

        </Button>
      </div>
      <div style={{ display: "inline-block", margin: "20px" }}>
        <Button isWarning icon={<FiCheck />} ButtonText="icon" />
      </div>
    </>
  );
};

export default CreateButton;
