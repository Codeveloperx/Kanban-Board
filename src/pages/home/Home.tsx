import { Carousel } from "../../components/carousel/Carousel";
import im1 from "../../assets/undraw_project_1.svg";
import im2 from "../../assets/undraw_project_2.svg";
import im3 from "../../assets/undraw_project_3.svg";
import im4 from "../../assets/undraw_project_4.svg";
import im5 from "../../assets/undraw_project_5.svg";
import { markHomeAsSeen } from "../../routes/guard";
import { NavLink } from "react-router-dom";

const images = [im1, im2, im3, im4, im5];

const Home = () => {
  return (
    <div className="flex flex-col items-center text-center gap-5">
      <div className="w-72 h-72">
        <Carousel images={images} interval={5000} />
      </div>

      <h2 className="text-2xl font-semibold">Organiza cualquier actividad</h2>

      <p className="text-muted-foreground max-w-md">
        Coloca todo en un solo lugar y empieza a avanzar en tu trabajo creando
        tu primer tablero.
      </p>

      <NavLink
        onClick={() => markHomeAsSeen()}
        to="/boards"
        className="flex items-center space-x-1 cursor-pointer bg-gray-700 text-white px-3 py-2 rounded shadow hover:bg-gray-900"
      >
        <span className="font-normal">Crear mi primer tablero</span>
      </NavLink>
      {/* <button

        onClick={() => }
        className="flex items-center space-x-1 cursor-pointer bg-gray-700 text-white px-3 py-2 rounded shadow hover:bg-gray-900"
      >
        <span className="font-normal">Crear mi primer tablero</span>
      </button> */}
      {/* <div
        className={`
            flex items-center justify-center border-2 border-dashed
            py-2 px-4 border-gray-600 transition-colors rounded-lg 
            hover:border-gray-800 cursor-pointer text-gray-600 hover:text-gray-800
            `}
      > */}
      {/* className="px-6 py-3 rounded-lg bg-primary font-medium" */}
      {/* <span className="font-medium">Crear mi primer tablero</span>
      </div> */}
    </div>
  );
};

export default Home;
