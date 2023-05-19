import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="container mx-auto px-2">



            <div className="flex flex-col gap-8 md:gap-2 md:justify-center md:items-center h-screen md:flex-row-reverse px-2 md:px-0 my-8 md:my-0">

                <div className="w-full md:w-6/12">
                    <div className=" flex flex-col gap-2 md:w-3/4">
                        <h1 className="font-bold text-5xl md:text-5xl">Welcome Back to the <span className="text-red-600">Motor Mart</span>!</h1>
                        <p className="text-justify">Log in to access your account and dive back into the thrilling world of toy cars. Connect with fellow collectors, browse our extensive inventory, and stay up-to-date with the latest trends. </p>
                    </div>
                </div>

                <div className="w-full md:w-6/12">

                    <div className="card">
                        <div className="md:card-body">
                            <form>
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
                                        <Link to="#" className="text-blue-700">Forgot password?</Link>
                                        <p>New to the Motor Mart? <Link to="/register" className="text-blue-700">Join Us Today!</Link> </p>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 text-white">Login</button>
                                </div>

                                <div className="divider">OR</div>

                                <div className="form-control">
                                    <button className="btn bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 text-white">
                                        <div className="flex flex-row gap-1 justify-center items-center">
                                            <div><img src="https://i.ibb.co/TPwxtp6/social.png" alt="google logo" className="h-8 w-8" /></div>
                                            <div><p>Login With Google</p></div>
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>



        </div>
    );
};

export default Login;