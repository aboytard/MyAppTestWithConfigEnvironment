import { stringify } from "querystring";
import React, { useState } from "react";

export interface IAutoJustFormulaireProps {
  lien?: string;
  marque?: string;
  modele?: string;
}

export default function AutoJustFormulaire({
  lien,
  marque,
  modele,
}: IAutoJustFormulaireProps): JSX.Element {
  const [newLien, setNewLien] = useState<string>(lien || "");
  const [newMarque, setNewMarque] = useState<string>(marque || "");
  const [newModele, setNewModele] = useState<string>(modele || "");
  const [email, setEmail] = useState<string>();
  const [telephone, setTelephone] = useState<string>();

  return (
    <div id="formulaire-autojust">
      <div id="formulaire-autojust-site-section">
        <label>SITE </label>
        <input
          id="input-lien"
          type="text"
          value={newLien}
          onChange={(event) => {
            setNewLien(event.target.value);
          }}
        ></input>
      </div>
      <div id="formulaire-autojust-site-marque">
        <label> MARQUE </label>
        <input
          id="input-marque"
          type="text"
          value={newMarque}
          onChange={(event) => {
            setNewMarque(event.target.value);
          }}
        ></input>
      </div>
      <div id="formulaire-autojust-site-modele">
        <label>MODELE </label>
        <input
          id="input-telephone"
          type="text"
          value={newModele}
          onChange={(event) => {
            setNewModele(event.target.value);
          }}
        ></input>s
      </div>
      <div id="formulaire-autojust-site-email">
        <label>EMAIL</label>
        <input
          id="input-email"
          type="text"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
      </div>
      <div id="formulaire-autojust-site-telephone">
        <label>TELEPHONE</label>
        <input
          id="input-lien"
          type="text"
          value={telephone}
          onChange={(event) => {
            setTelephone(event.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}
