import { RevealEffect } from "react-reveal-effect";

const commonStyles = {
  width: "50vmin",
  height: "auto",
}
const imgStyles = {
  ...commonStyles,
  padding: "25px",
  pointerEvents: "none",
  userSelect: "none",
}

export default function RevealBgEffect({item}){

  return (
    <RevealEffect
      config={{
        effectBackground: false,
        borderColor: "rgba(255, 255, 255, 0.4)"
      }}
      style={{
        ...commonStyles,
        fontSize: 0,
      }}
    >
      <img src={item} alt="logo" style={imgStyles}/>
    </RevealEffect>
  );
}




