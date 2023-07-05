
export const ProductCard = ({ children }) => {
  return (
    <div className="flex flex-col" key={children[0]}>
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src={`http://localhost:8000/static/images/${children[4]}`} className="w-full h-48 object-cover" alt="Product" />
        <div className="mt-4">
          <h5 className="text-xl font-semibold">{children[1]}</h5>
          <p className="text-gray-600">Price: Rp{children[2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
          <span className="text-gray-600">{children[3]} in stock</span>
        </div>
      </div>
    </div>
  )
}