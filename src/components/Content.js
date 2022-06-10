import { Button, Card } from "react-bootstrap";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [showA, setShowA] = useState(-1);
  const [cardArray, setCardArray] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("Old showA", showA);
    setShowA(showA + 1);
  }, [cardArray]);

  const FC_Card = (props) => {
    return (
      <div>
        {props.cards.map((v, i) => {
          return (
            <Card style={{ width: "18rem" }} key={i}>
              <Card.Body>
                <Card.Title>
                  {v} - {i}
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  };

  const submitBtn = () => {
    // cardArray.push(cardTitle)
    setCardArray((cardArray) => [...cardArray, input]);
    setInput("");
  };

  return (
    <div className="App">
      <div
        style={{
          height: "90vh",
          background: "grey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {showA > 6 ? <h1>Hello World</h1> : <h2>Bye World</h2>}
        <h3>{showA}</h3>
        <FC_Card cards={cardArray} />
        <input
          style={{ margin: "8px" }}
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <Button onClick={() => submitBtn()}>Submit</Button>
      </div>
    </div>
  );
}

export default App;
