import React, { useEffect, useState } from "react";
import AutojustFormulaire from "@/components/modal/autojust-modal";
import AutoJustButton from "@/components/buttons/autojust";
import AutojustIframe from "@/components/modal/autojust-iframe";
import { useAutoJustContext } from "@/core/context/auto-just-formulaire-context-provider";

export default function AutoJustPage(): JSX.Element {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] =
    useState<boolean>(false);

  const { isPageOpened } = useAutoJustContext();
  useEffect(() => {
    isPageOpened;
  });

  const onSubmitModal = () => {
    setIsQuestionnaireOpen(!isQuestionnaireOpen); // on ferme
  };

  console.log("AutoJustPage isPageOpened", isPageOpened);
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
