import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import Home from "./Components/Home";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  
  return (
    <div>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
