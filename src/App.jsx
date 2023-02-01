import {
  ChakraProvider,
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";
import Home from "./components/Home";

function App() {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
            <Home/>
        </ColorModeProvider>
      </ThemeProvider>
    </ChakraProvider>
   
  );
}

export default App;