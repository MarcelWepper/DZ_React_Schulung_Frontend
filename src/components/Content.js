import { Button, Card, Toast } from "react-bootstrap";
import React, { useState, useEffect } from "react";

function App() {
  const [showA, setShowA] = React.useState(false);
  const [input, setInput] = useState("");
  const [cardArray, setCardArray] = useState([]);

  useEffect(() => {
    setShowA(!showA);
  }, [cardArray, input]);

  const submitBtn = () => {
    // cardArray.push(cardTitle)
    setCardArray((cardArray) => [...cardArray, input]);
    setInput("");
  };

  const FC_Card = (props) => {
    return (
      <div>
        {props.cards.map((v, i) => {
          // i = i * 2;
          return (
            <Card style={{ width: "18rem", margin: "8px" }}>
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

  return (
    <div
      style={{
        background: "white",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {showA ? (
        <h1 style={{ margin: "0px", paddingTop: "32px" }}>Hello world</h1>
      ) : (
        <h1>Bye World</h1>
      )}
      <FC_Card cards={cardArray} />
      <input value={input} onInput={(e) => setInput(e.target.value)}></input>
      <Button onClick={() => submitBtn()}>Heyho</Button>

      <Toast show={showA} autohide={true} delay={3000}>
        <Toast.Header />
        <Toast.Body>Woohoo, success!!</Toast.Body>
      </Toast>
    </div>
  );
}

export default App;
