import React, { useState } from "react";
import { Box, Button, Flex, useColorModeValue } from "@chakra-ui/react";

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
  const buttonSize = "30px";
  const floorData = [
    {
      id: 3,
      name: "third",
    },
    {
      id: 2,
      name: "second",
    },
    {
      id: 1,
      name: "first",
    },
  ];

  return (
    <Flex
      flexDirection="column"
      zIndex={1}
      pos="absolute"
      justify="space-between"
      align="center"
      top="62px"
      right="0px"
      bg={color}
      borderStartRadius="9px"
      p="2px"
      w="36px"
      h="100px">
      {floorData.map((item) => {
        return (
          <Button
            key={item.id}
            name={item.name}
            onClick={handleClick}
            size="sm"
            bg={floorCurrent === item.name ? colorCurrent : color}
            _hover={{ bg: "#4da2ff" }}
            borderStartRadius="9px"
            color={floorCurrent === item.name ? colorTextCurrent : colorText}>
            {item.id}
          </Button>
        );
      })}
    </Flex>
  );
};

export default FloorOption;
