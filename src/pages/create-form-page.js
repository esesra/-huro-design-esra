import React from "react";
import CreateForm from "../components/forms/create-form";



const CreateFormPage = () => {
  return (
    <div>
   <CreateForm/>
   <a class="button h-button is-rounded h-modal-trigger" data-modal="demo-right-actions-modal">Right Actions</a>
      
   
    </div>
  );
};

export default CreateFormPage;