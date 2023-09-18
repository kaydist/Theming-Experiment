import { ThemeProvider } from "../library/themeContext";
import { customLightTheme } from "./assets/theme/customLightTheme";
import LandingPage from "./pages/landing";

function App() {
  return (
    <>
      <ThemeProvider>
        <LandingPage />
      </ThemeProvider>
    </>
  );
}

export default App;
