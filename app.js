const title = React.createElement(
  "h1",
  { id: "test" },
  "Hola desde app.js with react pure"
);
const name = React.createElement("h2", {}, "Armando");

const User = ({ name, email, age }) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("h4", {}, email),
    React.createElement("h4", {}, age)
  ]);
};

const App = React.createElement("div", {}, [
  title,
  name,
  React.createElement(User, {
    name: "Armando Salamanca",
    email: "asalamanca@",
    age: "33 años"
  }),
  React.createElement(User, {
    name: "Nallely Aguilar",
    email: "asarahi@",
    age: "30 años"
  })
]);

ReactDOM.render(App, document.getElementById("root"));
