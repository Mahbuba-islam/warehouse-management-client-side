import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
           <div className='  rounded  pt-5 pb-5 mb-5 shadow-lg mt-5 ' style={{borderBottom:'5px solid  rgb(71,49,103)'}} >
           <h2 className=' text-center' style={{color:'#473167'}}>When should you use nodejs?</h2>
            <p className='text-center w-75 mx-auto lh-lg '>Web servers are a perfect use case that benefits from Node’s inherent features. Node’s event-driven implementation can be used to trigger events in the server every time a request from the client-side is received. The single-threaded and asynchronous features ensure that the server can serve a large number of requests at a given time using callbacks. Sending responses back to the client-side is handled by these callbacks while the event loop keeps accepting and passing the receiving requests to event handlers without much delay.</p>
            </div> 
            <div className='  rounded  pt-5 pb-5 mb-5 shadow-lg' style={{borderBottom:'5px solid  rgb(71,49,103)'}} >
                <h2 className=' text-center' style={{color:'#473167'}}>When should you use mongodb?</h2>
                <p className='text-center w-75 mx-auto lh-lg '>MongoDB is a great database for web applications, especially if the application services many users who do not interact with each other. Think financial services applications, where users only need access to their own data. Or a blogging application, where users want to log in and create/edit their own blogs. Users not interacting with each other is the key takeaway. With a relational database, one would have to store information about a user across several tables. When that user logs on, the application would have to make several queries, or complex JOIN queries, to access all the information for that user. With MongoDB's schemaless document-database, you can store all of a user's information together. This would allow for a single query to a single collection, and the front-end can deal with displaying/editing the data.</p>
            </div>
            <div className='  rounded  pt-5 pb-5 mb-5 shadow-lg ' style={{borderBottom:'5px solid  rgb(71,49,103)'}} >
                <h2 className=' text-center' style={{color:'#473167'}}>Differences between sql and nosql databases?</h2>
                <p className='text-center w-75 mx-auto lh-lg '>The first difference to discuss is vocabulary. In SQL, we use tables. In NoSQL, we use collections. In SQL, tables consist of records/rows, in NoSQL, collections are documents.To query MongoDB, you need to use NoSQL syntax. The prominence of a defined schema is clear in the SQL INSERT because the columns you choose have to exist in the users table. With the NoSQL statement, the id and age columns do not have to exist in the collection beforehand. In fact, you can make another INSERT into that collection with different fields. 
               </p>
          </div>
            <div className='  rounded pt-5 pb-5 mb-5 shadow-lg ' style={{borderBottom:'5px solid  rgb(71,49,103)'}} >
                <h2 className='text-center' style={{color:'#473167'}}>What is the purpose of jwt and how does it work?</h2>
                <p className='text-left w-75 mx-auto lh-lg'>JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it’s an encoded JSON containing a set of claims and a signature. It’s usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It’s also a popular way to authenticate/authorize users in a microservice architecture. When it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server. 
               </p>
          </div>

        </div>
    );
};

export default Blogs;