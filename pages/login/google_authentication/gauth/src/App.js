/* global google */

// import logo from "./logo.svg";
import { useEffect ,useState } from "react";
import "./App.css";

function App() {





  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token : " + response.credential);
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "445940879152-rhvkp5ckav4vgfjrbuav5mngk6apercq.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("siginInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className="App">
      <div id="siginInDiv"></div>
    </div>
  );
}

export default App;
