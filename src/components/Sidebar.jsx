import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Box,
  Text,
  Link,
  DrawerFooter,
  List,
  ListItem,
  Icon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  SunIcon,
  MoonIcon,
} from "@chakra-ui/icons";

const Sidebar = () => {
  const customSidebarWidth = 240;
  var customSidebarMaxWidth = 300;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box pos="absolute">
      <Button
        size="xs"
        id="sidebar-open-btn"
        onClick={onOpen}
        left="0px"
        top="62px"
        h="100px"
        bg={useColorModeValue("#edf2f7", "#242a36")}
        _hover={{ bg: "#ffffff5e" }}
        zIndex={1}
        borderStartRadius="0">
        <ArrowRightIcon />
      </Button>
      <Drawer
        placement={"left"}
        onClose={onClose}
        isOpen={isOpen}
        userSelect={"none"}
        blockScrollOnMount={false}
        zIndex={2}>
        <DrawerOverlay />
        <DrawerContent w={customSidebarWidth} maxW={customSidebarMaxWidth}>
          <Button
            onClick={onClose}
            size="xs"
            right="-28px"
            top="62px"
            h="100px"
            borderStartRadius="0"
            bg={useColorModeValue("#edf2f7", "#242a36")}
            _hover={{ bg: "#ffffff5e" }}
            position="absolute">
            <ArrowLeftIcon />
          </Button>
          <DrawerHeader borderBottomWidth="1px">
            <Box w="100%" h="100%" m="0px">
              aitu map demo
            </Box>
          </DrawerHeader>
          <DrawerBody w="100%">
            <List spacing={3}>
              <ListItem>
                <Button
                  onClick={() => toggleColorMode()}
                  boxShadow={"lg"}
                  w="100%">
                  <Text size="sm">change theme</Text>
                  <Icon
                    as={colorMode === "light" ? SunIcon : MoonIcon}
                    ml="0.5rem"
                  />
                </Button>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/Yuujiso/aitumap">
                  <Button boxShadow={"lg"} w="100%">
                    <Text size="sm">github</Text>
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://t.me/yuujisoo/74">
                  <Button boxShadow={"lg"} w="100%">
                    <Text size="sm">about</Text>
                  </Button>
                </Link>
              </ListItem>
            </List>
          </DrawerBody>
          <DrawerFooter>
            <List w="100%" display="flex" flexDirection="column">
              <ListItem justify="space-between">
                <Link href="https://t.me/yuujiso">@yuujiso</Link>
              </ListItem>
              <ListItem>
                <Link href="https://t.me/mezzzzzanine">@mezzzzzanine</Link>
              </ListItem>
              <ListItem>
                <Link href="https://t.me/adiletaskar">@adiletaskar</Link>
              </ListItem>
              <ListItem>SE-2107</ListItem>
            </List>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
