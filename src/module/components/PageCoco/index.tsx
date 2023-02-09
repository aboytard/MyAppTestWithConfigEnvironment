import React from "react";

import { CocoProps } from "configurations/types/header";
import "./style.scss";
import ListPage from "../listPage/listPage";
import AutoJustPage from "@/pages/auto-just";

export default function MyApp({ title }: CocoProps): JSX.Element {
  return (
    <div className="header-custom">
      <div className="header-component">{title}</div>
      <ListPage />
      <AutoJustPage />
    </div>
  );
}
