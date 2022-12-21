import FlexContainer from "./FlexContainer";




function App() {
    return(
        <>
        <FlexContainer 
        flexDirection='row' 
        justifyContent='center' 
        alignItems='stretch'
        backgroundColor='blue'
        >
            <div>Item1</div>
            <div>Item2</div>
            <div>Item3</div>
        </FlexContainer>
        
        <FlexContainer 
        flexDirection='row' 
        justifyContent='center' 
        alignItems='stretch'
        backgroundColor='yellow'
        >
            <div>Item1</div>
            <div>Item2</div>
            <div>Item3</div>
        </FlexContainer>
        </>
    )
}

export default App;