import React, { createContext, ReactNode, useContext, useState } from "react";

export type AutoJustPageNew = {
  isPageOpened: boolean;
  setIsPageOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialValue: AutoJustPageNew = {
  isPageOpened: false,
  setIsPageOpened: () => {},
};

export const AutoJustContext = createContext(initialValue);

export const useAutoJustContext = (): AutoJustPageNew =>
  useContext<AutoJustPageNew>(AutoJustContext);

export type ProviderStateProps = {
  isAutoJustPageOpened?: boolean;
  children: ReactNode;
};

export default function AutoJustFormulaireContextProvider({
  isAutoJustPageOpened, // for now there is no state provider, but need to be added
  children,
}: ProviderStateProps): JSX.Element {
  const [isPageOpened, setIsPageOpened] = useState<boolean>(
    isAutoJustPageOpened || false
  );
  console.log("AutoJustFormulaireContextProvider", isAutoJustPageOpened);

  return (
    <AutoJustContext.Provider value={{ isPageOpened, setIsPageOpened }}>
      {children}
    </AutoJustContext.Provider>
  );
}
