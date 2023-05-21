import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";


const AddAToy = () => {
    const { user } = useContext(AuthContext);
    // const { displayName, email } = user;


    const handleAddToy = (event) => {
        event.preventDefault();
        // console.log("clicked");
        const form = event.target;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const cars = {
            pictureUrl: photoURL,
            toyName: toyName,
            sellerName: sellerName,
            sellerEmail: sellerEmail,
            subCategory: subCategory,
            price: price,
            rating: rating,
            availableQuantity: quantity,
            description: description
        };
        console.log(cars);


        fetch('http://localhost:5000/all-cars',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cars)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    form.reset();
                }
            })



    }


    return (
        <div className="container mx-auto px-2">
            <div className="text-center">
                <h1 className="font-bold text-5xl my-8 border-b-4 inline-block border-red-600 text-red-600">Add Toy</h1>
            </div>







            <div className="w-full">

                <div className="card">
                    <div className="md:card-body">
                        <form onSubmit={handleAddToy}>
                            <div className="grid grid-cols-12 md:gap-4">
                                <div className="col-span-12 md:col-span-6">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Toy Name</span>
                                        </label>
                                        <input type="text" placeholder="Toy Name" name="toyName" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input type="text" name="sellerName" placeholder="Seller Name" className="input input-bordered" defaultValue={user?.displayName} required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input type="email" name="sellerEmail" placeholder="Seller email" className="input input-bordered" defaultValue={user?.email} required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Sub Category</span>
                                        </label>
                                        <select className="select select-bordered w-full" defaultValue="" name="subCategory" required>
                                            <option value="" disabled>Select Sub Category</option>
                                            <option value="regularCar">Rregular Car</option>
                                            <option value="policeCar">Police Car</option>
                                            <option value="truck">Truck</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" placeholder="Price" name="price" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Toy Photo URL</span>
                                        </label>
                                        <input type="text" name="photoURL" placeholder="Toy photo url" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available Quantity</span>
                                        </label>
                                        <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered" required />
                                    </div>
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy description</span>
                                </label>
                                <textarea name="description" placeholder="Toy description" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 text-white">Add Toy</button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>



        </div>
    );
};

export default AddAToy;