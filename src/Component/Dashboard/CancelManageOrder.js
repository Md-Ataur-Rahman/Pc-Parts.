import React from "react";

const CancelManageOrder = ({ onDialog }) => {
  return (
    <>
      <input type="checkbox" id="manageOrder" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="manageOrder"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">Are You want to cancel it ?!</h3>
          <div class="modal-action">
            <label for="manageOrder" class="btn" onClick={() => onDialog(true)}>
              Yay!
            </label>
            <label
              for="manageOrder"
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

export default CancelManageOrder;
