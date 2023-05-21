import { useLoaderData, useNavigate } from "react-router-dom";


const UpdateToy = () => {
    const cars = useLoaderData();
    // console.log(cars);
    const navigate = useNavigate();


    const handleUpdate = (event) => {
        event.preventDefault();


        const form = event.target;
        const price = form.price.value;
        const quantity = form.availableQuantity.value;
        const description = form.description.value;

        const updatedCar = {
            price: price,
            availableQuantity: quantity,
            description: description
        };
        console.log(updatedCar);


        fetch(`https://motor-mart-server.vercel.app/all-cars/${cars._id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert("Updated");
                }
                navigate('/my-toys')
            })



    }
    return (
        <div className="container mx-auto px-2">
            <h1>Update Toys</h1>



            <div className="w-full">

                <div className="card">
                    <div className="md:card-body">
                        <form onSubmit={handleUpdate}>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Price" className="input input-bordered" defaultValue={cars?.price} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="text" name="availableQuantity" placeholder="Available Quantity" className="input input-bordered" defaultValue={cars?.availableQuantity} required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy description</span>
                                </label>
                                <textarea name="description" placeholder="Toy description" className="textarea textarea-bordered textarea-lg w-full " defaultValue={cars?.description} required></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 text-white">Update</button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>





        </div>
    );
};

export default UpdateToy;