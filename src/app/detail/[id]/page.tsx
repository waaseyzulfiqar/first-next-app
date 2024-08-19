async function Detail({ params }:{params : {id: string}}) {

  const id = params.id
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  const product = await response.json()

  return ( <div className="min-h-screen flex justify-center items-center">
      <div className="flex justify-between items-center gap-16 w-[80%] bg-white p-14 shadow-md rounded-md">
        <div>

      <img src={product.image} alt="" className="w-96 h-auto"/>
        </div>

      <div className="flex flex-col justify-center items-start gap-6">
        <h2 className="text-2xl">{product.title}</h2>
        <p className="text-sm">{product.description}</p>
        <p className="underline">$ {product.price}</p>

        <button className="px-3 py-2 bg-black text-white text-sm rounded hover:bg-transparent hover:border-solid hover:border-black hover:text-black hover:border">Add to Cart</button>
      </div>

      </div>
    </div>
  );
}

export default Detail;