import { createContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const ColorPalette = {
    Thistle: "#DDBDD5",
    Iris: "#5448C8",
    Burgundy: "#74121D",

    GiantsOrange: "#F46036",
    RichBlack: "#001011",
    MintCream: "#F8FFF4",
    Mindaro: "#C5D86D",
    BitterSweet: "#FF595E",
    Beige: "#DDE0BD",
    RaisinBlack: "#1D1E2C",
    CoolGrey: "#A7ADC6",
  };

  return (
    <GlobalContext.Provider value={{ ColorPalette }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
