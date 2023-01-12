const Card = ({ card }) => {
    return (
      <tr className="table-light">
        <td className="table-light">{card.name}{' '}</td>
        <td className="table-light">{card.cardNumber}{' '}</td>
        <td className="table-light">£{card.balance}{' '}</td>
        <td className="table-light">£{card.limit}{' '}</td>
      </tr>
    )
  }
  
export default Card