import { stringify } from "querystring";
import React, { useState } from "react";
import { Button } from "reactstrap";
import "./style.scss";

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
    <table className="table">
      <tr>
        <td className="td">
          <label className="text">SITE </label>
        </td>
        <td className="td">
          <input
            id="input-lien"
            className="input"
            type="text"
            value={newLien}
            onChange={(event) => {
              setNewLien(event.target.value);
            }}
          ></input>
        </td>
      </tr>
      <tr>
        <td className="td">
          <label className="text"> MARQUE </label>
        </td>
        <td className="td">
          <input
            id="input-marque"
            className="input"
            type="text"
            value={newMarque}
            onChange={(event) => {
              setNewMarque(event.target.value);
            }}
          ></input>
        </td>
      </tr>
      <tr>
        <td className="td">
          <label className="text">MODELE </label>
        </td>
        <td className="td">
          <input
            id="input-telephone"
            className="input"
            type="text"
            value={newModele}
            onChange={(event) => {
              setNewModele(event.target.value);
            }}
          ></input>
        </td>
      </tr>
      <tr>
        <td className="td">
          <label className="text">EMAIL</label>
        </td>
        <td className="td">
          <input
            id="input-email"
            className="input"
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></input>
        </td>
      </tr>
      <tr>
        <td className="td">
          <label className="text">TELEPHONE</label>
        </td>
        <td className="td">
          <input
            id="input-lien"
            className="input"
            type="text"
            value={telephone}
            onChange={(event) => {
              setTelephone(event.target.value);
            }}
          ></input>
        </td>
      </tr>
      <tr className="tr">
        <td className="td">
          <Button className="button">
            <div className="text">coco</div>
          </Button>
        </td>
        <td className="td">
          <Button className="button">
            <div className="text">KKKKKKKKKKKK KKKKKKKKKKKK</div>
          </Button>
        </td>
      </tr>
    </table>
  );
}
