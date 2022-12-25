import React, {useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './components/main/Dashboard';
import AddTask from './components/addTask/AddTask';
import './App.css';
import EditTask from './components/editTask/EditTask';
import ButtonTheme from './components/button/Button';

// For changing background theme and passing down props to different components
export const ThemeContext = createContext(null);

export default function App() {

  const [theme, setTheme] = useState("carbon");

  const changeTheme = () => {
    setTheme((prev) => (prev === "carbon" ? "space" : "carbon"))
  }

  return (
    
    <ThemeContext.Provider className='container' value={{theme, changeTheme}}>
    
    <div id={theme}>
    <div>
    <ButtonTheme changeTheme={changeTheme} theme={theme}/>
    </div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/addTask" element={<AddTask/>}/>
          <Route path="/editTask/:id" element={<EditTask/>}/>
        </Routes>
      </Router>
    </div>
    </ThemeContext.Provider>    
  )
}


