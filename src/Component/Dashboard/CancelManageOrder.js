import React from "react";

const CancelManageOrder = ({ onDialog }) => {
  return (
    <>
      <input type="checkbox" id="manageOrder" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="manageOrder"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Are You want to cancel it ?!</h3>
          <div className="modal-action">
            <label
              htmlFor="manageOrder"
              className="btn"
              onClick={() => onDialog(true)}
            >
              Yay!
            </label>
            <label
              htmlFor="manageOrder"
              className="btn"
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
