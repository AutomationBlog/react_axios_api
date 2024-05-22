import { Routes, Route } from "react-router-dom";
import Menu from "./components/menu.jsx";
import Form from "./components/form.jsx";
import Details from "./components/details.jsx";
import { UserContextProvider } from "./components/context/usercontext";

function App() {
  return (
    <div className="App">
      <Menu />
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
