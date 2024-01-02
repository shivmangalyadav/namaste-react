const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "Child" },[
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h1", {}, "I am h2 tag"),
    ]),
    React.createElement("div", { id: "Child2" },[
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h1", {}, "I am h2 tag")
    ])]
);
4
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);