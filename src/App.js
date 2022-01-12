import { useState } from "react";
import DynamicForm from "./components/DynamicForm/DynamicForm";

function App() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  return (
    <div className="App">
      <h1>App</h1>
      <DynamicForm/>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>What is your Name?</label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="John Doe"
            value={formState.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>What is your Email?</label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="test@test.com"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>What is your Phone Number?</label>
          <input
            type="tel"
            name="phone"
            id=""
            placeholder="+8801863934966"
            value={formState.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
}

export default App;
