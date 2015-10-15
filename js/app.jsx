const React = require("react");
const App = require("./components/App");

// When the window is loaded, render the App component.
window.onload = () => {
  React.render(<App/>,document.querySelector("#root"));
}