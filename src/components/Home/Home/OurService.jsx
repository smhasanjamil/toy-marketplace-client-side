

const OurService = () => {
    return (
        <div className="container mx-auto px-2">

            <div className="text-center">
                <h1 className="font-bold text-5xl my-12 border-b-4 inline-block border-red-600 text-red-600">Why Choose Us</h1>
            </div>


            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                <div className="card w-full shadow-3xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/z6qJ3XK/customer-service-1.png" alt="Shoes" className="rounded h-24 w-24" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Quality Assurance</h2>
                        <p>Our toy cars are built to last, crafted with durable materials and attention to detail. We prioritize quality to provide toys that withstand endless playtime and bring joy for years to come.</p>
                        <p className="font-bold">Read More</p>
                    </div>
                </div>

                <div className="card w-full shadow-3xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/q9v8BZD/customer-service.png" alt="Shoes" className="rounded h-24 w-24" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Safety First</h2>
                        <p>We prioritize the safety of your child. Our toy cars undergo rigorous testing to meet the highest safety standards, ensuring they are free from harmful substances and designed with child-friendly features.</p>
                        <p className="font-bold">Read More</p>
                    </div>
                </div>

                <div className="card w-full shadow-3xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/BL9DCPM/24-hours.png" alt="Shoes" className="rounded h-24 w-24" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Customer Satisfaction</h2>
                        <p>We strive for excellence in customer satisfaction. Our friendly and knowledgeable team is always ready to assist you, ensuring a smooth shopping experience and addressing any queries or concerns promptly.</p>
                        <p className="font-bold">Read More</p>
                    </div>
                </div>

                <div className="card w-full shadow-3xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/yggGG6c/customer-service-agent.png" alt="Shoes" className="rounded h-24 w-24" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Authentic Designs</h2>
                        <p>Our toy cars capture the essence of real-life vehicles, featuring authentic designs and realistic features. Whether it is sleek sports cars or rugged off-road trucks, each toy car mirrors its real-world counterpart.</p>
                        <p className="font-bold">Read More</p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default OurService;