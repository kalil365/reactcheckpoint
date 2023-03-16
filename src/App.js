import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
       <Form.Text  muted>
        Type your name
      </Form.Text>   
      
      <Form.Control
        type="text"
        placeholder="type your name"
        id="inputPassword"
        aria-describedby="Name input"
      />
      <Form.Text  muted>
        Type your last name
      </Form.Text>
      <Form.Control type="text" placeholder=
      "type your last name"  />
      <Form.Text  muted>
      Type your password
    </Form.Text>
    <Form.Control type="text" placeholder=
    "type password "  /><br/>
    <Button variant="info">Submit</Button>


    </div>
  );
}

export default App;
