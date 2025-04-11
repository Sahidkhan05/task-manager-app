import { Routes , Route } from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage";
import TaskManager from "./Pages/TaskManagerPage";

import React from 'react'

const App = () => {
  return (
    
    <Routes>

        <Route path="/" element={< WelcomePage />} />
        <Route path="/task-manager" element = { < TaskManager />} />

    </Routes>
  )
}

export default App
