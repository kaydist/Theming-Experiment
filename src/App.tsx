import { ThemeProvider } from "../library/themeContext";
import appThemeHook from "./hooks/appTheme";
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
