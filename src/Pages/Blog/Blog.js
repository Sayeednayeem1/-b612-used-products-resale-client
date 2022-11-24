import React from 'react';

const Blog = () => {
    return (
        <div className='mt-8'>
            <h1 className='text-center text-2xl text-green-600 font-bold'>Question Answer Section</h1>
            <h4 className='mt-4 text-center'>Most frequently asked questions and answers are given below</h4>
            <div className='mt-5 px-9'>
                <h4>Q-1: What are the different ways to manage a state in a React application? </h4>
                <p className='px-8'>Ans: There are four main types of state you need to properly manage in your React apps: </p>
                <p className='px-8 mb-5'>1.Local state <br /> 2.Global state <br /> 3. Server state <br /> 4. URL state</p>
                <p className='px-8 mb-4'>1. <span className='font-bold'>Local state</span>: Local state is most often managed in React using the useState hook. <br /> For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</p>
                <p className='px-8 mb-4'>2. <span className='font-bold'>Global state</span>: Global state is necessary when we want to get and update data anywhere <br /> in our app, or in multiple components at least.</p>
                <p className='px-8 mb-4'>3. <span className='font-bold'>URL state</span>: URL state is often missing as a category of state, but it is an important one. <br />In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch <br /> a post based off of its slug or id that is located in the URL!</p>
                <p className='px-8 mb-4'>4. <span className='font-bold'>Server state</span>: Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br /> There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.</p>
                <br />
                <h4>Q-2: How does prototypical inheritance work?</h4>
                <p className='px-8'>Ans: The Prototypal Inheritance is a feature in javascript used to add methods <br /> and properties in objects. It is a method by which an object can inherit <br /> the properties and methods of another object. Traditionally, <br /> in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                <br />
                <h4>Q-3: What is a unit test? Why should we write unit tests?</h4>
                <p className='px-8'>Ans:
                    A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. <br/> They enable you to catch bugs early in the development process.<br/> Automated unit tests help a great deal with regression testing. <br/> They detect code smells in your codebase. For example, if you're having <br/> a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex. </p>
                <br />
                <h4>Q-4: React vs. Angular vs. Vue?</h4>
                <p className='px-8'>Ans: How is React different from Angular? React is a JavaScript library, whereas Angular is a front-end framework. React uses one-way data binding and virtual DOM, whereas Angular uses two-way data binding and real DOM. Moreover, React is faster than Angular as it has a smaller bundle size. <br/> What is the difference between ReactJS and VueJS? VueJS is two-way binding; whereas ReactJS is one-way binding and that's why VueJs uses more computer resources than ReactJS. Moreover, looking at the learning curve, Vue is easier than React and applications can get developed in a shorter time duration than ReactJS</p>
            </div>
        </div>
    );
};

export default Blog;