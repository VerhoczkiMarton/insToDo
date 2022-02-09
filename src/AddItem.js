import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddToo = ({ handleNew }) => {
  const [newContent, setNewContent] = useState({ title: '', description: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    handleNew({ title: newContent.title, description: newContent.description })
    setNewContent({ title: '', description: '' })
  }

  return (
    <div className='add-todo'>
      <h2>Add new item</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='new-todo-title'>
          <Form.Text>Title</Form.Text>
          <Form.Control
            required
            onChange={(e) =>
              setNewContent({ ...newContent, title: e.target.value })
            }
            className='input-field'
            placeholder='My new todo title...'
            value={newContent.title}
          />
        </Form.Group>
        <Form.Group controlId='new-todo-description'>
          <Form.Text>Description</Form.Text>
          <Form.Control
            onChange={(e) =>
              setNewContent({ ...newContent, description: e.target.value })
            }
            as='textarea'
            rows={2}
            placeholder='My new todo description...'
            value={newContent.description}
          />
        </Form.Group>
        <Button type='submit' className='submit-button'>
          Add new item
        </Button>
        <Form.Text className='text-muted'>
          Your item will be added to your todo list
        </Form.Text>
      </Form>
    </div>
  )
}

export default AddToo
