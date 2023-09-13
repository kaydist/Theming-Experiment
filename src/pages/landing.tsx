import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import useLibraryThemeHook from "../../library/hooks/useLibraryThemeHook";
import SharedButton from "../../library/button/SharedButton";
import appThemeHook, { AVAILABLE_CUSTOM_THEMES } from "../hooks/appTheme";

function LandingPage() {
  const [count, setCount] = useState(0);

  const { currentTheme } = useLibraryThemeHook();
  const { ToggleCustomTheme, currentThemeModeName } = appThemeHook();

  return (
    <div style={{ backgroundColor: currentTheme.page.background }}>
      <SharedButton label="Test Button" />

      <SharedButton
        onClick={() => {
          currentThemeModeName === AVAILABLE_CUSTOM_THEMES.customLightTheme
            ? ToggleCustomTheme(AVAILABLE_CUSTOM_THEMES.customDarkTheme)
            : ToggleCustomTheme(AVAILABLE_CUSTOM_THEMES.customLightTheme);
        }}
        label="Click to change theme"
      />

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <SharedButton
          onClick={() => setCount((count) => count + 1)}
          label={` count is ${count}`}
          style={{ backgroundColor: "black", color: "white" }}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default LandingPage;
