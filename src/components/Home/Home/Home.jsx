import Aos from "aos";
import 'aos/dist/aos.css';
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import CustomerReview from "./CustomerReview/CustomerReview";
import Gallery from "./Gallery/Gallery";
import Hero from "./Hero";
import OurService from "./OurService";
import { useEffect } from "react";



const Home = () => {

    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className="container mx-auto px-2">
            <Hero />
            <div data-aos="fade-right" >
                <Gallery />
            </div>
            <div data-aos="fade-left" >
                <ShopByCategory />
            </div>
            <OurService />
            <CustomerReview />
        </div>
    );
};

export default Home;