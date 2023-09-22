import Container from "../components/container/container";
import Subtitle from "../components/forms/subtitle/subtitle";
import Nav from "../components/nav/Nav";
import "./App.css";

const App = () => {
  return (
    <div>
      <Nav />
      
      <Container>
        <Subtitle>promoções</Subtitle>
      </Container>
 
    </div>
  );
};

export default App;
