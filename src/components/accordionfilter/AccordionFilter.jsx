import { useState } from "react";
import { Sign, Label, Item, ItemName } from "./styled";
import Checkbox from "../Checkbox";
import { useMovie } from "../../movie-context";

export default function AccordionFilter({ title, options }) {
  const { dispatch } = useMovie();
  const [open, setOpen] = useState(false);

  return (
    <Label onClick={() => setOpen(!open)}>
      <Sign>{open ? "-" : "+"}</Sign>
      <span>Select {title}</span>
      <div onClick={(e) => e.stopPropagation()}>
        {options &&
          open &&
          options.map((item) => {
            return (
              <Item>
                <Checkbox
                  onChange={(e) =>
                    dispatch({ type: "setFilter", payload: e.target.value })
                  }
                ></Checkbox>
                <ItemName>{item.name}</ItemName>
              </Item>
            );
          })}
      </div>
    </Label>
  );
}
