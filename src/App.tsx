import ListGroup from "./components/ListGroup";
function App() {
  let items = ["NY", "SF", "TK", "LD", "PR", "CH"];

  let handleSelected = (item: string) => {
    console.log("from app.tsx", item);
  };

  return (
    <div>
      <ListGroup items={items} heading="List" handleSelected={handleSelected} />
    </div>
  );
}

export default App;
