
function App() {
    return(
        <>
        <button onClick={() => {window.close()}}>Close</button>
        <button onClick={() => {window.open('https://randomuser.me/documentation#pagination')}}>Open</button>
        </>
    )
}

export default App;