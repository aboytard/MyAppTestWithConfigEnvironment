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
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}
