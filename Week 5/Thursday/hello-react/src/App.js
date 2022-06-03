import Footer from "./Footer";

function greet(personName) {
  return { name: `Hello ${personName}` };
}

function App() {
  const message1 = "Hey you";
  const message2 = "Whats going on";
  return (
    <>
      <>
        <h1>{message1}</h1>
        <p>{message2 + "??"}</p>
      </>

      <>
        <h1>{greet("John").name}</h1>
        <h2>How are you?</h2>
        <h2>Today is a sunny rainy day</h2>
      </>

      <>
        <p>This is some HTML before the footer</p>
        <Footer></Footer>
      </>
    </>
  );
}

export default App;
