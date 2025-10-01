import useRouterElement from "./routes/useRouterElement";

function App() {
  const routerElement = useRouterElement();
  return <>{routerElement}</>;
}

export default App;
