import SearchBar from "./SearchBar";
import group1 from "../assets/images/group1.png";

const UserProfile = ({ usuario, onSearch, error }) => {
  return (
    <div className="p-6 bg-black rounded-lg shadow-lg max-w-2xl mx-auto">
      <header className="mb-2 text-center">
        <img
          src={group1}
          alt="Descrição da imagem"
          className="w-50 h-15 mx-auto mb-4"
        />
      </header>
      <div className="mb-6">
        <SearchBar onSearch={onSearch} />
      </div>
      {error ? (
        <div className="bg-white text-red-500 p-4 rounded shadow-md text-center">
          Nenhum perfil foi encontrado com esse nome de usuário.
          Tente novamente!
        </div>
      ) : usuario ? (
        <div className="bg-[#d9d9d9] p-4 rounded-lg flex items-center">
          <img
            src={usuario.avatar_url}
            alt="Avatar"
            className="w-32 h-32 rounded-full border-2 border-blue-700 shadow-md ml-auto mr-4"
          />
          <div className="text-left mr-auto">
            <h2 className="text-2xl font-bold text-blue-700">
              {usuario.name || "Usuário sem nome"}
            </h2>
            <p className="text-sm text-gray-700 mt-2">
              {usuario.bio || "Sem biografia disponível."}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserProfile;