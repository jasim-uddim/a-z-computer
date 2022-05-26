const Data = ({ order, index, updateOrder }) => {
  const { name, quantity, minimumOrderQuantity, availableQuantity } = order;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{minimumOrderQuantity}</td>
      <td>{availableQuantity}</td>
      <td>
        <button
          onClick={() => updateOrder(order, order._id)}
          className="btn btn-ghost"
        >
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
