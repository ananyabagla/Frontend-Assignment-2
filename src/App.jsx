import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";

function App() {
  const [word, setWord] = useState("");
  const [data, setData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [font, setFont] = useState("serif");

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen transition-colors duration-300`}
    >
      <div
        className={`container mx-auto p-4 ${
          font === "serif"
            ? "font-serif"
            : font === "sans"
            ? "font-sans"
            : "font-mono"
        }`}
      >
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          font={font}
          setFont={setFont}
        />
        <Search setWord={setWord} setData={setData} darkMode={darkMode} />
        {data && <Result data={data} />}
      </div>
    </div>
  );
}

export default App;
