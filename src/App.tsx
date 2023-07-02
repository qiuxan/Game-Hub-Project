import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { MouseEvent, useState } from "react";
import { BsCash } from "react-icons/bs";

// import "./App.css";
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
      <BsCash color="green" size={40} />
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
