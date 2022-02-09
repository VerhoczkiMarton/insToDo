import { Button } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { FaTrashAlt, FaRegEdit } from 'react-icons/fa'

const Item = ({ item, handleDelete, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false)

  const DisplayItem = () => {
    return (
      <ListGroup.Item
        as='li'
        className='d-flex justify-content-between align-items-start'
      >
        <Button
          className='mb-2 item-button'
          id='toggle-check'
          type='checkbox'
          variant={item.done ? 'success' : 'outline-info'}
          onClick={() => handleEdit(item.id, { done: !item.done })}
        >
          ✓
        </Button>
        <div
          className='ms-2 me-auto'
          style={{ textDecoration: item.done ? 'line-through' : 'none' }}
        >
          <div className='fw-bold'>{item.title}</div>
          {item.description}
        </div>
        <Button
          disabled={item.done}
          className='item-button'
          variant='secondary'
          onClick={() => setIsEditing(true)}
        >
          <FaRegEdit />
        </Button>
        <Button
          className='item-button'
          variant='danger'
          onClick={() => handleDelete(item.id)}
        >
          <FaTrashAlt />
        </Button>
      </ListGroup.Item>
    )
  }

  const EditItem = () => {
    const [newContent, setNewContent] = useState(item)

    const handleSubmit = (e) => {
      e.preventDefault()
      handleEdit(item.id, {
        title: newContent.title,
        description: newContent.description,
      })
      setIsEditing(false)
    }

    return (
      <ListGroup.Item as='li'>
        <Form className='d-flex align-items-center' onSubmit={handleSubmit}>
          <Form.Group className='flex-grow-1' controlId='edit-todo-title'>
            <Form.Text className='text-muted'>Edit item Title</Form.Text>
            <Form.Control
              onChange={(e) =>
                setNewContent({ ...newContent, title: e.target.value })
              }
              value={newContent.title}
            />
          </Form.Group>
          <Form.Group className='flex-grow-1' controlId='edit-todo-description'>
            <Form.Text className='text-muted'>Edit item Description</Form.Text>
            <Form.Control
              onChange={(e) =>
                setNewContent({ ...newContent, description: e.target.value })
              }
              value={newContent.description}
            />
          </Form.Group>
          <Button className='flex-grow-1 update-button' type='submit'>
            Update
          </Button>
        </Form>
      </ListGroup.Item>
    )
  }

  return isEditing ? <EditItem /> : <DisplayItem />
}

export default Item
