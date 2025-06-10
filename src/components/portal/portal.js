// 🌟 What is a Portal in React?
// ✅ A Portal allows you to render a component outside the main parent DOM tree.
// ✅ Even though it looks like it’s somewhere else in HTML, React still controls it.

// 🧠 Why would you use a Portal?
// Sometimes you want a component to appear:

// Above everything else (like a modal, popup, or tooltip),

// Outside the parent <div> (because of CSS issues, like overflow: hidden),

// But you still want React to manage it.

// Normal rendering sticks to parent divs →
// Portal rendering jumps to another place you choose.

// ✍ How to create a Portal?
// 👉 First, in your HTML (public/index.html), add an empty div:

// html
// Copy code
// <div id="root"></div>
// <div id="portal-root"></div> <!-- Added for portal -->
// ✅ root is your normal app.
// ✅ portal-root will be used by the portal.

// 👉 Then in React:

// javascript
// Copy code
// import ReactDOM from "react-dom";

// function MyModal() {
//   return ReactDOM.createPortal(
//     <div style={{ background: 'lightblue', padding: '20px' }}>
//       <h1>This is a Modal!</h1>
//     </div>,
//     document.getElementById('portal-root')  // Portal target
//   );
// }
// ✅ ReactDOM.createPortal(element, targetNode)

// ✅ Now, even though MyModal is a React child,
// it appears inside the #portal-root div in HTML!

// 🎯 Real Example:
// jsx
// Copy code
// function App() {
//   return (
//     <div>
//       <h1>Main App</h1>
//       <MyModal />
//     </div>
//   );
// }
// ✅ Visually: it looks part of <App>
// ✅ But HTML structure shows it in #portal-root.

// 🚀 Quick Summary:
// Thing	Meaning
// Portal	Render React elements outside their parent DOM
// Syntax	ReactDOM.createPortal(children, targetElement)
// Common use cases	Modals, Popups, Tooltips, Notifications
// 🔥 One-line definition:
// Portal = React’s way to put a component somewhere else in HTML, while still managing it.