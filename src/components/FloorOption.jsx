import React, { useState } from "react";
import { Button, Flex, useColorModeValue } from "@chakra-ui/react";

const FloorOption = ({ handleOptionChange }) => {
  const [floorCurrent, setFloorCurrent] = useState("first");
  const handleClick = (e) => {
    let name = e.target.name;
    if (name !== floorCurrent) {
      setFloorCurrent(name);
      handleOptionChange(name);
    }
  };
  const colorCurrent = useColorModeValue("#edf2f7", "#242a36");
  const color = useColorModeValue("#242a36", "#edf2f7");
  const colorText = useColorModeValue("#edf2f7", "#242a36");
  const colorTextCurrent = useColorModeValue("#242a36", "#edf2f7");
  const buttonSize = "40px";
  const floorData = [
    {
      id: 1,
      name: "first",
    },
    {
      id: 2,
      name: "second",
    },
    {
      id: 3,
      name: "third",
    },
  ];

  return (
    <Flex
      flexDirection="column"
      zIndex={1}
      pos="absolute"
      justify="space-around"
      top="44%"
      right="4%"
      bg={color}
      borderRadius="30px"
      p="3.3px"
      w="46.6666x"
      h="126.6666px">
      {floorData.map((item) => {
        return (
          <Button
            key={item.id}
            name={item.name}
            onClick={handleClick}
            bg={floorCurrent === item.name ? colorCurrent : color}
            w={buttonSize}
            h={buttonSize}
            _hover={{ bg: "#4da2ff" }}
            borderRadius="20px"
            color={floorCurrent === item.name ? colorTextCurrent : colorText}>
            {item.id}
          </Button>
        );
      })}
    </Flex>
  );
};

export default FloorOption;
