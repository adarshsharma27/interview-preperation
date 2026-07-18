// import "./styles.css";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  // ---- SIMPLE ENCRYPT & DECRYPT ----
  const encrypt = (text) => btoa(text);          // base64 encode
  const decrypt = (text) => atob(text);          // base64 decode
  // ---- Save cookie ----
  const saveCookie = () => {
    const data = JSON.stringify({
      name: user,
      checked: checkbox
    });

    document.cookie = "userdata=" + encrypt(data) + "; path=/";
  };

  return (
    <div className="App">
      <h1>Simple Cookie Encryption Demo</h1>

      <input
        type="text"
        placeholder="Enter User Name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <input
        type="checkbox"
        checked={checkbox}
        onChange={() => {
          const newVal = !checkbox;
          setCheckbox(newVal);
          saveCookie(); // save encrypted cookie
        }}
      />
    </div>
  );
}
