import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
function App() {
  let items = ["NY", "SF", "TK", "LD", "PR"];

  let handleSelected = (item: string) => {
    console.log("from app.tsx", item);
  };

  return (
    <div>
      <Alert>
        Hello <span>world</span>
      </Alert>
      <ListGroup items={items} heading="List" handleSelected={handleSelected} />
    </div>
  );
}

export default App;
