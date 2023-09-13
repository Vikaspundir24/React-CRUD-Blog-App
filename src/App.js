import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
