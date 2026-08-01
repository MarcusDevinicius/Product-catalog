import React from 'react'
import './CSS/style.css'

const Product = ({data}) => {
  const generalStyle = {
    fontFamily: 'Arial',
    color: '#3d0808'
  }

  return (
    <div style={generalStyle}>
        <h1>{data.nome}</h1>
        <p> R${data.preco}</p>
        <img className='img-product' src={data.fotos[0].src} alt={data.fotos[0].titulo} title={`Image of a ${data.nome} `}/>
    </div>
  )
}

export default Product;