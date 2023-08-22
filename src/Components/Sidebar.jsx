import { Stack } from "@mui/material"
import { categories } from '../utils/constants'
import { PropTypes } from "prop-types"
import './index.scss'

// const selectedCategory = 'New';
const Sidebar = ( { selectedCategory, setSelectedCategory } ) => {


  return (
    <Stack direction = 'row'
          sx = {{ overflowY: 'auto',
                
                  height : { sx: 'auto' , md: '95%'},
                  flexDirection:{ md: 'column'}
        }}
          >
        {categories.map((category) => (
           <button  className = "category-btns "
            onClick={()=>setSelectedCategory(category.name)}
           style={{
                
                background: category.name === selectedCategory && "#7B2CBF", color: 'white'
            }}
           key = {
               category.name
           } >
                 <span className="category-btns-icon" style={{ color: category.name === selectedCategory ? 'white' : '#7B2CBF',  }}>{category.icon}</span>
                 <span>{category.name}</span>
           </button>
        ))}
    </Stack>
  )
}

Sidebar.propTypes = {
  selectedCategory: PropTypes.string,
  setSelectedCategory:PropTypes.func,
};

export default Sidebar
