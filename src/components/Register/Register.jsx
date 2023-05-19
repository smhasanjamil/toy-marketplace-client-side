import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="container mx-auto px-2">


            <div className="flex flex-col gap-8 md:gap-2 md:justify-center md:items-center h-screen md:flex-row-reverse px-2 md:px-0 my-8 md:my-0">

                <div className="w-full md:w-6/12">
                    <div className=" flex flex-col gap-2 md:w-3/4">
                        <h1 className="font-bold text-5xl md:text-5xl">Join the Exciting <span className="text-red-600">Motor Mart</span>!</h1>
                        <p className="text-justify">Welcome to our Motor Mart, where passion meets playfulness! Sign up today to explore an extraordinary collection of toy cars from around the world.</p>
                    </div>
                </div>

                <div className="w-full md:w-6/12">

                    <div className="card">
                        <div className="md:card-body">
                            <form>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter your name" name="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Enter your photo url" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Enter your email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Enter your password" className="input input-bordered" required />
                                </div>
                                <div className="form-control my-2">
                                    <div className="flex flex-col justify-start gap-2">
                                        <p>Already a member of our Motor Mart? <Link to="/login" className="text-blue-700">Login Here</Link> </p>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 text-white">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>




        </div>
    );
};

export default Register;