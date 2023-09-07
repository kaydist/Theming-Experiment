import { ThemeProvider } from "../library/themeContext";
import LandingPage from "./pages/landing";

function App() {
  return (
    <>
      <ThemeProvider
        color={{
          button: {
            _light: {
              background: "green",
              text: "black",
            },
          },

          extend: {
            page: {
              _light: {
                background: "white",
                text: "black",
              },
              _dark: {
                background: "black",
                text: "white",
              },
            },
          },
        }}
      >
        <LandingPage />
      </ThemeProvider>
    </>
  );
}

export default App;
