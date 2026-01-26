import { Button } from "@/shared/ui/button";
import { ROUTES } from "../router/routes";
import { useNavigation } from "@/shared/hooks";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const { goTo } = useNavigation();
  const error = useRouteError();

  const errorMessage = getErrorMessage(error);

  const handleNavigate = () => goTo(ROUTES.BOARDS);

  const handleReload = () => window.location.reload();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">Error</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Algo salió mal
        </h2>
        <p className="text-gray-500 mb-8">{errorMessage}</p>
        <div className="flex gap-3 justify-center">
          <Button.Primary label="Reintentar" onClick={handleReload} />

          <Button.Secondary label="Volver" onClick={handleNavigate} />
        </div>
      </div>
    </div>
  );
}

const getErrorMessage = (error: unknown): string => {
  const DEFAULT_ERROR = "Ha ocurrido un error inesperado";

  if (isRouteErrorResponse(error)) {
    return error.data?.message || error.statusText || DEFAULT_ERROR;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return DEFAULT_ERROR;
};
