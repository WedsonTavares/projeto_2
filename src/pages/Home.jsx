import { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserProfile from "../components/UserProfile";
import ErrorMessage from "../components/ErrorMessage";


const Home = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const fetchUser = async (username) => {
    setError(false);
    setUser(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        setError(true);
        return;
      }
      const data = await response.json();
      setUser(data);
    } catch {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold mb-2 text-blue-400">Perfil GitHub</h1>
        <p className="text-lg text-gray-300">Pesquise por um usuário do GitHub e veja os detalhes do perfil.</p>
      </header>
      <div className="w-full max-w-md">
        <SearchBar onSearch={fetchUser} />
      </div>
      <div className="mt-6 w-full max-w-2xl">
        {error && (
          <div className="bg-red-500 text-white p-4 rounded shadow-md">
            <ErrorMessage message="Usuário não encontrado. Tente novamente!" />
          </div>
        )}
        {user && (
          <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
            <UserProfile usuario={user} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;