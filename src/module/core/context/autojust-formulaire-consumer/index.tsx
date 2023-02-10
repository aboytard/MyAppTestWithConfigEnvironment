import React, { PropsWithChildren } from "react";
import { AutoJustContext } from "../auto-just-formulaire-context-provider";

export default function AutoJustFormulaireContextConsumer({
  children,
}: PropsWithChildren<any>): JSX.Element {
  return <AutoJustContext.Consumer>{children}</AutoJustContext.Consumer>;
}
