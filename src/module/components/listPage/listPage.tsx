import React, { useState } from "react";
// import EPages from "configurations/enums/page";

// CHECK WHY DOES THE IMPORT NOT WORK
export enum EPages {
  welcome = "welcome",
  summary = "summary",
  calendar = "calendar",
}

export default function ListPage(): JSX.Element {
  const [selectedValue, setSelectedValue] = useState();

  const handleChange = (event) => {
    setSelectedValue(EPages[event.target.value]);
  };
  return (
    <select onChange={handleChange}>
      {Object.keys(EPages).map((key) => (
        <option key={key} value={key}>
          {key}
        </option>
      ))}
    </select>
  );
}
