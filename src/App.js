import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DataContextProvider from './Context/DataContext';
//PAGES
import LeftBar from './components/LeftSide/LeftBar';
import RightSideMain from './components/RightSide/RightSideMain';



function App() {
  return (
    <Router>
      <DataContextProvider>
        <div className="App">
          <LeftBar />
          <RightSideMain />
        </div>
      </DataContextProvider>
    </Router>
  );
}

export default App;
