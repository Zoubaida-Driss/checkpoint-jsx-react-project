import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import { FullName } from './Component/Profile/FullName';
import { Address } from './Component/Profile/Address';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

<div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
       
        <Card.Body>
           <ProfilePhoto></ProfilePhoto>
    <FullName></FullName>
    <Address></Address>
        </Card.Body>
      </Card>
      </div>
   
    </div>
  );
}

export default App;
