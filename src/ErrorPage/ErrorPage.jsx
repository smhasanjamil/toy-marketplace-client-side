import { Link } from "react-router-dom";
import './ErrorPage.css'


const ErrorPage = () => {
    return (
        <div className="container mx-auto px-2">
            {/* <div className="flex flex-col text-center items-center justify-center gap-2 h-screen">
                <h1 className="text-5xl font-bold">404!</h1>
                <h3>Page Not Found</h3>
                <Link to="/" className="btn">Back To Home</Link>
            </div> */}


            <div className="flex items-center h-screen justify-center flex-col">
                <div><img src="https://i.ibb.co/4dvSpdm/bgremove.png" alt="404 image" className="w-48 md:w-96" /></div>

                <div className="flex flex-col justify-center items-center gap-4">
                    <h3 className="text-lg md:text-4xl font-bold">Page Not Found!</h3>
                    <Link to="/" className="btn back-home-btn">Back To Home</Link>
                </div>

            </div>




        </div>
    );
};

export default ErrorPage;