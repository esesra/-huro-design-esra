import React, { useState } from "react";
import Input from "../components/forms/input";

const AccountDeailtsModal = () => {
  const [newEmail, setNewEmail] = useState("");

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };
  const [isActive, setIsActive] = useState(false);

  const togglePopup = () => {
    setIsActive(!isActive);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  };
  return (
    <div>
      <a
        className="button h-button is-rounded  is-fullwidth h-modal-close"
        id="popup"
        onClick={togglePopup}
      >
        Popup
      </a>

      <div
        id="demo-standard-form-modal"
        className={`modal h-modal ${isActive ? "is-active" : ""}`}
      >
        <div class="modal-background h-modal-close"></div>
        <div class="modal-content">
          <div class="modal-card">
            <header class="modal-card-head">
              <h3>Change Email Adress</h3>
              <button
                class="h-modal-close ml-auto"
                aria-label="close"
                onClick={togglePopup}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </header>
            <div class="modal-card-body">
              <div class="inner-content">
                <form class="modal-form">
                  <div class="field">
                    <label>New Email Adress *</label>
                    <div class="control">
                      <Input
                        Size="60"
                        Type="email"
                        className="input"
                        placeholder="Email"
                        onChange={handleEmailChange}
                      />
                    </div>
                  </div>
                  <div class="field">
                    <label>Current Password *</label>
                    <div class="control">
                      <Input
                        Size="60"
                        Type="password"
                        class="input"
                        placeholder="Password"
                      />
                    </div>
                    <div style={{ margin: "5%"}}>
                      <h1 className="is-thin is-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-info"
                          style={{ marginRight: "1%"}}
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                        Please confirm your new mail by clicking confirmation
                        link sent to your new email adress
                      </h1>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-card-foot is-end">
              <a
                className="button h-button is-rounded h-modal-close"
                onClick={togglePopup}
              >
                Cancel
              </a>
              <a
                className="button h-button is-primary is-raised is-rounded"
                onClick={handleSubmit}
              >
                Change Email Adress
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDeailtsModal;
