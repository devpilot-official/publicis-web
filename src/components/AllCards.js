import Card from './Card'

const AllCards = ({ cards }) => {
  return (
    <div className='row align-items-start mt-5'>
      <h2>Existing Cards</h2>
      <table className='table table-striped table-bordered col-6'>
        <tr>
          <th>Name</th>
          <th>Card Number</th>
          <th>Balance</th>
          <th>Limit</th>
        </tr>
        { cards.map((card, index) => (<Card key={index} card={card} />)) }
      </table>
    </div> 
  )
}

export default AllCards