import Card from './Card'

const AllCards = ({ cards }) => {
  return (
    <div className='row align-items-start'>
      <h1>Existing Cards</h1>
      <table className='table-secondary table-striped'>
        <tr className="table-secondary">
          <th className="table-secondary">Name</th>
          <th className="table-secondary">Card Number</th>
          <th className="table-secondary">Balance</th>
          <th className="table-secondary">Limit</th>
        </tr>
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </table>
    </div> 
  )
}

export default AllCards