## Question 1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
=>getElementById and querySelector are used to select a single element.  
=>getElementsByClassName and querySelectorAll are used to select multiple elements.  
=>getElementsByClassName returns a live HTMLCollection.  
=>querySelectorAll returns a static NodeList.  

## Question 2: How do you create and insert a new element into the DOM?
=>Get the parent element using a selector,  
=>create a new element with document.createElement(),  
=>and append it to the parent using appendChild().  

## Question 3: What is Event Bubbling? And how does it work?
=>Event Bubbling is when an event on an element first runs on that element and then propagates up to its parent elements in the Dom, allowing parents to also respond to the same event.

## Question 4: What is Event Delegation in JavaScript? Why is it useful?
=>Event Delegation is a technique where a single event listener is added to a parent element to handle events for its child elements using event bubbling.

## Question 5: What is the difference between preventDefault() and stopPropagation() methods?
=>preventDefault() stops the default action of an element from happening.  
=>stopPropagation() stops the event from bubbling up to parent elements in the Dom.
