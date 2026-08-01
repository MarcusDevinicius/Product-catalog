import React from 'react'
import Product from './Product'

function App() {

  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function handleClick(event) {
    setLoading(true);
    const product = event.target.innerText;
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  return (
    <>
      <button onClick={handleClick}>Tablet</button>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Notebook</button>
      {loading && <p>Loading...</p>}
      {!loading && data && <Product data={data}/>}
    </>
  )
}

export default App
