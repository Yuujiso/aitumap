import React from "react";
import FirstFloorAll from "../map/FirstFloorAll.jsx";
import FirstFloorFirstBlock from "../map/FirstFloorFirstBlock.jsx";
import FirstFloorSecondBlock from "../map/FirstFloorSecondBlock.jsx";
import FirstFloorThirdBlock from "../map/FirstFloorThirdBlock.jsx";
import SecondFloorAll from "../map/SecondFloorAll.jsx";
import SecondFloorFirstBlock from "../map/SecondFloorFirstBlock";
import SecondFloorSecondBlock from "../map/SecondFloorSecondBlock.jsx";
import SecondFloorThirdBlock from "../map/SecondFloorThirdBlock.jsx";
import ThirdFloorAll from "../map/ThirdFloorAll";
import ThirdFloorFirstBlock from "../map/ThirdFloorFirstBlock.jsx";
import ThirdFloorSecondBlock from "../map/ThirdFloorSecondBlock.jsx";
import ThirdFloorThirdBlock from "../map/ThirdFloorThirdBlock.jsx";

const Show = ({ selectedFloorBlockOption }) => {
  switch (selectedFloorBlockOption) {
    case "firstC1.1":
      return <FirstFloorFirstBlock />;
    case "secondC1.1":
      return <SecondFloorFirstBlock />;
    case "thirdC1.1":
      return <ThirdFloorFirstBlock />;

    case "firstC1.2":
      return <FirstFloorSecondBlock />;
    case "secondC1.2":
      return <SecondFloorSecondBlock />;
    case "thirdC1.2":
      return <ThirdFloorSecondBlock />;

    case "firstC1.3":
      return <FirstFloorThirdBlock />;
    case "secondC1.3":
      return <SecondFloorThirdBlock />;
    case "thirdC1.3":
      return <ThirdFloorThirdBlock />;

    case "first":
      return <FirstFloorAll />;
    case "second":
      return <SecondFloorAll />;
    case "third":
      return <ThirdFloorAll />;
    default:
      return <FirstFloorAll />;
  }
};

export default Show;
