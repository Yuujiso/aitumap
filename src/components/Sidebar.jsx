import React, { useState } from "react";
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
  Select,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  SunIcon,
  MoonIcon
} from "@chakra-ui/icons";

const Sidebar = ({ handleOptionChange }) => {

  const [selectedValue, setSelectedValue] = useState('first');
  const handleChange = (e) => {
    handleOptionChange(e.target.value);
    setSelectedValue(e.target.value);
  };
  const customSidebarWidth = 240;
  var customSidebarMaxWidth = 300;
  var closeButtonWidth = 50;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button 
        id="sidebar-open-btn" 
        onClick={onOpen} 
        left="0px" 
        top="10px" 
        zIndex={1}
        borderStartRadius="0"
      >
        <ArrowRightIcon />
      </Button>
      <Drawer
        placement={"left"}
        onClose={onClose}
        isOpen={isOpen}
        userSelect={"none"}
        blockScrollOnMount={false}
      >
        <DrawerOverlay />
        <DrawerContent w={customSidebarWidth} maxW={customSidebarMaxWidth}>
          <Button
            onClick={onClose}
            w={closeButtonWidth}
            right="-50px"
            top="10px"
            borderStartRadius="0"
            position="absolute"
          >
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
                <Select 
                  value={selectedValue}
                  onChange={handleChange}
                  bg='teal.500'
                >
                  <option value='first'>first floor</option>
                  <option value='second'>second floor</option>
                  <option value='third'>third floor</option>
                </Select>
                </ListItem>
                <ListItem>
                    <Button 
                      onClick={() => toggleColorMode()} 
                      boxShadow={"lg"}
                      w="100%" 
                    >
                      <Text size="sm">change theme</Text><Icon as={colorMode === "light" ? SunIcon : MoonIcon} ml="0.5rem"/>
                    </Button>
                </ListItem>
                <ListItem>
                  <Link href="https://t.me/yuujisoo/74">
                    <Button 
                      boxShadow={"lg"}
                      w="100%" 
                    >
                      <Text size="sm">about</Text>
                    </Button>
                    </Link>
                </ListItem>
              </List>
          </DrawerBody>
          <DrawerFooter>
            <List w="100%" display="flex" flexDirection="column" >
              <ListItem justify="space-between">
                <Link href="https://t.me/yuujiso">
                  @yuujiso
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://t.me/mezzzzzanine">@mezzzzzanine</Link>
              </ListItem>
              <ListItem>
                <Link href="https://t.me/adiletaskar">@adiletaskar</Link>
              </ListItem>
              <ListItem>
                SE-2107
              </ListItem>
            </List>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Sidebar;
