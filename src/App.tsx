import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { MouseEvent, useState } from "react";
function App() {
  let items = ["NY", "SF", "TK", "LD", "PR"];

  let handleSelected = (item: string) => {
    console.log("from app.tsx", item);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  let handleButtonClick = () => {
    setAlertVisible(false);
  };

  return (
    <div>
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisible(false);
          }}
        >
          My <span>Alert</span>
        </Alert>
      )}

      <Button
        color="secondary"
        onClick={(event: MouseEvent) => {
          setAlertVisible(true);
          console.log(event);
        }}
      >
        Button text
      </Button>

      <ListGroup items={items} heading="List" handleSelected={handleSelected} />
    </div>
  );
}

export default App;
