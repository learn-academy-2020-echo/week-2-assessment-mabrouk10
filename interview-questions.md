# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. Why would you use the method super()?

  Your answer: You use a super method in order to inherit all methods and data from the parent element.

  Researched answer: The super keyword is used to access and call functions on an object's parent.


2. What is a virtual DOM?

  Your answer: REACT has a virtual DOM which means it refreashes on its own without having to hard reload a whole page when a function is being done. For example when executing a function like an onClick function. The page does not need a hard reload. It will be updated automatically. 

  Researched answer: The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

  React creates a tree of custom objects representing a part of the DOM. For example, instead of creating an actual DIV element containing a UL element, it creates a React.div object that contains a React.ul object. It can manipulate these objects very quickly without actually touching the real DOM or going through the DOM API. Then, when it renders a component, it uses this virtual DOM to figure out what it needs to do with the real DOM to get the two trees to match.

You can think of the virtual DOM like a blueprint. It contains all the details needed to construct the DOM, but because it doesn't require all the heavyweight parts that go into a real DOM, it can be created and changed much more easily.



3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer: You need to first make a new directory called components. Inside components you make a new file with the name of the component. Make sure to follow the same React basic boilerplate with the name of your file in the appropriate places. Be sure to export the file. And make sure to import it into the App.js file. Inside the new file make the changes needed to diplay "Hello World". You can use a variety of different ways to write out the "Hello Word" (h1, div, p) however be sure it is in the new files return function. Inside the app.js file put <NewFile /> inside of the App.js return function. Once that is done you should see the contents of your new file on the browser after dragging the file into it


  Researched answer: React lets you define components as classes or functions. Components defined as classes currently provide more features which are described in detail on this page. To define a React component class, you need to extend React.Component
  The only method you must define in a React.Component subclass is called render(). All the other methods described on this page are optional.

  These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
constructor()
static getDerivedStateFromProps()
render()
componentDidMount()


4. What is JSX?

  Your answer: JSX is the javascript in REACT. It allows us to write HTML in javascript

  Researched answer: JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.

JSX converts HTML tags into react elements.

It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

JSX produces React “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started.




5. What is state in React?

  Your answer: State is an object inside of a React componenet. You can manipulate the state in order to control the behavior of a component

  Researched answer: React components has a built-in state object.

The state object is where you store property values that belongs to the component.

When the state object changes, the component re-renders.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: Not sure. Hoist means raise maybe raising something in javascript

  Researched answer: In JavaScript, a variable can be declared after it has been used.

In other words; a variable can be used before it has been declared.

Hoisting is JavaScript's default behavior of moving declarations to the top.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: Mounting, Updating, and Unmounting.

Mounting means putting elements into the DOM.

The next phase in the lifecycle is when a component is updated.

A component is updated whenever there is a change in the component's state or props.

The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.


- React props
When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

Props are arguments passed into React components.
Props are passed to components via HTML attributes.


- event.preventDefault()
The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. The event continues to propagate as usual, unless one of its event listeners calls stopPropagation() or stopImmediatePropagation(), either of which terminates propagation at once.

The event.preventDefault() method stops the default action of an element from happening.

For example:

Prevent a submit button from submitting a form
Prevent a link from following the URL

- DOM events
HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document.

Events are normally used in combination with functions, and the function will not be executed before the event occurs (such as when a user clicks a button).

DOM (Document Object Model) events are actions that occur as a result of the user action or as result of state change of the elements of a DOM tree. Client-side scripting languages like JavaScript, JScript, ECMAScript, VBScript, and Java can register various event handlers or listeners on the element nodes inside a DOM tree, such as in HTML, XHTML, XUL, and SVG documents.

- MVC
MVC is abbreviated as Model View Controller is a design pattern created for developing applications specifically web applications. As the name suggests, it has three major parts. The traditional software design pattern works in an "Input - Process - Output" pattern whereas MVC works as "Controller -Model - View" approach. With the emergence of the MVC model, creation of application takes different aspects individually into consideration. These aspects of the application are:

UI Logic
Input logic
Business Logic

Model: The Model encloses the clean application related data. But the model does not deal with any logic about how to present the data.
View: The View element is used for presenting the data of the model to the user. This element deals with how to link up with the model's data but doesn't provide any logic regarding what this data all about or how users can use these data.
Controller: The Controller is in between the model and the view element. It listens to all the incident and actions triggered in the view and performs an appropriate response back to the events.