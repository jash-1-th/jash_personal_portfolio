import { useEffect ,useState } from "react";
import jwt_decode from "jwt-decode";

import "./App.css";

function App() {

  const { user, setUser } = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token : " + response.credential);
    var userObject=jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden=true;
  
  }

  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */

    google.accounts.id.initialize({
      client_id:
        "445940879152-rhvkp5ckav4vgfjrbuav5mngk6apercq.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("siginInDiv"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt(); // a simple prompt to have one tap login  or pervious list of logged in accounts.

  }, []);

  //if we have no user then signin 
  //if user the logout button




  return (
    <div className="App">
      <div id="siginInDiv"></div>
      {Object.keys(user).length != 0 && 
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
      }

      {user && (
        <div>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
