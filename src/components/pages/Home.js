import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection";

function Home({ pokemons }) {

  return (
    <>
      <HeroSection />
      <Cards pokemons={pokemons} />
      <Footer />
    </>
  );
}

export default Home;
