import ShopByCategory from "../ShopByCategory/ShopByCategory";
import CustomerReview from "./CustomerReview/CustomerReview";
import Gallery from "./Gallery/Gallery";
import Hero from "./Hero";
import OurService from "./OurService";


const Home = () => {

    return (
        <div className="container mx-auto px-2">
            <Hero />
            <Gallery />
            <ShopByCategory />
            <OurService />
            <CustomerReview />
        </div>
    );
};

export default Home;