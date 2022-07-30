import React from "react";
import "./../Css/Design.css";
import { useState } from "react";

const Sign = (props) => {
  const [focused, setFocused] = useState(false);
  const { lable, errorMessage, onChange, id, ...inputprops } = props;
  const handelfocus = (ev) => {
    setFocused(true);
  };
  return (
    <div className="forminput">
      <label className="lable">{lable}</label>
      <input
        {...inputprops}
        onChange={onChange}
        onBlur={handelfocus}
        onFocus={() =>
          inputprops.name === "confirmpasswword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};
export default Sign;
