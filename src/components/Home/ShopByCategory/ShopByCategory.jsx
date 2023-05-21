import { useEffect, useState } from "react";
import ShopCategoryFilter from "./ShopCategoryFilter";


const ShopByCategory = () => {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [activeButton, setActiveButton] = useState("Truck");

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    useEffect(() => {
        fetch('https://motor-mart-server.vercel.app/all-cars')
            .then(response => response.json())
            .then(data => {
                setCars(data);
                // setFilteredCars(data);
                const filtered = data.filter(car => car.subCategory === activeButton.toLowerCase());
                setFilteredCars(filtered);
            });
    }, []);


    const handleCategoryClick = (category) => {
        if (category === null) {
            setFilteredCars(cars);
        } else {
            const filtered = cars.filter(car => car.subCategory === category);
            setFilteredCars(filtered);
        }
    };


    return (
        <div>

            <div className="text-center my-8">
                <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                    <button className={`btn ${activeButton === 'Truck' ? 'bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 text-white' : ''}`}
                        onClick={() => {
                            handleCategoryClick('truck');
                            handleButtonClick('Truck');
                        }}
                    > Truck</button>

                    <button className={`btn ${activeButton === 'Regular Car' ? 'bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 text-white' : ''}`}
                        onClick={() => {
                            handleCategoryClick('regularCar');
                            handleButtonClick('Regular Car');
                        }}
                    > Regular Car </button>

                    <button className={`btn ${activeButton === 'Police Car' ? 'bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 text-white' : ''}`}
                        onClick={() => {
                            handleCategoryClick('policeCar');
                            handleButtonClick('Police Car');
                        }}
                    > Police Car </button>
                </div>
            </div>




            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCars.map(car => <ShopCategoryFilter car={car} key={car._id}></ShopCategoryFilter>)}
            </div>




        </div>
    );
};

export default ShopByCategory;