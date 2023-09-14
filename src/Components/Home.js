import React from "react";
import { useUserAuth } from "../Context/UserAuthContext";
import Button from "react-bootstrap/Button";

function Home() {
  let { user , logOut } = useUserAuth();
  const handleLogOut = async() => {
    try{
      await logOut()
    }catch(err)
    {
      
    }
  }
  return (
    <div className="text-center">
      <div>Welcome to blog website {user.email}</div>
      <Button type="submit" variant="outline-primary" onClick={handleLogOut}>
       Logout
      </Button>
    </div>
  );
}

export default Home;
