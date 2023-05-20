import { useLoaderData } from "react-router-dom";
import './ViewToyDetails.css';


const ViewToyDetails = () => {
    const car = useLoaderData();
    // console.log(car);
    const { availableQuantity, description, pictureUrl, price, rating, sellerEmail, sellerName, toyName } = car;
    return (
        <div className="container mx-auto px-2">
<div className="text-center"><h1 className="font-bold text-5xl my-8 border-b-4 inline-block border-red-600 text-red-600">Details</h1></div>

            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6 p-4">
                    <img src={pictureUrl} alt="" className="w-full h-auto object-cover rounded" />
                </div>
                <div className="col-span-12 md:col-span-6 p-4">

                    <h1 className="md:my-2 font-bold text-5xl">{toyName}</h1>
                    <h3 className="text-lg"><span className="font-bold">Seller : </span>{sellerName}</h3>
                    <h3 className="text-lg"><span className="font-bold">Email : </span>{sellerEmail}</h3>
                    <p>{rating}</p>
                    <h1 className="font-bold text-4xl text-red-600 my-4">${price}</h1>
                    <h1 className="text-lg"><span className="font-bold">Available :</span> {availableQuantity}</h1>
                    <p className="text-justify">{description}</p>


                </div>
            </div>




        </div >
    );
};

export default ViewToyDetails;