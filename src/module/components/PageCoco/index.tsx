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
  const [autojustPage, setAutojustPage] = useState<boolean>();

  return (
    <div className="header-custom">
      <div className="header-component">{title}</div>
      <AutoJustFormulaireContextProvider isAutoJustPageOpened={autojustPage}>
        <ListPage />
        <AutoJustPage />
      </AutoJustFormulaireContextProvider>
    </div>
  );
}
