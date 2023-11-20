import './App.css'
import Hours from './components/Hours/Hours'
import Nav from './components/Menu/Nav'
import Form from './components/Form/Form'
import EditIngredients from './components/EditIngredients/EditIngredients'
import Login from './components/Login/Login'
import Home from './pages/Home/Home'
import { useState } from 'react'

function App() {
  const [form, setForm] = useState(false);
  const [home, setHome] = useState(false);
  const [hours, setHours] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <section style={{ display: "grid", gap: "2em"}}>
      <Nav />
      <button onClick={() => setLogin(!login)}>{login ? "Hide" : "Show"} Login</button>
      {login ? <Login /> : "" }
      <Login />
      <button onClick={() => setHours(!hours)}>{hours ? "Hide" : "Show"} Hours</button>
      {hours ? <Hours /> : "" }

      <button onClick={() => setForm(!form)}>{form ? "Hide" : "Show"} Form</button>
      {form ? <Form /> : "" }

      <button onClick={() => setHome(!home)}>{home ? "Hide" : "Show"} Home</button>
      {home ? <Home /> : "" }

    </section>
  )
}

export default App
