import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import './index.scss'
const SearchBar = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`)

      setSearchTerm('');
    }
  }
  return (
    <Paper
        component='form'
        onSubmit={handleSubmit}
        sx={{
           borderRadius:20,
           border: '1px solid #e3e3e3',
           boxShadow: 'none',
           pl:2,
           mr:{ sm: 5},
          }}
    >
       <input 
         className="search-bar"
         placeholder="Search..."
         value={searchTerm}
         onChange={(evt) => setSearchTerm(evt.target.value)}
       />
       <IconButton 
            type="Submit"
            sx={{
              p:'10px',
              color: '#7B2CBF',
            }} 
       >
           <Search />
       </IconButton>
    </Paper>
  )
}

export default SearchBar
