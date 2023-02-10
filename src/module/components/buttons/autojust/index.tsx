import React, { useMemo } from "react";
import { UncontrolledTooltip } from "reactstrap";
import AutoJustIcon from "./components";

export default function AutoJustButton(): JSX.Element {
  // I would need to provide additional css to do something better
  const id = useMemo(() => {
    return "auto-just-button";
  }, []);
  return (
    <div>
      <button id={id}>
        <AutoJustIcon />
      </button>
      <UncontrolledTooltip placement="bottom" target={id} fade={false}>
        Une description sur autojust
      </UncontrolledTooltip>
    </div>
  );
}
