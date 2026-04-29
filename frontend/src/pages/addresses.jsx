import { useState } from "react";
import "./account.css";

export default function Addresses() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      text: "Bennett University, Greater Noida, 201310",
    },
  ]);

  const [selectedId, setSelectedId] = useState(1);
  const [newAddress, setNewAddress] = useState("");

  // ADD ADDRESS
  const handleAdd = () => {
    if (!newAddress.trim()) return;

    const newObj = {
      id: Date.now(),
      text: newAddress,
    };

    setAddresses([...addresses, newObj]);
    setNewAddress("");
  };

  // DELETE ADDRESS
  const handleDelete = (id) => {
    const updated = addresses.filter((addr) => addr.id !== id);
    setAddresses(updated);

    // if deleted one was selected → reset selection
    if (selectedId === id && updated.length > 0) {
      setSelectedId(updated[0].id);
    }
  };

  return (
    <div className="address-container">

      {addresses.map((addr) => (
        <div
          key={addr.id}
          className={`address-card ${
            selectedId === addr.id ? "selected" : ""
          }`}
          onClick={() => setSelectedId(addr.id)}
        >

          {/* ❌ DELETE BUTTON */}
          <span
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation(); // 🔥 prevent selecting card
              handleDelete(addr.id);
            }}
          >
            ✕
          </span>

          <h3>Address</h3>
          <p>{addr.text}</p>
        </div>
      ))}

      {/* ADD NEW */}
      <div className="add-box">
        <input
          placeholder="Enter new address"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

    </div>
  );
}