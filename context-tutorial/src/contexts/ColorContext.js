import {createContext, useState} from "react";

const ColorContext = createContext({
  state: {
    subColor: "",
  },
  action: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

const ColorProvider = ({children}) => {
  const [color, setColor] = useState("red");
  const [subColor, setSubColor] = useState("purple");

  const value = {
    state: {color, subColor},
    action: {setColor, setSubColor},
  };

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
};

const {Consumer: ColorConsumer} = ColorContext;
// const ColorConsumer = ColorContext.Consumer //와 동치
export {ColorConsumer, ColorProvider};
export default ColorContext;
