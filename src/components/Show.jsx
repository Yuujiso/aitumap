import React from "react";
import FirstFloor from "../map/FirstFloor.jsx";
import SecondFloor from "../map/SecondFloor.jsx";
import ThirdFloor from "../map/ThirdFloor";

const Show = ({ selectedOption }) => {
  switch (selectedOption) {
    case "first":
      return <FirstFloor />;
    case "second":
      return <SecondFloor />;
    case "third":
      return <ThirdFloor />;
  }
};

export default Show;
