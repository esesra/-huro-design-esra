import React from "react";
import Input from "./input";
import { CiTwitter } from "react-icons/ci";
import { FiCheck } from "react-icons/fi";
import { BiErrorCircle } from "react-icons/bi";
import Button from "./button";
import Card from "../Cards/card";
;



const CreateForm = () => {
  return (
    <div >
      <Input
        PlaceHolder="Name"
        Size="20"
        MaxLength="10"
        MinLength="2"
      />
      <Input
        PlaceHolder="lastName"
        FormHelpText="Please Enter Your Name"
        LeftIcon={<CiTwitter />}
        ClassNameForControl="has-icon has-validation has-error "
        Size="20"
        MaxLength="10"
        MinLength="2"
      />
      <Input
        PlaceHolder="Name"
        FormHelpText="Please Enter Your Name"
        LeftIcon={<CiTwitter />}
        ClassNameForControl="has-icon has-validation has-success "
        Type="text"
        InputClassName="is-rounded  "
        ValidationIconSucces={<FiCheck />}
        Size="20"
        MaxLength="10"
        MinLength="2"
      />  
      <Card/>
  
    </div>
   
  );
};

export default CreateForm;


