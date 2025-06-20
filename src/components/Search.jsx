import { useState } from "react";

function Search({ setWord, setData, darkMode }) {
  const [input, setInput] = useState("");

  const handleSearch = async () => {
    if (!input) return;
    setWord(input);
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
    );
    const json = await res.json();
    setData(json[0]);
  };

  return (
    <div className="flex mb-6">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={`flex-grow border p-2 rounded-l ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
        placeholder="Search for a word..."
      />
      <button
        onClick={handleSearch}
        className="bg-gray-300 text-black px-4 rounded-r text-2xl"
      >
        🔍
      </button>
    </div>
  );
}

export default Search;
