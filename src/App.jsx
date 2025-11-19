import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Content from './components/content';
import Header from './components/header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Read from './components/read';
import Create from './components/create';
import Edit from './components/edit';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Navbar Component: This is a navigation bar with links to different routes */}
    <BrowserRouter>
  <Navbar bg="light" data-bs-theme="light">
        <Container>
          {/* Navbar brand, this is typically the logo or title */}
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
           {/* Navigation links */}
          <Nav className="me-auto">
            {/* Link to the home page */}
            <Nav.Link href="/">Home</Nav.Link>
            {/* Link to the read page */}
            <Nav.Link href="/read">read</Nav.Link>
            {/* Link to the create page */}
            <Nav.Link href="/create">create</Nav.Link>
          </Nav>
        </Container>
        
      </Navbar>
      
  {/* Routes component handles the routing for different paths */}
        <Routes>
          {/* Route for the home page, rendering the Content component */}
          <Route path='/' element={<Content></Content>}></Route>
          {/* Route for the read page, rendering the Header component */}
          <Route path='/read' element={<Read/>}></Route>
          {/* Route for the create page, rendering the Footer component */}
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>


      </BrowserRouter>
      </>
  )
}

export default App
