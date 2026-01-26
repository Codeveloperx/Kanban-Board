import { Button } from "@/shared/ui/button";
import { ROUTES } from "../router/routes";
import { useNavigation } from "@/shared/hooks";

export default function NotFoundPage() {
  const { goTo } = useNavigation();

  const handleNavigate = () => goTo(ROUTES.BOARDS);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Página no encontrada
        </h2>
        <p className="text-gray-500 mb-8">La página que buscas no existe</p>
        <Button.Primary label="Volver al inicio" onClick={handleNavigate} />
      </div>
    </div>
  );
}
