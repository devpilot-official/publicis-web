const Card = ({ card }) => {
    return (
      <tr>
        <td>{card.name}{' '}</td>
        <td>{card.cardNumber}{' '}</td>
        {
          card.balance > 0
          ? (<td>£{card.balance}{' '}</td>)
          : (<td className="text-danger">£{card.balance}{' '}</td>)
        }
        <td>£{card.limit}{' '}</td>
      </tr>
    )
  }
  
export default Card