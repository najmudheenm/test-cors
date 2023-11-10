import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import fetchWithTimeout from "fetch-timeout";

function App() {
  const test = async () => {
    const resource = "https://api.ipify.org?format=json";

    const responseData = await fetchWithTimeout(
      "https://api.ipify.org?format=json",
      {
        method: "get",
      }
    )
      .then((response: Response) => {
        if (response.status === 200) {
          console.info("IP address captured");
          return response.json();
        } else {
          console.warn("Could not capture IP address");
          throw response.status;
        }
      })
      .catch(() => {
        return { ip: null };
      });
    console.log(responseData);
  };
  useEffect(() => {
    test();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
