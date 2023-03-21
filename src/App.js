import './App.css';

function App() {
  return (
    <div className="container bg-gray-900 w-screen h-screen ">
      <div className="wrapper">
        <h1 className="text-4xl text-indigo-100 mb-4">Login</h1>
        <input className="input" type="text" name="user" id="user" />
        <input
          className="input"
          type="password"
          name="password"
          id="password"
        />
        <button className="button">Hello</button>
      </div>
    </div>
  );
}

export default App;
