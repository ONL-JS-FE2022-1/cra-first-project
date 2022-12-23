import DataProvider from "./DataProvider";

function App() {
  return (
    <>
      <DataProvider
        loadData={() => {
          return fetch("./phones.json").then((response) => response.json());
        }}
      >
        {(state) => {
          const { data, isLoading, isError } = state;
          return (
            <>
              {isLoading && <div>Loading...</div>}
              {isError && <div>Error happening!</div>}
              <ul>
                {data.map((data, index) => (
                  <li key={index}>
                    {data.brand} - {data.model}. Price: {data.price}
                  </li>
                ))}
              </ul>
            </>
          );
        }}
      </DataProvider>

      <DataProvider
        loadData={() => {
          return fetch("./tv.json").then((response) => response.json());
        }}
      >
        {(state) => {
          const { data, isLoading, isError } = state;
          return (
            <>
              {isLoading && <div>Loading...</div>}
              {isError && <div>Error happening!</div>}
              <ul>
                {data.map((data, index) => (
                  <li key={index}>
                    АКЦІЯ!!! {data.brand} - {data.model}. Price: {data.price}
                  </li>
                ))}
              </ul>
            </>
          );
        }}
      </DataProvider>
    </>
  );
}

export default App;
