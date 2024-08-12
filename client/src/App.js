import './App.css';
import styled from 'styled-components';
import {lightTheme} from "./utils/Themes"
import {BrowserRouter, Routes, Route} from 'React-router-dom';
import Navbar from './component/Navbar';

const Container = styled.div`
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Container>
        <Navbar />
        9:00
      </Container>
      
      
      </BrowserRouter>

      Hello World!
    </div>
  );
}

export default App;
