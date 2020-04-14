import { useState } from "react";

export default (initialVal = "") => {
  const [value, setValue] = useState(initialVal);
  const handleChange = v => {
    setValue(v);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};
