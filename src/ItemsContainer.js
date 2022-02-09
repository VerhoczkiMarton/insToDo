import Item from './Item'
import { ListGroup } from 'react-bootstrap'

const ItemsContainer = ({ items, searchTerm, handleDelete, handleEdit }) => {
  const satisfiesSearch = (item) => {
    const filter = searchTerm.toLowerCase()
    return (
      item.title.toLowerCase().includes(filter) ||
      item.description.toLowerCase().includes(filter)
    )
  }

  return items.length === 0 ? (
    <p>No items yet :(</p>
  ) : (
    <div className='items-conatiner'>
      <h2>Todo Items</h2>
      <ListGroup as='ol'>
        {items
          .filter((item) => {
            return satisfiesSearch(item)
          })
          .map((item) => {
            return (
              <Item key={item.id} {...{ item, handleDelete, handleEdit }} />
            )
          })}
      </ListGroup>
    </div>
  )
}

export default ItemsContainer
