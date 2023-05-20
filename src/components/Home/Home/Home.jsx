import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import ShopByCategory from "../ShopByCategory/ShopByCategory";


const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="container mx-auto px-2">
            <h1>This is home</h1>
            <p>Name : {user && <span>{user.name}</span>}</p>
            <p>Email : {user && <span>{user.email}</span>}</p>
            <ShopByCategory />
        </div>
    );
};

export default Home;