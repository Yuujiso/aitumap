import React from "react";
import FirstFloorIOS from "../map/FirstFloorIOS.jsx";
import SecondFloorIOS from "../map/SecondFloorIOS.jsx";
import ThirdFloorIOS from "../map/ThirdFloorIOS.jsx";

const Show = ({ selectedOption }) => {
  switch (selectedOption) {
    case "first":
      return <FirstFloorIOS />;
    case "second":
      return <SecondFloorIOS />;
    case "third":
      return <ThirdFloorIOS />;
  }
};

export default Show;
