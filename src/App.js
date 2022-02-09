import { useState } from 'react';
import ItemsContainer from './ItemsContainer';
import AddItem from './AddItem';

function App() {
  const [items, setItems] = useState([])
  
  const handleNewItem = ({title, description}) => {
    //Ideally id would come from backend, Im generating a random number for a new ID
    let id = Math.floor(Math.random() * 1000);
    setItems([...items, {id:id, done:false, content:{title: title, description: title}}])
  }

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const handleEdit = (id, changedFields) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          ...changedFields
        };
        return updatedItem
      }
      return item
    });

    setItems(newItems);
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
