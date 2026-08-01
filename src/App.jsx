import React from 'react'
import Product from './Product'
import './CSS/style.css'

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
      <button className='btnProduct' onClick={handleClick}>Tablet</button>
      <button className='btnProduct' onClick={handleClick}>Smartphone</button>
      <button className='btnProduct' onClick={handleClick}>Notebook</button>
      {loading && <p style={{fontFamily: 'Arial', fontSize: '25px', color: '#3d0808'}}>Loading...</p>}
      {!loading && data && <Product data={data}/>}
    </>
  )
}

export default App
