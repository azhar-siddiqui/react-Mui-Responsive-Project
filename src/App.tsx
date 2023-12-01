import React from "react";

import {
  Box,
  Stack,
  createTheme,
  ThemeProvider,
  PaletteMode,
} from "@mui/material";

import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";

function App() {
  const [mode, setMode] = React.useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode as PaletteMode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack
          direction="row"
          sx={{ spacing: { xs: 0, md: 2 } }}
          justifyContent="space-between"
        >
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
