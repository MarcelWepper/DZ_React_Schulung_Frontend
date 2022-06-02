import { Button, Toast, Card, Form } from "react-bootstrap";
import { useState } from "react";

const FC_Card = (props) => {
  return (
    <div>
      {props.cards.map((el, i) => {
        return (
          <div style={{ padding: "8px" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  {el} - {i}
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

const Content = () => {
  const [showA, setShowA] = useState(false);
  const [input, setInput] = useState("");
  const [cardArray, setCardArray] = useState([]);

  const submitBtn = () => {
    setShowA(!showA);
    // cardArray.push(cardTitle)
    setCardArray((cardArray) => [...cardArray, input]);
    setInput("");
  };

  return (
    <div
      className="App"
      style={{
        background: "white",
        height: "92.5vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <FC_Card cards={cardArray} />
      <input value={input} onInput={(e) => setInput(e.target.value)} />

      <Button onClick={() => submitBtn()} style={{ marginTop: "8px" }}>
        Alert!
      </Button>

      <Toast show={showA}>
        <Toast.Header />
        <Toast.Body>Woohoo, success!!</Toast.Body>
      </Toast>
    </div>
  );
};

export default Content;
