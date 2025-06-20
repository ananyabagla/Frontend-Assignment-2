function Header({ darkMode, setDarkMode, font, setFont }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">📖</h1>
      <div className="flex gap-4 items-center">
        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          className={`border px-2 py-1 rounded ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <option value="serif">Serif</option>
          <option value="sans">Sans</option>
          <option value="mono">Mono</option>
        </select>
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="hidden"
          />
          <span className="w-10 h-5 flex items-center bg-gray-300 rounded-full p-1">
            <span
              className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
                darkMode ? "translate-x-5" : ""
              } transition-transform duration-300`}
            />
          </span>
        </label>
      </div>
    </div>
  );
}

export default Header;
