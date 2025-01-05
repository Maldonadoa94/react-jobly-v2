import React from "react";
import "./Alert.css";

/** Alert: displays error messages for incorrect form inputs */
function Alert({ errors }) {
  return (
    <div className="Alert mt-3">
      <div className="alert alert-danger">
        {errors.map((e, idx) => (
          <p key={idx}>{e}</p>
        ))}
      </div>
    </div>
  );
}

export default Alert;