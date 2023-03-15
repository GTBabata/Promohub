import "./Home.css";
import DisplayCard from "../../components/DisplayCard";
import Carousel from "../../components/Carousel";

const Home = () => {
  return (
    <div className="Home">
      {/* Components */}
      <Carousel />
      <DisplayCard />
    </div>
  );
};

export default Home;
