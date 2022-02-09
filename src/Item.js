import { Button } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import { useState } from "react";
import { Form } from "react-bootstrap";

const Item = ({item, handleDelete, handleEdit}) => {
  const [isEditing, setIsEditing] = useState(false);

  const DisplayItem = () => {
    return(
      <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
      >
  
        <Button
          className="mb-2 item-button"
          id="toggle-check"
          type="checkbox"
          variant={item.done ? 'success' : 'outline-info' }
          onClick={() => handleEdit(item.id, {done: !item.done})}
        >
          ✓
        </Button>
        <div className="ms-2 me-auto" style={{textDecoration: item.done ? 'line-through' : 'none'}}>
          <div className="fw-bold">{item.content.title}</div>
          {item.content.description}
        </div>
        <Button disabled={item.done} className='item-button' variant='secondary' onClick={() => setIsEditing(true)}>edit</Button>
        <Button className='item-button' variant='danger' onClick={() => handleDelete(item.id)}>delete</Button>
      </ListGroup.Item>
    )
  }

  const EditItem = () => {
    const [newTitle, setNewTitle] = useState(item.content.title);
    const [newDescription, setNewDescription] = useState(item.content.description);

    const handleSubmit = e => {
      e.preventDefault()
      handleEdit(item.id, {content: {title: newTitle, description: newDescription}})
      setIsEditing(false)
    }

    return(
      <ListGroup.Item
      as="li"
      >
      <Form className="d-flex align-items-center" onSubmit={handleSubmit}>
        <Form.Group className='flex-grow-1' controlId="edit-todo-title">
          <Form.Text className="text-muted">
            Edit item Title
          </Form.Text>
          <Form.Control onChange={ e => setNewTitle(e.target.value)} className='input-field' value={newTitle}/>
        </Form.Group>
        <Form.Group className='flex-grow-1' controlId="edit-todo-description">
          <Form.Text className="text-muted">
            Edit item Description
          </Form.Text>
          <Form.Control onChange={ e => setNewDescription(e.target.value)} value={newDescription}/>
        </Form.Group>
        <Button className='flex-grow-1 update-button' type="submit">Update</Button>
      </Form>
    </ListGroup.Item>
    )
  }
  return isEditing ? <EditItem /> : <DisplayItem />
}

export default Item