import { Link } from "react-router-dom";

const ShopCategoryFilter = ({ car }) => {
    console.log(car);
    return (
        <div>
           


            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={car.pictureUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{car.toyName}</h2>
                    <p>Price : ${car.price}</p>
                    <p>Rating : ${car.rating}</p>
                    <div className="card-actions">
                        <Link to={`/toy/${car._id}`}><button className="btn bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 text-white">View Details</button></Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShopCategoryFilter;