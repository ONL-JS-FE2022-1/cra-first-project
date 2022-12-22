function App() {
  return (
    <>
      <button
        onClick={() => {
          window.location.assign("https://www.npmjs.com/");
        }}
      >
        Assign
      </button>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload
      </button>
      <button
        onClick={() => {
          window.location.replace("https://developer.mozilla.org/ru/");
        }}
      >
        Replace
      </button>

      <p>lorem ipsum dolor sit amet</p>
      <button
        onClick={() => {
          window.navigator.clipboard.writeText("lorem ipsum dolor sit amet");
        }}
      >
        Click to copy text
      </button>

      <button onClick={() => {
        const text = window.navigator.clipboard.readText();
        console.log(text);
      }}>Read text from buffer</button>
    </>
  );
}

export default App;
