import { useState } from "react";
import UserProfile from "../components/UserProfile";
import camada1 from "../assets/images/camada1.png"; // Imagem no topo à esquerda
import blueTop from "../assets/images/ellipse1.png"; // Luz azul no topo à direita
import blueBottom from "../assets/images/ellipse2.png"; // Luz azul no inferior à esquerda

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
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b bg-customGray text-white p-6">

      <img
        src={camada1}
        alt="Efeito no topo à esquerda"
        className="absolute top-5 left-12 w-20 contrast-50 opacity-50"
        style={{ width: "150px", height: "150px" }}
      />
      <img
        src={blueTop}
        alt="Luz azul no topo à direita"
        className="absolute top-5 right-12 w-80 h-80 brightness-110 contrast-150"
      />
      <img
        src={blueBottom}
        alt="Luz azul no inferior à esquerda"
        className="absolute -bottom-30 -left-12 w-15 brightness-110 contrast-150"
      />

      <div className="relative z-10 mt-8 bg-black text-black p-8 rounded-lg shadow-lg w-[70%] max-w-[120%] h-[120%]">
        <UserProfile usuario={user} onSearch={fetchUser} error={error} />
      </div>
    </div>
  );
};

export default Home;