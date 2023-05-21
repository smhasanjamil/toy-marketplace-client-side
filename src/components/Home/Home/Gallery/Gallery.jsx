import './Gallery.css'

const Gallery = () => {
    return (
        <div>

<div className="text-center">
                <h1 className="font-bold text-5xl my-8 border-b-4 inline-block border-red-600 text-red-600">Top Selling Car</h1>
            </div>

            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">Shop by Top brands</div>
            </div>

            <div className="image-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-4">

                <div className="card card-side bg-red-200 shadow-xl flex flex-col lg:flex-row">
                    <div className="card-body">
                        <h2 className="card-title">Rev Up Your Savings - Up to 30% Off</h2>
                    </div>
                    <figure className='car-img'><img src="https://i.ibb.co/ZNfLNYL/01.png" alt="car" className='w-full h-auto' /></figure>
                </div>

                <div className="card card-side bg-amber-200 shadow-xl  flex flex-col lg:flex-row">
                    <div className="card-body">
                        <h2 className="card-title">Turbocharge Your Savings - Up to 35% Off</h2>
                    </div>
                    <figure className='car-img'><img src="https://i.ibb.co/fkbKCvy/02.png" alt="car" className='w-full h-auto' /></figure>
                </div>

                <div className="card card-side bg-lime-200 shadow-xl  flex flex-col lg:flex-row">
                    <div className="card-body">
                        <h2 className="card-title">Race to Savings - Up to 20% Off</h2>
                    </div>
                    <figure className='car-img'><img src="https://i.ibb.co/YNwR9MQ/03.png" alt="car" className='w-full h-auto' /></figure>
                </div>




            </div>

        </div>
    );
};

export default Gallery;