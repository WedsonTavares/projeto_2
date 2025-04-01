const ErrorMessage = ({ message }) => {
  return (
    <div className="flex items-center bg-red-600 text-white text-sm font-medium px-4 py-3 rounded-lg shadow-md" role="alert">
      <svg
        className="w-5 h-5 mr-3"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2v6m0-6a9 9 0 110-18 9 9 0 010 18z"
        />
      </svg>
      <span>{message || "Esse perfil não existe no GitHub"}</span>
    </div>
  );
};

export default ErrorMessage;