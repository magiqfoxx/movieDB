import { useState } from "react";
import { Sign, Label, Item, ItemName } from "./styled";
import Checkbox from "../Checkbox";

export default function AccordionFilter({ title, options }) {
  const [open, setOpen] = useState(false);
  return (
    <Label onClick={() => setOpen(!open)}>
      <Sign>{open ? "-" : "+"}</Sign>
      <span>Select {title}</span>
      {options &&
        open &&
        options.map((item) => {
          return (
            <Item>
              <Checkbox></Checkbox>
              <ItemName>{item.name}</ItemName>
            </Item>
          );
        })}
    </Label>
  );
}
