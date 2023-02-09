import React, { useState } from "react";

export default function AutojustIframe(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button id="open-modal" onClick={() => setIsOpen(!isOpen)}>
        Open Modal
      </button>
      {isOpen ? (
        <div className="overlay">
          <iframe src="https://www.autojust.fr/questionnaire-de-contact?l=https%3A%2F%2Fwww.annonces-automobile.com%2Facheter%2Fvoiture%2Faston-martin-db11-aston-martin-v8-vantage-coupe-5111227&ma=Aston+Martin&mo=DB11"></iframe>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
