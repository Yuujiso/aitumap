import {
  ChakraProvider,
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";
import Home from "./components/Home";
import { isIOS } from "mobile-device-detect";

function App() {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Home isIOS={isIOS} />
        </ColorModeProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
