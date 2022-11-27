import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='section-title'>Educational Blogs</h1>

            <div className='blog-question'>
                <div>
                    <h3>Difference Between Javascript and Node.js?</h3>
                    <p>Javascript:JavaScript is a high-level, single-threaded, interpreted, dynamic type, object-orientated, prototype-based, functional programming language. it worked with the v8 engine and it has just in time compiler. Also, it has an API that works with text, date, regular expression, and DOM.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                    </p>
                    <p> NodeJS:
                        NodeJS is a Javascript runtime environment.
                        We can run Javascript outside the browser with the help of NodeJS.
                        It is mostly used on the server-side.
                        Nodejs does not have capability to add HTML tags.
                        V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                    </p>
                </div>
                <div>
                    <h3>When should you use nodejs and when should you use mongodb?</h3>
                    <p>We can use node.js for constructing an API application with both relational and non-relational databases. It is suitable because of the Single thread with event loop.Always being processed asynchronously by internal threads without interrupting the main thread.Due to the event-driven and asynchronous nature, node.js is good at building real-time applications</p>
                    <p>Mongodb is very fast and efficient so I should use it when I have key value pair to store(json data) . one of the best advantage with MongoDB is I can store a collection inside another collection . it support more user at a time and also useful if I have large number of fields.</p>
                </div>
                <div>
                    <h3>Differences between sql and nosql databases?</h3>
                    <p>SQL:
                        RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
                        These databases have fixed or static or predefined schema
                        These databases are not suited for hierarchical data storage.
                        These databases are best suited for complex queries
                        Vertically Scalable
                    </p>
                    <p>
                        NoSQL:
                        Non-relational or distributed database system.
                        They have dynamic schema
                        These databases are best suited for hierarchical data storage.
                        These databases are not so good for complex queries
                        Horizontally scalable
                    </p>

                </div>
                <div>
                    <h3>What is the purpose of jwt and how does it work?</h3>
                    <p>JWT-JSON Web Token, is an open standard used to share security information between two parties — a client and a server.JWT is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.It has one characteristic in particular that makes it a good tool for sending a users identity to a backend service. We can trust the integrity of a JWT because JWTs are signed, making them tamper-proof.</p>
                    <p>JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization.you will get two JSON strings:The header and the payload.header contains the type of token JWT in this case and the signing algorithm. Payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact.</p>

                </div>
            </div>
        </div>
    );
};

export default Blogs;