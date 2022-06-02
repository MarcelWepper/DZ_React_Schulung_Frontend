import { Button, Toast, Card } from "react-bootstrap";
import { useState, useEffect } from "react";

/**
 * A functional Component which needs an string[], which is rendering this string
 * as the title of the cards
 * @param {[string]} props
 * @returns map of cards with props as title
 */
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
  // useStates for most common Use-Cases
  const [showA, setShowA] = useState(false);
  const [input, setInput] = useState("");
  const [cardArray, setCardArray] = useState([]);

  // As the Use-Effect gets triggered initally, we need to implement a check
  useEffect(() => {
    if (cardArray.length > 0) {
      setTimeout(() => {
        setShowA(!showA);
      }, 1000);
    }
  }, [cardArray]);

  const submitBtn = () => {
    // Following are two ways to push something into an useState Array
    setCardArray((cardArray) => [...cardArray, input]); // <-- Correct Way
    // cardArray.push(cardTitle) // <-- Dirty, but working-ish way
    setInput(""); // Resets the Input field input when submitted
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
      {/** The functional component, called with the input parameter */}
      <FC_Card cards={cardArray} />

      {/** The input field, which is saving the content into useState */}
      <input value={input} onInput={(e) => setInput(e.target.value)} />

      {/** Button, which submits the content */}
      <Button onClick={() => submitBtn()} style={{ marginTop: "8px" }}>
        Submit
      </Button>

      {/** Alert, which is triggerd by useEffect */}
      <Toast show={showA}>
        <Toast.Header />
        <Toast.Body>Woohoo, success!!</Toast.Body>
      </Toast>
    </div>
  );
};

export default Content;
