function App(props) {
  const currDate = new Date();

  return (
    <div>
      <a href="../../../../index.html"><button>Home</button></a>
      <h1>Zachery Thompson</h1>
      <h2>{currDate.toLocaleTimeString()}</h2>
      <h3>{currDate.toLocaleDateString()}</h3>
    </div>
  );
}

export default App;