import AutojustFormulaire from "@/components/modal/autojust-modal";
import React, { useState } from "react";

export default function AutoJustPage(): JSX.Element {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] =
    useState<boolean>(false);

  const onSubmitModal = () => {
    console.log("on envoie le modal quelque part");
    setIsQuestionnaireOpen(!isQuestionnaireOpen); // on ferme
  };
  return (
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
    </div>
  );
}
