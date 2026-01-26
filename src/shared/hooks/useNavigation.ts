import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const goTo = (path: string, params?: Record<string, string | number>) => {
    let finalPath = path;

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        finalPath = finalPath.replace(`:${key}`, String(value));
      });
    }

    navigate(finalPath);
  };

  const goBack = () => {
    navigate(-1);
  };

  return {
    goTo,
    goBack,
  };
};
