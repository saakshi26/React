import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Error from './components/Error';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import RestrauntMenu from './components/RestrauntMenu';
import { lazy, Suspense } from 'react';
// import Grocery from './components/Grocery';


// const heading = React.createElement(
//     'h1',
//     {id: 'heading'},
//     "Hellow World from React!!"
//     );

    // <div id='parent'>
    //     <div id="child">
    //         <h1>I am a h1 tag</h1>
    //         <h2>I am h2 tag</h2>
    //     </div>
    //     <div id="child2">
    //         <h1>I am a h1 tag</h1>
    //         <h2>I am h2 tag</h2>
    //     </div>
    // </div>

//     const parent = React.createElement("div", {id: 'parent'}, [
//         React.createElement("div", {id: 'child'}, [
//             React.createElement("h1", {}, "I am a h1 tag"),
//             React.createElement("h2",{}, "I am h2 tag")
//         ]),
//         React.createElement("div", {id: 'child2'}, [
//             React.createElement("h1", {}, "I am a h1 tag"),
//             React.createElement("h2",{}, "I am h2 tag")
//         ])
//     ]);

//     console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);
// root.render(parent);




//React Element
// const heading = React.createElement("h1",{id:'heading'},"Hello React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//JSX React
// const jsxHeading = (<h1 id="heading" className="head" tabIndex="">
//     Namaste React using JSX</h1>); 
// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// React Component
// two types of components
// Class Based Component --> old way
// Functional Component ---> new way

 
// React Functional Component
//A function which return some JSX piece of code is react functionalcomponent

const Title = () => (
    <h1 className="head" tabIndex="5">
        Hello React using jsx
    </h1>
);

const HeadingComponent = () => {
     return <h1>Hello React Functional Component</h1>;
};
        //or

    //Component Composition  -> passing one component in another
const HeadingComponent2 = () => (
    <div id="container">
        <Title />   
         <h1>Hello React Functional Component</h1>
    </div>
);
//all the code of title function will come here

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent2 /> );



//this is react element
const ChildComponent = () => (
    <h1>Inside Child Component</h1>
);

const ParentComponent = () => (
    <div id="container">
        <ChildComponent />
        <h1>Inside Parent Component</h1>
    </div>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ParentComponent/>);

const elem = <span>React Element</span>
const Heading = () => (
    <h1 className="head" tabIndex="5">
        {elem}
        <h1 className="heading">Hello React using jsx</h1>
    </h1>
);

 const Component = () => (
    <div id="container">
        {Heading()}
        <Heading />
        <Heading>

        </Heading>
        <h1 className="heading">Hello React Functional Component</h1>
    </div>
 );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Component />);

//React Element
// const header = React.createElement("div",{className: "title"},[
//     React.createElement("h1",{}, "Heading 1"),
//     React.createElement("h2", {}, "Heading 2"),
//     React.createElement("h3", {}, "Heading 3")
// ]);

//Using JSX
const header2 = (
    <div className="title">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
    </div>
)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header2);

const Mainheading = () => (
    <h1>This is the main heading</h1>
)

const Header3 = () => (
    <div className="title">
        <Mainheading />
        <h1 id="heading">Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
    </div>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header3 /> );


//////////////////////////////////////////-------------------Restraunt-------------------///////////////////////////////////////////////////

// Chunking
// Code Splitting
// Lazy loading
// Dynamic Bundling
// Dynamic import

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => (
    <div className='app'>
      <Header />
      <Outlet />
      { /*{/* if path = / */}
      {/* <Body /> */}
      {/* if path = /about */}
      {/* <About /> */}
      {/* if path = /contact */}
      {/* <Contact /> */}
    </div>
   
);
const appRouter = createBrowserRouter([
    {path: "/", element: <AppLayout />, 
    children: [
        {path: '/', element: <Body />},
        {path: "/about", element: <About />},
        {path: '/contact', element: <Contact />},
        {path: '/grocery', element: <Suspense fallback={<h1>Loading......</h1>}><Grocery /> </Suspense>},
        {path: '/restaurants/:resId', element: <RestrauntMenu/>}
    ],
    errorElement: <Error />},
    
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
