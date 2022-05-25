import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../../Images/errorpage.png";

const NotFound = () => {
  return (
    <>
      <img src={NotFoundImage} alt="" />
      <h3>We Are Lost ...</h3>
      <p>
        THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN MOVED, RENAMED, OR MIGHT
        NEVER EXISTED.
      </p>
      <Link to="/">
        <button className="primary_btn">Send Back</button>
      </Link>
    </>
  );
};

export default NotFound;
