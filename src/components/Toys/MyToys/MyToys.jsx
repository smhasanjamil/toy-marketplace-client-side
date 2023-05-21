import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { Link } from "react-router-dom";


const MyToys = () => {
    const [cars, setCars] = useState([]);

    const { user } = useContext(AuthContext);
    // console.log(user);


    useEffect(() => {
        fetch(`http://localhost:5000/all-car?sellerEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCars(data);
            })
    }, [])
    console.log(cars);
    return (
        <div className="container mx-auto px-2">
            <div><h1>Mt Toys</h1></div>



            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            {/* <th></th> */}
                            <th>Picture</th>
                            <th>Toy Name</th>
                            {/* <th>Seller Name</th>
                            <th>Seller Email</th> */}
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Available</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((car) => (
                            <tr key={car._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="w-20 rounded">
                                            <img src={car.pictureUrl} alt="product image" />
                                        </div>
                                    </div>
                                </td>
                                <td>{car.toyName}</td>
                                {/* <td>{car.sellerName}</td>
                                <td>{car.sellerEmail}</td> */}
                                <td>{car.subCategory}</td>
                                <td>${car.price}</td>
                                <td>{car.rating}</td>
                                <td>{car.availableQuantity}</td>
                                <td>
                                    <textarea
                                        value={car.description}
                                        rows={3}
                                        cols={20}
                                        className="resize-none"
                                        readOnly
                                    />
                                </td>
                                <td><Link to={`/toy/${car._id}`}><button className="btn bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 text-white">View Details</button></Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default MyToys;