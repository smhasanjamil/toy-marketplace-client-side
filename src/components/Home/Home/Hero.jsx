

const Hero = () => {
    return (
        <div>


            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/CVbLnwK/black-car-with-red-yellow-stripes-red-hood.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Discover the Thrill of Toy Cars</h1>
                        <p className="mb-5">Welcome to Motor Mart, your ultimate destination for toy car enthusiasts. Discover a world of miniature wonders and build your own dream collection.</p>
                        <button className="btn bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 text-white">Get Started</button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Hero;