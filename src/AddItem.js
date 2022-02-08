import { useState } from "react"
import { Button, Form } from "react-bootstrap"

const AddToo = ({handleNewItem}) => {
  const [newItem, setNewItem] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
    handleNewItem(newItem)
    setNewItem({title: '', description: ''})
  }


  return(
    <div className='add-todo'>
      <h2>Add new item</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="new-todo-title">
        <Form.Text>
          Title
        </Form.Text>
          <Form.Control required onChange={ e => setNewItem({...newItem, title: e.target.value})} className='input-field' placeholder="My new todo title..." value={newItem.title}/>
        </Form.Group>
        <Form.Group controlId="new-todo-description">
        <Form.Text>
          Description
        </Form.Text>
          <Form.Control onChange={ e => setNewItem({...newItem, description: e.target.value})} as="textarea" rows={2} placeholder="My new todo description..." value={newItem.description}/>
        </Form.Group>
        <Button type="submit" className='submit-button'>Add new item</Button>
        <Form.Text className="text-muted">
          Your item will be added to your todo list
        </Form.Text>
      </Form>
    </div>
  )
}

export default AddToo