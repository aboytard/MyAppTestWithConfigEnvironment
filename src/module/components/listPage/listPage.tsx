import React from "react";
import EPages from "@/core/enums/page";

export interface IListPage {
  value: EPages;
  setValue: React.Dispatch<React.SetStateAction<EPages>>;
}

export default function ListPage({ value, setValue }: IListPage): JSX.Element {
  return (
    <select onChange={setValue} value={value}>
      {Object.keys(EPages).map((key) => (
        <option key={key} value={key}>
          {key}
        </option>
      ))}
    </select>
  );
}
