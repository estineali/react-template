import { useContext } from "react";
import GlobalContext from "../GlobalContext";

const LayoutTwo = () => {
  const GC = useContext(GlobalContext);
  return (
    <div
      className="flex overflow-hidden flex-col items-center min-h-screen px-20 pt-12 pb-4max-md:px-5"
      style={{ backgroundColor: GC.ColorPalette.RaisinBlack }}
    >
      <Title heading={"Shahwrong"} />
      <Subtitle />
    </div>
  );
};

const Title = (props) => {
  const GC = useContext(GlobalContext);

  return (
    <div className="self-stretch mt-10 max-md:max-w-full">
      <div className="gap-5 max-md:flex-col text-center">
        <h1
          className="text-4xl font-bold text-center"
          style={{
            color: GC.ColorPalette.Beige,
          }}
        >
          {props.heading}
        </h1>
      </div>
    </div>
  );
};

const Subtitle = (props) => {
  const GC = useContext(GlobalContext);

  return (
    <div className="flex flex-col items-center w-full max-w-full max-md:max-w-full text-center">
      <div
        className="mt-7 font-light text-centermax-md:max-w-full text-lg"
        style={{
          color: GC.ColorPalette.Beige,
        }}
      >
        <p>That's right</p>
      </div>
    </div>
  );
};
export default LayoutTwo;
