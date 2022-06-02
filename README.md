# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Tutorial

    1. Shell in admin
    	1. npm install -g create-react-app
    	1. npx create-react-app my-app
    1. Show the created folder strucuture
    	1. node_modules
    	1. public - shortly
    	1. package.json
    	1. src --> App.js
    1. Short "NPM SCRIPTS"
    	1. Start scripts
    	1. See the page
    1. First editing of App.js
    	1. Insert a Button
    	1. Remove the "learn react"
    1. First touchpoint with the grid system
    	1. Inspect the page
    	1. use the inspector in order to inspect the whole page
    	1. Go inside the .App-header and change some properties:
    		1. min-height
    		1. display
    	1. Use the inline styling
    1. Create Folder structure
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

    1. Component library
    	1. Open package.json
    	1. open a new terminal
    	1. https://react-bootstrap.github.io/getting-started/introduction
        ```
    	1. npm install react-bootstrap bootstrap
    	1. import 'bootstrap/dist/css/bootstrap.min.css';

    	1. now boostrap is in the package.json and in the node_modules
    1. useState - Alert
    	1. Go to components --> search for toast
    	1. Look at it and explain useState:

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


    1. Functional Component
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

    	1. Now we want to create a map:

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

    	1. Use the FC with a property cards:

        ```javascript

    	<FC_Card cards={["Tim", "Tom", "Cool"]} />
        ```

    1. Create a form in order to create new cards
    	1. For this, first create a new useState for the input and the array of inputs:

        ```javascript
    	  const [input, setInput] = useState("");
    	  const [cardArray, setCardArray] = useState([]);
          ```

    	1. Now define a new function which will be triggered by the btn in order to show toast and push new item:

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



    1. Now the complete Content.js:

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



    1. UseEffect:
    	1. When some attribute changes, you can trigger actions
    	1. We Implement a logic where when the cardArray changes, we show the alert:

        ```javascript
    	  useEffect(() => {
    	    setTimeout(() => {
    	      setShowA(!showA);
    	    }, 1000);
    	  }, [cardArray]);
          ```

    	1. Main problem is this gets triggered at the beginning - we want to conditionally render this:

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
