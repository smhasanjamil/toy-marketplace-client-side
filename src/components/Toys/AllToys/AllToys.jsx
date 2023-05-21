import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllToys = () => {

    const [cars, setCars] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch('https://motor-mart-server.vercel.app/all-cars')
            .then(res => res.json())
            .then(data => {
                setCars(data);
            })
    }, [])
    console.log(cars);


    // For search
    const handleSearch = () => {

        fetch(`https://motor-mart-server.vercel.app/car-search/${searchText}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCars(data);
            })
    }

    return (
        <div className="container mx-auto px-2">
            <div className="text-center">
                <h1 className="font-bold text-5xl my-8 border-b-4 inline-block border-red-600 text-red-600">All Toys</h1>
            </div>

            <div className="my-4 flex justify-center gap-2">
                <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" />
                <button onClick={handleSearch} className="btn bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 text-white">Search</button>
            </div>



            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.slice(0, 20).map((car, index) => (
                            <tr key={car._id}>
                                <th>{index + 1}</th>
                                <td>{car.sellerName}</td>
                                <td>{car.toyName}</td>
                                <td>{car.subCategory}</td>
                                <td>${car.price}</td>
                                <td>{car.availableQuantity}</td>
                                <td><Link to={`/toy/${car._id}`}><button className="btn bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 text-white">View Details</button></Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>





        </div>
    );
};

export default AllToys;