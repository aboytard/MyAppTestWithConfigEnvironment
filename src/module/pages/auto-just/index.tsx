import React, { useEffect, useState } from "react";
import AutojustFormulaire from "@/components/modal/autojust-modal";
import AutoJustButton from "@/components/buttons/autojust";
import AutojustIframe from "@/components/modal/autojust-iframe";
import { useAutoJustContext } from "@/core/context/auto-just-formulaire-context-provider";

export default function AutoJustPage(): JSX.Element {
  const { isPageOpened, setIsPageOpened } = useAutoJustContext();
  console.log("AutoJustPage isPageOpened", isPageOpened);

  const [isQuestionnaireOpen, setIsQuestionnaireOpen] =
    useState<boolean>(false);

  const onSubmitModal = () => {
    setIsQuestionnaireOpen(!isQuestionnaireOpen); // on ferme
    setIsPageOpened(false);
  };

  return isPageOpened ? (
    <div id="auto-just-page">
      <button onClick={() => setIsQuestionnaireOpen(!isQuestionnaireOpen)}>
        Open Modal Autojust
      </button>
      <AutojustFormulaire
        lien={""}
        marque={""}
        modele={""}
        isOpen={isQuestionnaireOpen}
        onSubmit={onSubmitModal}
        toggle={() => setIsQuestionnaireOpen(!isQuestionnaireOpen)}
      />
      <AutoJustButton />
      <AutojustIframe />
    </div>
  ) : (
    <></>
  );
}
