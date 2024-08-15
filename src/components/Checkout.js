function Checkout() {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="border p-2 w-full mb-4"
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-2 w-full mb-4"
          />
          <button className="bg-green-600 text-white py-2 px-4 rounded">
            Place Order
          </button>
        </form>
      </div>
    );
  }
  
  export default Checkout;
  