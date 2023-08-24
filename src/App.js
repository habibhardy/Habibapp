
import React from 'react'
import { Navbar, Nav, Container, Card } from 'react-bootstrap';

export const App = () => {
  return (
    <div className='App'  >


                  {/* Barre de navigation */}
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Mon Application</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Accueil</Nav.Link>
                <Nav.Link href="#link">Lien</Nav.Link>
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* En-tête */}
        <header className="App-header">
          <h1>En tête de l'application</h1>
        </header>

      
        <Container>
          <div className="card-container">
            <Card>
              <Card.Body>
                <Card.Title>Carte 1</Card.Title>
                <Card.Text>Contenu de la carte 1.</Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Carte 2</Card.Title>
                <Card.Text>Contenu de la carte 2.</Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Carte 3</Card.Title>
                <Card.Text>Contenu de la carte 3.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>


    </div>
  )
}

