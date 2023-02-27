import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Show from "./Show";
import ShowIOS from "./ShowIOS";
import {
  Box,
  Select,
  Button,
  Flex,
  Input,
  useColorModeValue,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

const Home = ({ isIOS }) => {
  const { width } = useWindowDimensions();

  const [selectedFloorOption, setSelectedFloorOption] = useState("first");
  const [selectedBlockOption, setSelectedBlockOption] = useState("");
  const [isKeyboardTyping, setIsKeyboardTyping] = useState(false);
  const [search, setSearch] = useState("");

  const colorBgSelect = useColorModeValue("#242a36cf", "#edf2f7d3");
  const colorSelect = useColorModeValue("#edf2f7", "#242a36");
  const colorFloorOptionCurrent = useColorModeValue("#edf2f7", "#242a36");
  const colorBgFloorOption = useColorModeValue("#242a36", "#edf2f7");
  const colorTextFloorOption = useColorModeValue("#edf2f7", "#242a36");
  const colorTextCurrentFloorOption = useColorModeValue("#242a36", "#edf2f7");
  const colorInput = useColorModeValue("#edf2f7", "#242a36");
  const colorBgInput = useColorModeValue("#242a36", "#edf2f7");
  const colorInputPlaceholder = useColorModeValue("#edf2f7", "#242a366a");
  const floorOptionData = [
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

  const handleFloorOptionChange = (option) => {
    setSearch("");
    setSelectedFloorOption(option);
  };

  const handleSearchInput = (e) => {
    const regex = /^[0-9cCpPlLkK.]+$/;
    if (regex.test(e.target.value) || e.target.value === "") {
      setSearch(e.target.value);
    }
  };

  const handleFloorOptionClick = (e) => {
    let name = e.target.name;
    if (name !== selectedFloorOption) {
      setSelectedFloorOption(name);
      handleFloorOptionChange(name);
    }
  };

  const handleBlockOptionChange = (e) => {
    setSelectedBlockOption(e.target.value);
  };

  useEffect(() => {
    const handleKeyboardTyping = () => {
      const conditions = ["C", "."];
      if (conditions.some((i) => search.includes(i))) {
        setIsKeyboardTyping(true);
      } else if (isKeyboardTyping) {
        setIsKeyboardTyping(false);
      }
    };

    const handleFloor = () => {
      try {
        if (search.charAt(0) === "1" && selectedFloorOption !== "first") {
          setSelectedFloorOption("first");
        } else if (
          search.charAt(0) === "2" &&
          selectedFloorOption !== "second"
        ) {
          setSelectedFloorOption("second");
        } else if (
          search.charAt(0) === "3" &&
          selectedFloorOption !== "third"
        ) {
          setSelectedFloorOption("third");
        }
      } catch (err) {
        console.log(err);
      }
    };

    const withoutKeyboardTyping = () => {
      handleFloor();
      let blockOptionValue =
        selectedBlockOption === "" ? "" : selectedBlockOption + ".";
      let activity = search
        ? blockOptionValue + search.toUpperCase()
        : search.toUpperCase();
      const groups = document.querySelectorAll(`[data-name*="${activity}"]`);

      if (groups.length > 0) {
        groups.forEach((group) => {
          group.classList.add("room-map-group-search-target");
        });
      }

      const groupsToRemove = document.querySelectorAll(
        `[data-name]:not([data-name*="${activity}"])`
      );

      if (groupsToRemove.length > 0) {
        groupsToRemove.forEach((group) => {
          group.classList.remove("room-map-group-search-target");
        });
      }
    };

    const withKeyboardTyping = (s) => {
      let searchSplitted = s.split(/,|\./);

      try {
        if (
          typeof searchSplitted[0] === "string" &&
          searchSplitted[0].length > 0 &&
          searchSplitted[0].includes("C") &&
          searchSplitted.length > 2
        ) {
          if (
            searchSplitted[1].charAt(0) === "1" &&
            selectedBlockOption !== "C1.1"
          ) {
            setSelectedBlockOption("C1.1");
          } else if (
            searchSplitted[1].charAt(0) === "2" &&
            selectedBlockOption !== "C1.2"
          ) {
            setSelectedBlockOption("C1.2");
          } else if (
            searchSplitted[1].charAt(0) === "3" &&
            selectedBlockOption !== "C1.3"
          ) {
            setSelectedBlockOption("C1.3");
          } else if (
            searchSplitted[2].charAt(0) === "1" &&
            selectedFloorOption !== "first"
          ) {
            setSelectedFloorOption("first");
          } else if (
            searchSplitted[2].charAt(0) === "2" &&
            selectedFloorOption !== "second"
          ) {
            setSelectedFloorOption("second");
          } else if (
            searchSplitted[2].charAt(0) === "3" &&
            selectedFloorOption !== "third"
          ) {
            setSelectedFloorOption("third");
          }
        } else if (
          typeof searchSplitted[0] === "string" &&
          searchSplitted[0].length > 0 &&
          !searchSplitted[0].includes("C") &&
          searchSplitted.length > 1
        ) {
          if (
            searchSplitted[0].charAt(0) === "1" &&
            selectedBlockOption !== "C1.1"
          ) {
            setSelectedBlockOption("C1.1");
          } else if (
            searchSplitted[0].charAt(0) === "2" &&
            selectedBlockOption !== "C1.2"
          ) {
            setSelectedBlockOption("C1.2");
          } else if (
            searchSplitted[0].charAt(0) === "3" &&
            selectedBlockOption !== "C1.3"
          ) {
            setSelectedBlockOption("C1.3");
          } else if (
            searchSplitted[1].charAt(0) === "1" &&
            selectedFloorOption !== "first"
          ) {
            setSelectedFloorOption("first");
          } else if (
            searchSplitted[1].charAt(0) === "2" &&
            selectedFloorOption !== "second"
          ) {
            setSelectedFloorOption("second");
          } else if (
            searchSplitted[1].charAt(0) === "3" &&
            selectedFloorOption !== "third"
          ) {
            setSelectedFloorOption("third");
          }
        }
      } catch (err) {
        console.log(err);
      }

      const groups = document.querySelectorAll(
        `[data-name*="${search.toUpperCase()}"]`
      );

      if (groups.length > 0) {
        groups.forEach((group) => {
          group.classList.add("room-map-group-search-target");
        });
      }

      const groupsToRemove = document.querySelectorAll(
        `[data-name]:not([data-name*="${search.toUpperCase()}"])`
      );

      if (groupsToRemove.length > 0) {
        groupsToRemove.forEach((group) => {
          group.classList.remove("room-map-group-search-target");
        });
      }
    };

    const handleSearch = () => {
      handleKeyboardTyping();

      if (isKeyboardTyping) withKeyboardTyping(search);
      else withoutKeyboardTyping();
    };

    handleSearch();
  }, [search, selectedBlockOption, selectedFloorOption]);

  return (
    <>
      <Box>
        <Flex
          flexDirection="column"
          zIndex={1}
          pos="absolute"
          justify="space-between"
          align="center"
          top="46%"
          right="20px"
          bg={colorBgFloorOption}
          borderRadius="9px"
          p="2px"
          w="36px"
          h="100px">
          {floorOptionData.map((item) => {
            return (
              <Button
                key={item.id}
                name={item.name}
                onClick={handleFloorOptionClick}
                size="sm"
                bg={
                  selectedFloorOption === item.name
                    ? colorFloorOptionCurrent
                    : colorBgFloorOption
                }
                _hover={{ bg: "#4da2ff" }}
                borderRadius="9px"
                color={
                  selectedFloorOption === item.name
                    ? colorTextCurrentFloorOption
                    : colorTextFloorOption
                }>
                {item.id}
              </Button>
            );
          })}
        </Flex>
        <Flex
          mt={"20px"}
          pos="absolute"
          zIndex={20}
          width={width}
          justifyContent="center">
          <Select
            pointerEvents={!isKeyboardTyping ? "auto" : "none"}
            bg={!isKeyboardTyping ? colorBgSelect : "gray"}
            color={colorSelect}
            value={selectedBlockOption}
            onChange={handleBlockOptionChange}
            borderEndRadius={0}
            borderStartRadius={9}
            width="auto">
            <option style={{ color: colorBgSelect }} value="">
              all
            </option>
            <option style={{ color: colorBgSelect }} value="C1.1">
              C1.1
            </option>
            <option style={{ color: colorBgSelect }} value="C1.2">
              C1.2
            </option>
            <option style={{ color: colorBgSelect }} value="C1.3">
              C1.3
            </option>
          </Select>
          <InputGroup w={"180px"}>
            <Input
              borderEndRadius={9}
              borderStartRadius={0}
              bg={colorBgInput}
              color={colorInput}
              type="text"
              width="auto"
              placeholder="126 or C1.2.223"
              _placeholder={{ color: colorInputPlaceholder }}
              value={search}
              onChange={(e) => {
                handleSearchInput(e);
              }}
            />
            <InputRightElement children={<SearchIcon color={colorInput} />} />
          </InputGroup>
        </Flex>
        <Sidebar />
        {isIOS ? (
          <ShowIOS
            selectedFloorBlockOption={selectedFloorOption + selectedBlockOption}
          />
        ) : (
          <Show
            selectedFloorBlockOption={selectedFloorOption + selectedBlockOption}
          />
        )}
      </Box>
    </>
  );
};

export default Home;
