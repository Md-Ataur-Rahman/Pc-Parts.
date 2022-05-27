import React from "react";

const Blog = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-2/4 shadow-2xl bg-base-100">
          <div class="card-body">
            <p className="text-4xl text-center text-bold">
              How will you improve the performance of a React Application?
            </p>
            <p>
              React performance ভালো করার জন্য প্রথমে Code repeat করা যাবে না |
              Lazy loading images in React becuase of image size too large.
              unnecessary re-renders করা যাবে না | dynamially data load good to
              do . The rows rendered are only a small subset of the full list
              with what is visible (the window) moving as the user scrolls. This
              can improve rendering performance.
            </p>
          </div>
          <div class="card-body">
            <p className="text-4xl text-center text-bold">
              What are the different ways to manage a state in a React
              application?
            </p>
            <p>
              There are four main types of state you need to properly manage in
              your React apps: Local state, Global state, Server state, URL
              state .Local state is data we manage in one or another component.
              Global state is data we manage across multiple components. Data
              that comes from an external server that must be integrated with
              our UI state.Data that exists on our URLs, including the pathname
              and query parameters
            </p>
          </div>
          <div class="card-body">
            <p className="text-4xl text-center text-bold">
              How does prototypical inheritance work
            </p>
            <p>
              Every object with its methods and properties contains an internal
              and hidden property known as Prototype. The Prototypal Inheritance
              is a feature in javascript used to add methods and properties in
              objects.এমন একটি পদ্ধতি যার মাধ্যমে একটি object অন্য একটি object
              property inherit করতে পারে | inherit একে অন্যের objetc's প্রপার্টি
              access করতে পারে |
            </p>
          </div>
          <div class="card-body">
            <p className="text-4xl text-center text-bold">
              Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts
            </p>
            <p>
              const [products, setProducts] = useState([]); যদি আমরা directly
              products set করি তাহলে. এই products value অরে চেঞ্জড করতে পারবো না
              | যদি আমরা products value চেঞ্জড করতে চায় তাহলে কোনো একটা function
              দিয়ে changed করতে হবে আর সেটা setProducts.. .
            </p>
          </div>
          <div class="card-body">
            <p className="text-4xl text-center text-bold">
              What is a unit test? Why should write unit tests?
            </p>
            <p>
              Unit testing is a software development process in which the
              smallest testable parts of an application, যাকে বলে units, are
              individually and independently যাচাই করে proper operation মাধমে.
              Developers write unit tests so they can repeatedly run them and
              check that no bugs have been introduced. If unit tests are slow,
              developers are more likely to skip running them on their own
              machines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
