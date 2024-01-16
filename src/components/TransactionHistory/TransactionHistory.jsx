
export const TransactionHistory = ({ data }) => {
  return (
    <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {data.map(({type, amount, currency, id}) => {
        return <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    })}
  </tbody>
</table>
  );
};
