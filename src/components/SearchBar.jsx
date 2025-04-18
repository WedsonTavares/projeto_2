import { useState } from "react";

const SearchBar = ({ onSearch, error }) => {

  const [username, setUsername] = useState("")

  const handleSearch = () => {
    if (username.trim()) {
      onSearch(username);
      setUsername("");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {error ? (
        <div className="bg-red-600 text-white p-4 rounded shadow-md text-center">
          Usuário não encontrado. Tente novamente!
        </div>
      ) : (
        <>
          <input
            type="text"
            placeholder="Digite um usuário do GitHub"
            className="w-full p-2 pr-10 rounded bg-white text-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={handleSearch}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white p-2 rounded"
          >
            🔍︎
          </button>
        </>
      )}
    </div>
  );
};

export default SearchBar;