import ShopByCategory from "../ShopByCategory/ShopByCategory";
import CustomerReview from "./CustomerReview/CustomerReview";
import Gallery from "./Gallery/Gallery";
import Hero from "./Hero";


const Home = () => {

    return (
        <div className="container mx-auto px-2">
            <Hero />
            <Gallery />
            <ShopByCategory />
            <CustomerReview />
        </div>
    );
};

export default Home;