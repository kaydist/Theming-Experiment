import { useContext, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import { ThemeContext } from "../../library/themeContext";
import SharedButton from "../../library/button/SharedButton";

function LandingPage() {
  const [count, setCount] = useState(0);

  const { toggleThemeMode, currentTheme, currentMode } =
    useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: currentTheme.page[currentMode].background }}>
      <SharedButton label="Test Button" />

      <SharedButton
        onClick={() => {
          toggleThemeMode();
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
