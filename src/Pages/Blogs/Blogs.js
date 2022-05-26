import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        1. How will you improve the performance of a React Application?
      </h1>
      <p>
        Ans:Optimizing application performance is key for developers who are
        mindful of keeping a user’s experience positive to keep them on an app
        and engaged. According to research by Akamai, a second delay in load
        time can cause a 7 percent reduction in conversions, making it
        imperative for developers to create apps with optimized performance. In
        React applications, we are guaranteed a very fast UI by default.
        However, as an application grows, developers may encounter some
        performance issues. In this guide, we will discuss five important ways
        to optimize the performance of a React application, including
        pre-optimization techniques. These include
      </p>
      <ul className="mt-5">
        <li>Keeping component state local where necessary</li>
        <li>Memoizing React components to prevent unnecessary re-renders</li>
        <li>Code-splitting in React using dynamic import()</li>
        <li>Windowing or list virtualization in React</li>
        <li>Lazy loading images in React</li>
      </ul>
      <h1 className="text-3xl font-bold">
        2.What are the different ways to manage a state in a React application?
      </h1>
      <p>1.Local state:</p>
      <p>
        Local (UI) state – Local state is data we manage in one or another
        component. Local state is most often managed in React using the useState
        hook. For example, local state would be needed to show or hide a modal
        component or to track values for a form component, such as form
        submission, when the form is disabled and the values of a form’s inputs.
      </p>
      <p> 2.Global state:</p>
      <p>
        Global (UI) state – Global state is data we manage across multiple
        components. Global state is necessary when we want to get and update
        data anywhere in our app, or in multiple components at least. A common
        example of global state is authenticated user state. If a user is logged
        into our app, it is necessary to get and change their data throughout
        our application. Sometimes state we think should be local might become
        global.
      </p>
      <p>3.Server state:</p>
      <p>
        Server state – Data that comes from an external server that must be
        integrated with our UI state. Server state is a simple concept, but can
        be hard to manage alongside all of our local and global UI state. There
        are several pieces of state that must be managed every time you fetch or
        update data from an external server, including loading and error state.
        Fortunately there are tools such as SWR and React Query that make
        managing server state much easier.
      </p>
      <p>4. URL state:</p>
      <p>
        URL state – Data that exists on our URLs, including the pathname and
        query parameters. URL state is often missing as a category of state, but
        it is an important one. In many cases, a lot of major parts of our
        application rely upon accessing URL state. Try to imagine building a
        blog without being able to fetch a post based off of its slug or id that
        is located in the URL! There are undoubtedly more pieces of state that
        we could identify, but these are the major categories worth focusing on
        for most applications you build.
      </p>
      <h1 className="text-3xl font-bold">
        3.How does prototypical inheritance work?
      </h1>
      <p>
        Every object with its methods and properties contains an internal and
        hidden property known as [[Prototype]]. The Prototypal Inheritance is a
        feature in javascript used to add methods and properties in objects. It
        is a method by which an object can inherit the properties and methods of
        another object. Traditionally, in order to get and set the [[Prototype]]
        of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.
        Nowadays, in modern language, it is being set using __proto__.
      </p>
      <h1 className="text-3xl font-bold">
        4.Why you do not set the state directly in React
      </h1>

      <p>
        One should never update the state directly because of the following
        reasons: If you update it directly, calling the setState() afterward may
        just replace the update you made. When you directly update the state, it
        does not change this.state immediately. Instead, it creates a pending
        state transition, and accessing it after calling this method will only
        return the present value. You will lose control of the state across all
        components.
      </p>
      <h1 className="text-3xl font-bold">
        5.You have an array of products. Each product has a name, price,
        description, etc
      </h1>
      <p>create an empty variable. ( product)</p>
      <p> Initialize it with 1.</p>
      <p>
        In a loop traverse through each element (or get each element from user)
        multiply each element to product.
      </p>
      <p>Print the product.</p>
      <h1 className="text-3xl font-bold">
        6.What is a unit test? Why should write unit tests?
      </h1>
      <p>
        Unit tests are typically automated tests written and run by software
        developers to ensure that a section of an application (known as the
        "unit") meets its design and behaves as intended. In procedural
        programming, a unit could be an entire module, but it is more commonly
        an individual function or procedure.
      </p>
      <p>
        Unit testing allows software developers to actually think through the
        design of the software and what has to be done before they write the
        code. This can help them to stay focused and can also help them to
        create much better designs.
      </p>
    </div>
  );
};

export default Blogs;
