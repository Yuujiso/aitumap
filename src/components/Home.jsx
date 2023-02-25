import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Show from "./Show";
import ShowIOS from "./ShowIOS";
import FloorOption from "./FloorOption";
import { Box } from "@chakra-ui/react";
import { Center, Input, useColorModeValue } from "@chakra-ui/react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { isMobile } from "mobile-device-detect";

const Home = ({ isIOS }) => {
  const { width } = useWindowDimensions();

  const [selectedOption, setSelectedOption] = useState("first");
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const [search, setSearch] = useState("");
  const [searchSplitted, setSearchSplitted] = useState([]);

  const handleSearchSplitted = (s) => {
    let splitted = s.split(/,|\./);
    setSearchSplitted(splitted);
  };

  useEffect(() => {
    const handleFloor = () => {
      if (
        typeof searchSplitted[1] === "string" &&
        searchSplitted[1].length > 0
      ) {
        if (searchSplitted[1].charAt(0) === "1" && selectedOption !== "first") {
          setSelectedOption("first");
        } else if (
          searchSplitted[1].charAt(0) === "2" &&
          selectedOption !== "second"
        ) {
          setSelectedOption("second");
        } else if (
          searchSplitted[1].charAt(0) === "3" &&
          selectedOption !== "third"
        ) {
          setSelectedOption("third");
        }
      }
    };

    const handleSearch = () => {
      handleFloor();
      const groups = document.querySelectorAll(
        `[data-name="${search.toUpperCase()}"]`
      );

      if (groups.length > 0) {
        groups.forEach((group) => {
          group.classList.add("room-map-group-search-target");
        });
      }

      const groupsToRemove = document.querySelectorAll(
        `[data-name]:not([data-name="${search.toUpperCase()}"])`
      );

      if (groupsToRemove.length > 0) {
        groupsToRemove.forEach((group) => {
          group.classList.remove("room-map-group-search-target");
        });
      }
    };

    handleSearch();
  }, [search, searchSplitted, selectedOption]);

  let inputWidth = isMobile ? width : 400;

  return (
    <>
      <Box>
        <FloorOption handleOptionChange={handleOptionChange} />
        <Center pos="absolute" w={width} zIndex={101}>
          <Input
            p={5}
            mt={2.5}
            w={inputWidth}
            bg={useColorModeValue("#242a36", "#edf2f7")}
            color={useColorModeValue("#edf2f7", "#242a36")}
            type="text"
            placeholder="🔎 e.g: 3.126"
            _placeholder={{ color: useColorModeValue("#edf2f7", "#242a36") }}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              handleSearchSplitted(e.target.value);
            }}
          />
        </Center>
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
