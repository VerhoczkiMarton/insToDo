import { InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'

const Search = ({ onSearchTermChange }) => {
  return (
    <InputGroup className='mb-3'>
      <InputGroup.Text id='basic-addon1'>
        <FaSearch />
      </InputGroup.Text>
      <FormControl
        placeholder='Search...'
        aria-label='search'
        aria-describedby='basic-addon1'
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
    </InputGroup>
  )
}

export default Search
