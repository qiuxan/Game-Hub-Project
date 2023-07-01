import ListGroup from "./components/ListGroup";
function App() {
  let items = ["NY", "SF", "TK", "LD", "PR", "CH"];

  return (
    <div>
      <ListGroup items={items} heading="List" />
    </div>
  );
}

export default App;
