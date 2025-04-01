import { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserProfile from "../components/UserProfile";
import ErrorMessage from "../components/ErrorMessage";
import group1 from "../assets/images/group1.png"; 


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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b bg-customGray text-white p-6">
<header className="mb-8 text-center">
  <img
    src={group1}
    alt="Descrição da imagem"
    className="w-50 h-15 mx-auto "
  />
</header>
      <div className="w-full max-w-md " >
        <SearchBar onSearch={fetchUser} />
      </div>
      {error && (
  <div className="bg-customGray text-white p-4 rounded shadow-md mt-6 w-full max-w-2xl">
    <ErrorMessage message="Usuário não encontrado. Tente novamente!" />
  </div>
)}

{user && (
  <div className="mt-6 bg-customGray p-6 rounded-lg  w-full max-w-2xl">
    <UserProfile usuario={user} />
  </div>
)}
    </div>
  );
};

export default Home;