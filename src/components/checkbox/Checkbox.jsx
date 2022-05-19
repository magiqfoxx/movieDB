import React from "react";

import { CheckboxCont } from "./styled";

export default function Checkbox({ id, name, checked, label, onChange }) {
  // TODO: Style the component and checkmark to look like the mockup provided
  return (
    <CheckboxCont>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      ></input>
      <label htmlFor={id}>{label}</label>
    </CheckboxCont>
  );
}
