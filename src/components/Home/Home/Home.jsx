import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Hero from "./Hero";


const Home = () => {

    return (
        <div className="container mx-auto px-2">
            <Hero />
            <ShopByCategory />
        </div>
    );
};

export default Home;