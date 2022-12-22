import AlohaDashboard from "./AlohaDashboard/AlohaDashboard";
import UsersList from "./UsersList/UserList";
import CounterPage from "./Counter/CounterPage";
import Scene from "./Scene/Scene";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="aloha">Go to aloha</Link>
          </li>
          <li>
            <Link to="users">Go to users</Link>
          </li>
          <li>
            <Link to="counter">Go to counter</Link>
          </li>
          <li>
            <Link to="scene">Go to scene</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/aloha" element={<AlohaDashboard />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/scene" element={<Scene />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus
        tortor at fringilla egestas. Praesent vehicula maximus nisl at lobortis.
        Duis molestie, mi a gravida.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus
        tortor at fringilla egestas. Praesent vehicula maximus nisl at lobortis.
        Duis molestie, mi a gravida.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus
        tortor at fringilla egestas. Praesent vehicula maximus nisl at lobortis.
        Duis molestie, mi a gravida.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus
        tortor at fringilla egestas. Praesent vehicula maximus nisl at lobortis.
        Duis molestie, mi a gravida.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus
        tortor at fringilla egestas. Praesent vehicula maximus nisl at lobortis.
        Duis molestie, mi a gravida.
      </p>
    </>
  );
};

const NotFound = () => {
    return (
        <>
        <h1>404 PAGE NOT FOUND</h1>
        <p>Please, try again.</p>
        </>
    )
}
