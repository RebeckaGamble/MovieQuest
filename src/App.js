import CarouselSlider from "./components/carousel/Carousel";
import MovieCard from "./components/movies/MovieCard";
import Searchbar from "./components/search/Searchbar";

function App() {
  return (
    <div className="App">
      <CarouselSlider />
      <Searchbar />
      <MovieCard />
    </div>
  );
}

export default App;
