import Item from "./Item"
import { ListGroup } from "react-bootstrap"


const ItemsContainer = ({items, handleDelete, handleEdit}) => {
  return(
    items.length === 0 ? (
        <p>No items yet :(</p>
    ) : (
      <div className='items-conatiner'>
        <h2>Todo Items</h2>
        <ListGroup as="ol">
          {items.map(item=> <Item {...{item, handleDelete, handleEdit}}/>)}
        </ListGroup>
      </div> 
    )
  )
}

export default ItemsContainer