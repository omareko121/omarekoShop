// @ts-nocheck

import Header2 from "./companse/header/header2"
import Header1 from "./companse/header/header1"
import { Box,  CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./them";
import Hero from "./companse/hero/Hero";
import Icons from "./companse/hero/iconSection"
import Main from "./companse/main/main"
import Footer from "./companse/footer/footer";
import ScrollToTop from "./companse/scroll/ScrollToTop";
function App() {
  const [theme, colorMode] = useMode();


  return (
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>

<ThemeProvider 
// @ts-ignore
theme={theme}>
<CssBaseline />

    <Header1/>
    <Header2/>
  <Box bgcolor={theme.palette.bg.main} sx={{mt:4}}>
      <Hero/>
      <Icons/>
      <Main/>
  </Box>

  <Footer/>

  <ScrollToTop/>
    </ThemeProvider>
  
    </ColorModeContext.Provider>
  
  )
}

export default App
