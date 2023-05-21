

const CustomerReview = () => {
    return (
        <div className="container mx-auto px-2 my-8">

            <div className="text-center">
                <h1 className="font-bold text-5xl my-12 border-b-4 inline-block border-red-600 text-red-600">Customer Review</h1>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                <div className="card w-full bg-base-200 shadow-3xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/1L3MZzh/pexels-justin-shaifer-1222271.jpg" alt="Shoes" className="rounded-full h-24 w-24" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Motor Mart exceeded my expectations! The quality of their toy cars is unmatched, and their customer service is top-notch. Highly recommended!</h2>
                        <p>-John D</p>
                    </div>
                </div>

                <div className="card w-full bg-base-200 shadow-3xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/n87czYZ/pexels-pixabay-220453.jpg" alt="Shoes" className="rounded-full h-24 w-24" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">As a passionate collector, I could not be happier with my purchase from Motor Mart. The attention to detail in their toy cars is incredible. I am a customer for life!</h2>
                        <p>-Emily W</p>
                    </div>
                </div>

                <div className="card w-full bg-base-200 shadow-3xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/JHFQcht/pexels-andrea-piacquadio-874158.jpg" alt="Shoes" className="rounded-full h-24 w-24" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">I recently bought a toy car from Motor Mart for my son, and he absolutely loves it! The product arrived on time, and the quality is outstanding. Thank you, Motor Mart!</h2>
                        <p>-David M</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CustomerReview;