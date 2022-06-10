# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install` or `npm i`
In order to install the tutorial on your machine.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Tutorial

1. Shell in admin
    1. `npm install -g create-react-app`
    2. `npx create-react-app my-app`
2. Show the created folder strucuture
    1. node_modules
    2. public - shortly
    3. package.json
    4. src --> App.js
3. Short "NPM SCRIPTS"
    1. Start scripts
    2. See the page
4. First editing of App.js
    1. Insert a Button
    2. Remove the "learn react"
5. First touchpoint with the grid system
    1. Inspect the page
    2. use the inspector in order to inspect the whole page
    3. Go inside the .App-header and change some properties:
        1. min-height
        2. display
    4. Use the inline styling
6. Create Folder structure
    1. Header --> Only the picture on the left side and a much smaller background
    
    ```javascript
    <div className="App" style={{ background: "grey", height:"5vh", display:"flex"}}>
        <img style={{}}src={logo} alt="logo" height={64} width={64}/>
    </div>
    ```
    1. Content -->
    ```javascript
    <div className="App" style={{background: "white", height:"92.5vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <a>Here is the Content</a>
    </div>
    ```
    1. Footer:
    ```javascript
    <div className="App" style={{background: "black", height:"2.5vh", display:"flex"}}>
        <a>Here is the Footer</a>
    </div>
    ```

7. Component library
    1. Open package.json
    2. open a new terminal
    3. https://react-bootstrap.github.io/getting-started/introduction
    4. `npm install react-bootstrap bootstrap`
    5. `import 'bootstrap/dist/css/bootstrap.min.css';` <--- In App.js

    6. now boostrap is in the package.json and in the node_modules
8. useState - Alert
    1. Go to components on the website and search for toast
    2. Look at it and explain useState:

    ```javascript
    import { Button, Toast } from "react-bootstrap";
    import { useState } from "react";


    const Content = () => {
    const [showA, setShowA] = useState(false);
        return (
        <div className="App" style={{background: "white", height:"92.5vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Button onClick={() =>setShowA(!showA)}>
                Alert!
            </Button>

            <Toast show={showA} onClose>
                <Toast.Header/>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>

        </div>
        );
    }

    export default Content;
    ```


9.  Functional Component
    1. Create a new component, which takes an array (object) and uses it to map cards based on the input

    ```javascript
    const FC_Card = (props) => {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.cards}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
    ```

    2. Now we want to create a map:

    ```javascript
    const FC_Card = (props) => {
        return (
            <div>
                {props.cards.map((el, i) => {
                    return (
                        <div  style={{padding:"8px"}}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                            <Card.Title>{el} - {i}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            </Card.Body>
                            </Card>
                        </div>
                    )
                })}

            </div>
        )
    }
    ```

    3. Use the FC with a property cards:

    ```javascript
    <FC_Card cards={["Tim", "Tom", "Cool"]} />
    ```

10. Create a form in order to create new cards
    1. For this, first create a new useState for the input and the array of inputs:

    ```javascript
    const [input, setInput] = useState("");
    const [cardArray, setCardArray] = useState([]);
    ```

    2. Now define a new function which will be triggered by the btn in order to show toast and push new item:

    ```javascript
        const submitBtn = () => {
        setShowA(!showA);
        // cardArray.push(cardTitle)
        setCardArray((cardArray) => [...cardArray, input]);
        setInput("");
        };
    ```

    1. Create an input field, which is used to fill the cards:

    ```javascript
        <input value={input} onInput={(e) => setInput(e.target.value)} />
    ```



11. Now the complete Content.js:

```javascript
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
```



12. UseEffect:
    1. When some attribute changes, you can trigger actions
    12. We Implement a logic where when the cardArray changes, we show the alert:

    ```javascript
    useEffect(() => {
        setTimeout(() => {
            setShowA(!showA);
        }, 1000);
    }, [cardArray]);
    ```

    3. Main problem is this gets triggered at the beginning - we want to conditionally render this:

    ```javascript
    // As the Use-Effect gets triggered initally, we need to implement a check
    useEffect(() => {
        if (cardArray.length > 0) {
            setTimeout(() => {
            setShowA(!showA);
            }, 1000);
        }
    }, [cardArray]);
    ```
