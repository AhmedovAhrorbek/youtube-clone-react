import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'
import logoYoutube from '../assets/site-logo.svg'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack  direction = "row"
            alignItems = "center"
            pl = {3}
            pr = {3}
            pt = {3}
            pb={5}
            sx = {{
            position: 'sticky',
            background: '#000',
            top: 0,
            justifyContent: 'space-between'
          }} >
        <Link to='/' style={{display:'flex', alignItems:'center',}}>
            <img src={logoYoutube} alt="logo" height={45} />
        </Link>
        <SearchBar />
    </Stack>
  )
}

export default Navbar
