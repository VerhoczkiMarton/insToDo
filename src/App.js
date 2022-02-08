import { useState } from 'react';
import ItemsContainer from './ItemsContainer';
import AddItem from './AddItem';

function App() {

  const [items, setItems] = useState([])
  
  const handleNewItem = ({title, description}) => {
    const id = getNextId()
    setItems([...items, {id:{id}, done:false, content:{title: title, description: title}}])
  }

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const handleEdit = (id, changedFields) => {
    console.log(changedFields)
    const newItems = items.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          ...changedFields
        };
        console.log(updatedItem)
        return updatedItem;
      }
      return item;
    });

    setItems(newItems);
  }

  const getNextId = () => {
    Math.max(items.map(item => item.id || 0))
  }
  
  return (
    <>
      <h1>InsToDo</h1>
      <ItemsContainer {...{items, handleDelete, handleEdit}}/>
      <AddItem handleNewItem={handleNewItem}/>
    </>
  );
}

export default App;
