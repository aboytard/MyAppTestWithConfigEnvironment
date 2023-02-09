import AutoJustFormulaire from "@/components/formulaire/autojust";
import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "./style.scss";

export interface IAutoJustFormulaireModalProps {
  lien: string;
  marque: string;
  modele: string;
  isOpen: boolean;
  onSubmit: () => void;
  toggle: () => void;
}

export default function AutojustFormulaire({
  lien,
  marque,
  modele,
  isOpen,
  onSubmit,
  toggle,
}: IAutoJustFormulaireModalProps): JSX.Element {
  return (
    <div className="modal fade show">
      <div className="modal-content">
        <Modal isOpen={isOpen}>
          <ModalHeader> Formulaire Auto-just </ModalHeader>
          <ModalBody>
            <AutoJustFormulaire lien={lien} marque={marque} modele={modele} />
          </ModalBody>
          <ModalFooter>
            <button onClick={onSubmit}> SUBMIT</button>
            <button onClick={toggle}>CLOSE</button>
            <a href="https://www.autojust.fr/questionnaire-de-contact?l=https%3A%2F%2Fwww.annonces-automobile.com%2Facheter%2Fvoiture%2Faston-martin-db11-aston-martin-v8-vantage-coupe-5111227&ma=Aston+Martin&mo=DB11">
              Get More Info autojust
            </a>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}
