import React from "react";

const CancelManageAllModal = ({ onDialog }) => {
  return (
    <>
      <input type="checkbox" id="manageallmodal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="manageallmodal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">Are You want to cancel it ?!</h3>
          <div class="modal-action">
            <label
              for="manageallmodal"
              class="btn"
              onClick={() => onDialog(true)}
            >
              Yay!
            </label>
            <label
              for="manageallmodal"
              class="btn"
              onClick={() => onDialog(false)}
            >
              No!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancelManageAllModal;
