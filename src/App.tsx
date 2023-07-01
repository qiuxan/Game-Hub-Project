import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { MouseEvent } from "react";
function App() {
  let items = ["NY", "SF", "TK", "LD", "PR"];

  let handleSelected = (item: string) => {
    console.log("from app.tsx", item);
  };

  let handleButtonClick = () => {};

  return (
    <div>
      <Button
        color="secondary"
        onClick={(event: MouseEvent) => console.log(event)}
      >
        Button text
      </Button>
      <Alert>
        Hello <span>world</span>
      </Alert>
      <ListGroup items={items} heading="List" handleSelected={handleSelected} />
    </div>
  );
}

export default App;
