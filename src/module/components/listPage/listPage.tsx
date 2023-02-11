import React, { useEffect, useState } from "react";
import EPages from "@/core/enums/page";
import { useAutoJustContext } from "@/core/context/auto-just-formulaire-context-provider";

export default function ListPage(): JSX.Element {
  const [selectedValue, setSelectedValue] = useState<EPages>();
  const { setIsPageOpened } = useAutoJustContext();

  const chosePage = (event) => {
    setSelectedValue(EPages[event.target.value]);
  };

  useEffect(() => {
    if (selectedValue === EPages.autojust) {
      setIsPageOpened(true);
    } else {
      setIsPageOpened(false);
    }
  }, [selectedValue]);
  return (
    <select onChange={chosePage} value={selectedValue}>
      {Object.keys(EPages).map((key) => (
        <option key={key} value={key}>
          {key}
        </option>
      ))}
    </select>
  );
}
