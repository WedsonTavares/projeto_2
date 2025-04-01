// src/components/SearchBar.jsx
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    if (username.trim()) {
      onSearch(username);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Digite um usuário do GitHub"
        className="p-2 border rounded w-full bg-black"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch} className="p-2 bg-blue-500 rounded">
        🔍
      </button>
    </div>
  );
};

export default SearchBar;

