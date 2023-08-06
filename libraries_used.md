# List & Description of Libraries used in Travelog #

As previously detailed in part A of this project, we have built Travelog using the MERN stack:
- **MongoDB:** a NoSQL database providing performance and scaleability.
- **Express.js:** web framework for Node.js.
- **React.js:** a JavaScript library helpful for building user interfaces.
- **Node.js:** executes JavaScript outside the browser, thus allowing it to be a full-stack language.

In addition to these technologies we have drawn on a number of the available libraries:

- **ReactRouter:** one of the standard libraries used for routing in React. React Router handles the navigation among views of the various components, allowing the app to maintain state while the user navigates around.  
  
- **ReactDOM:** provides DOM-specific methods used at the top of the app architecture and enables an effcient way to manage updates to the DOM. This means React only needs to update the components that change rather than having to re-render an entire page. As the name suggests, React DOM is used hand in hand with React, where React handles the creation of React elements and components, and React DOM renders them.  
  
- **Bootstrap:** is usually considered a framework, but we are including it in this list for completeness. It is a CSS framework that includes many pre-defined class-based stylesheets, which we've used when styling some of our components.  
  
- **Mongoose:** helps with the interactions between MongoDB and Node.js, essentially acting as a layer of middleware between them. It has a number of helpful functions including a schema-based approach that maps to the database collection and helps shape the documents in it. Mongoose also allows the full range of CRUD operations via its models.  
  
- **Axios:** is used to send HTTP requests from the browser tot he server. It is promise-based allowing us to use 'async/await' syntax as well as 'then' blocks to handle the HTTP responses.  
 
- **Webvitals:** this libabry provides metrics that reflect how users experience a web-page, allowing us to improve the user experience.  
 
- **Jest:** used as part of our testing. Jest is a widely used testing library or framwork for JavaScript. It offers a full suite of testing fucntionality and is particularly well suited to testing React apps. Jest allows developers to create many different types of test including unit tests (to test indivisual functions or components), integration tests (to check the interactions between components) and snapshot tests (for capturing and comparing UI snapshots over time).  
  