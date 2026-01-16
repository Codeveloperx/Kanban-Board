import { Carousel } from "../../components/carousel/Carousel";
import { markHomeAsSeen } from "../../router/utils/onboarding";
import { NavLink } from "react-router-dom";
import { slides } from "../../utils/images";
import { ROUTES } from "../../router/routes";

const Home = () => {
  const handleNavigate = () => markHomeAsSeen();

  return (
    <div className="flex flex-col items-center text-center gap-5">
      <div className="w-72 h-72">
        <Carousel images={slides} interval={5000} />
      </div>

      <h2 className="text-2xl font-semibold">Organiza cualquier actividad</h2>

      <p className="text-muted-foreground max-w-md">
        Coloca todo en un solo lugar y empieza a avanzar en tu trabajo creando
        tu primer tablero.
      </p>

      <NavLink
        onClick={handleNavigate}
        to={ROUTES.BOARDS}
        className="flex items-center space-x-1 cursor-pointer bg-gray-700 text-white px-3 py-2 rounded shadow hover:bg-gray-900"
      >
        <span className="font-normal">Crear mi primer tablero</span>
      </NavLink>
    </div>
  );
};

export default Home;
