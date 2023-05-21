import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Gallery from "./Gallery/Gallery";
import Hero from "./Hero";


const Home = () => {

    return (
        <div className="container mx-auto px-2">
            <Hero />
            <Gallery />
            <ShopByCategory />
        </div>
    );
};

export default Home;