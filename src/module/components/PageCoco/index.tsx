import React, { useEffect, useState } from "react";

import { CocoProps } from "@/core/types/header";
import "./style.scss";
import ListPage from "../listPage/listPage";
import AutoJustPage from "@/pages/auto-just";
import AutojustIframe from "../modal/autojust-iframe";
import AutoJustFormulaireContextProvider, {
  AutoJustContext,
  useAutoJustContext,
} from "@/core/context/auto-just-formulaire-context-provider";
import EPages from "@/core/enums/page";

export default function MyApp({ title }: CocoProps): JSX.Element {
  const [selectedValue, setSelectedValue] = useState<EPages>();
  const [aujustPage, setAutojustPage] = useState<boolean>(false);

  // check how can I get those error taken away
  const chosePage = (event) => {
    setSelectedValue(EPages[event.target.value]);
  };

  useEffect(() => {
    if (selectedValue === EPages.autojust) {
      setAutojustPage(true);
    } else {
      setAutojustPage(false);
    }
  }, [selectedValue]);

  return (
    <div className="header-custom">
      <div className="header-component">{title}</div>
      <ListPage value={selectedValue} setValue={chosePage} />
      <AutoJustFormulaireContextProvider isAutoJustPageOpened={aujustPage}>
        <AutoJustPage />
      </AutoJustFormulaireContextProvider>
    </div>
  );
}
