import { FaChevronRight } from "react-icons/fa";

import img from "../assets/react.svg";
import { CustomButton } from "../components";

const Home = () => {
  return (
    <section>
      <div className=" flex flex-col space-y-4 my-container">
        <h2 className="text-lg font-bold">Titre 1</h2>
        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          molestiae dolor eum perferendis eius voluptas aut placeat. In eaque
          tempore quis eveniet asperiores, nam, dolores nisi quidem essed
          perspiciatis est.
        </p>
        <img src={img} className="w-1/2 md:w-96 aspect-square mx-auto" />

        <CustomButton
          to="main-options"
          text="Dépose votre demande"
          icon={<FaChevronRight />}
        />
      </div>
    </section>
  );
};
export default Home;
