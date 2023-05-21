

const Blog = () => {
    return (
        <div className="container mx-auto px-2">
            <div className="text-center">
                <h1 className="font-bold text-5xl my-8 border-b-4 inline-block border-red-600 text-red-600">Blog</h1>
            </div>


            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p>An access token is a credential that is used to authenticate and authorize access to protected resources on behalf of a user. It is typically a JSON Web Token (JWT) that contains information about the user and their permissions. Access tokens have a limited lifespan and are used to make authenticated requests to the server. <br /><br />

                        A refresh token is a long-lived credential that is used to obtain a new access token once the current one expires. It is securely stored on the client-side and sent to the server to request a new access token when needed.
                        <br /><br />
                        Both access tokens and refresh tokens should be stored securely on the client-side. They are commonly stored in browser cookies or local storage. It is important to follow security best practices, such as using HTTP-only cookies and implementing proper token handling mechanisms, to protect against unauthorized access and token theft.</p>
                </div>
            </div>
            <br /><br />

            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
                    <p>SQL (Structured Query Language) databases are relational databases that store data in tables with predefined schemas. They use structured data models and are suitable for complex queries and relationships between data. SQL databases ensure data integrity through ACID (Atomicity, Consistency, Isolation, Durability) properties and are commonly used for structured data and traditional applications.
                        <br /><br />
                        NoSQL (Not Only SQL) databases, on the other hand, provide a flexible and scalable approach to data storage. They use various data models such as key-value, document, columnar, or graph-based. NoSQL databases offer horizontal scalability, allowing them to handle large amounts of unstructured or semi-structured data. They are well-suited for distributed and highly scalable systems, but may sacrifice some data consistency and integrity for performance and scalability.
                    </p>
                </div>
            </div>
            <br /><br />

            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is express js? What is Nest JS?</h2>
                    <p>Express.js is a fast and minimalist web application framework for Node.js. It provides a simple and flexible set of features for building web applications and APIs. <br /><br />

Nest.js is a progressive, server-side framework built on top of Node.js. It is designed to provide an efficient and scalable architecture for building server-side applications. Nest.js leverages TypeScript and follows the principles of modular programming, dependency injection, and decorators to simplify the development process.</p>
                </div>
            </div>
            <br /><br />

            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is MongoDB aggregate and how does it work?</h2>
                    <p>MongoDB aggregate is a powerful framework used for data aggregation in MongoDB. It allows you to perform advanced data processing operations on your MongoDB collections, including filtering, grouping, sorting, and transforming data. The aggregate function takes an array of stages as input, where each stage represents a specific data processing operation. These stages are executed in sequence to perform complex data manipulations and generate aggregated results. Aggregate provides a flexible and efficient way to analyze and extract meaningful insights from your MongoDB data.</p>
                </div>
            </div>


        </div>
    );
};

export default Blog;