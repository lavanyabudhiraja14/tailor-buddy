export default function Orders() {
    return (
      <div>
        <h2>Your Orders</h2>
  
        <div className="order-card">
          <div>
            <p>Order #2345 Tailor: Sushma</p>
            <p>Outfit: Ethnic Wear</p>
            <p>Delivery: 18 March</p>
            <button>View Details</button>
          </div>
  
          <img src="/src/assets/suit.png" alt="dress" />
        </div>
      </div>
    );
  }