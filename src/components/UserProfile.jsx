const UserProfile = ({ usuario }) => {
    return (
      <div className="p-6 cust bg-customGray text-white rounded-lg shadow-lg max-w-md mx-auto">
        <div className="flex flex-col items-center">
          <img
            src={usuario.avatar_url}
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 shadow-md"
          />
          <h2 className="text-2xl font-bold text-center mt-4">{usuario.name || "Usuário sem nome"}</h2>
          <p className="text-sm text-gray-400 text-center mt-2">{usuario.bio || "Sem biografia disponível."}</p>
        </div>
        <div className="mt-6">
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <strong>Usuário:</strong> {usuario.login}
            </li>
            <li>
              <strong>Repositórios Públicos:</strong> {usuario.public_repos}
            </li>
            <li>
              <strong>Seguidores:</strong> {usuario.followers}
            </li>
            <li>
              <strong>Seguindo:</strong> {usuario.following}
            </li>
            {usuario.location && (
              <li>
                <strong>Localização:</strong> {usuario.location}
              </li>
            )}
            {usuario.blog && (
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href={usuario.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {usuario.blog}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  };
  
  export default UserProfile;