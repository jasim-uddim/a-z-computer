const Data = ({ info, i, update }) => {
  const { _id, name, quantity, minimumOrderQuantity, availableQuantity } = info;

  const handleUpdate = () => {
    if (update >= minimumOrderQuantity && update <= availableQuantity) {
      const neData = info;
      neData.quantity = update;
      fetch(`http://localhost:5001/orders/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(neData),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("updated your quantity");
          console.log(data);
        });
    }
  };

  return (
    <tr>
      <th>{i + 1}</th>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{minimumOrderQuantity}</td>
      <td>{availableQuantity}</td>
      <td>
        <button onClick={handleUpdate} className="btn btn-ghost">
          update
        </button>
      </td>
      <td>
        <button className="btn btn-ghost">delete</button>
      </td>
    </tr>
  );
};

export default Data;
