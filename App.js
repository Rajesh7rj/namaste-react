let parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement(
        "h1",
        {
          id: "heading",
          xyz: "abc",
        },
        "hello from react"
      ),
      React.createElement(
        "h2",
        {
          id: "heading",
          xyz: "abc",
        },
        "hello from react"
      ),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement(
        "h1",
        {
          id: "heading",
          xyz: "abc",
        },
        "hello from react"
      ),
      React.createElement(
        "h2",
        {
          id: "heading",
          xyz: "abc",
        },
        "hello from react"
      ),
    ])
  ]
);

console.log(parent);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
