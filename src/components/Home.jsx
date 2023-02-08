import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Show from "./Show";
import FloorOption from "./FloorOption";
import { Box } from "@chakra-ui/react";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("first");
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Box>
        <FloorOption handleOptionChange={handleOptionChange} />
        <Sidebar />
        <Show selectedOption={selectedOption} />
      </Box>
    </>
  );
};

export default Home;
