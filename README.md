# DevStack

DevStack is a simple developer resource website where users can explore different tools and resources in one place.

## Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* DaisyUI
* HTML & CSS
* JSON / API

## Features

* Users can explore different developer tools.
* Users can select and manage items.
* The website is responsive and works on different screen sizes.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes writing React UI easier and cleaner.

### 2. What is the difference between props and state?

Props are used to pass data from a parent to a child component.

State is used to store data inside a component that can change.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data in a component.

I used it to manage the selected items and update the UI when the data changes.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run code after a component renders.

I used it to load the JSON data when the page loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in a list. It helps React update the list correctly when something changes.

### 6. What is conditional rendering?

Conditional rendering means showing something based on a condition.

For example, I showed an empty message when there are no items:

```jsx
{stack.length === 0 && <p>Your stack is empty.</p>}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props.

A child can send data back to the parent by using a function that the parent passes through props.
