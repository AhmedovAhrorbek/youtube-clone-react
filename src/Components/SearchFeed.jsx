import { useState, useEffect } from 'react'
import { Box , Typography } from '@mui/material'
import Videos from './Videos'
import { fetchFromApi } from '../utils/fetchFromApi'
import { useParams } from 'react-router-dom'
import './index.scss'

const Feed = () => {
   const [videos, setVideos] = useState([]);
   const { searchTerm } = useParams();

   useEffect(()=>{
      fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => { setVideos(data.items) })
   },[searchTerm])

  return (
     <Box p={2} sx={{overflowY: 'auto', height:'90%', flex: 2,}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx ={{ color: 'white' }}>
           Search Results for:
           <span className='feed-title' style={{color:'#7B2CBF'}}>{searchTerm}</span> videos
        </Typography>
        
        <Videos videos={videos}/>
     </Box>
  )
}

export default Feed
