export const useAuth = () => {
    const token = window.localStorage.getItem("token");
    return !!token;
  };