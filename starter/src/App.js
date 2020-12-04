import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Jumbotron } from 'reactstrap';

function App() {
  return (
    <Container>
      <Jumbotron>
        <h1 className="display-4">Hello, Reactstrap!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <Button color="primary">Learn more</Button>
      </Jumbotron>
    </Container>
  );
}

export default App;
