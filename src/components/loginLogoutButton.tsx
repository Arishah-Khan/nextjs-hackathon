import { useUser } from "@auth0/nextjs-auth0/client";
import { FaSpinner } from "react-icons/fa";

const LoginLogoutButton = () => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div className="flex items-center justify-center">
      <FaSpinner className="animate-spin text-2xl" />
    </div>;
  }

  if (user) {
    return (
      <button onClick={() => window.location.href = '/api/auth/logout'}>
        Logout
      </button>
    );
  }

  return (
    <button onClick={() => window.location.href = '/api/auth/login'}>
      Login
    </button>
  );
};

export default LoginLogoutButton;
