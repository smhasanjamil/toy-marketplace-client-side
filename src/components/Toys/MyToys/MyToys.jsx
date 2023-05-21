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
    // console.log(cars);


    

    const handleDelete = (id) => {
        // console.log(id);
        const proceed = confirm("Are you sure you want to delete?")
        if (proceed) {
            fetch(`http://localhost:5000/all-cars/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted');
                        const remainingCar = cars.filter(car => car._id !== id);
                        setCars(remainingCar);
                    }
                })
        }
    }

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
                                <td>
                                    <div className="flex flex-row gap-2 items-center justify-center">
                                        <div>
                                            <Link to={`/update/${car._id}`}><button><img src="https://i.ibb.co/zrkvJj6/edit-button.png" alt="edit button" className="h-10 w-10" /></button></Link>
                                        </div>
                                        <div>
                                            <button onClick={() => handleDelete(car._id)}><img src="https://i.ibb.co/6F3Ddr6/remove.png" alt="delete button" className="h-10 w-10" /></button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default MyToys;