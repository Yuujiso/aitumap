import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Show from "./Show";
import ShowIOS from "./ShowIOS";
import FloorOption from "./FloorOption";
import { Box } from "@chakra-ui/react";

const Home = ({ isIOS }) => {
  const [selectedOption, setSelectedOption] = useState("first");
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Box>
        <FloorOption handleOptionChange={handleOptionChange} />
        <Sidebar />
        {isIOS ? (
          <ShowIOS selectedOption={selectedOption} />
        ) : (
          <Show selectedOption={selectedOption} />
        )}
      </Box>
    </>
  );
};

export default Home;
