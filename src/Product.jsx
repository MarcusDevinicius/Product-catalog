import React from 'react'

const Product = ({data}) => {
  return (
    <div>
        <h1>{data.nome}</h1>
        <p> R${data.preco}</p>
        <img src={data.fotos[0].src} alt={data.fotos[0].titulo} title={`Image of a ${data.nome} `}/>
    </div>
  )
}

export default Product;