import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import  Videos  from './Videos'
import { fetchFromApi } from '../utils/fetchFromApi'

const VideoDetail = () => {
  const { id } = useParams()
  const [videoDetail, setVideoDetail] = useState(null)
  const [videosRelated, setVideosRelated] = useState(null)

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromApi(`search?part=snippet&tagsToVideoId=${id}&type=video`)
      .then((data) => setVideosRelated(data.items))
  }, [id])

  if (!videoDetail?.snippet) return 'Loading...'

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount,commentCount } } = videoDetail

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className="react-player"
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: `#fff` }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#fff'>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
             
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(commentCount).toLocaleString()} comments
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} sx={{height:'95vh', overflowY:'auto'}} justifyContent="center" alignItems="center">
          <Videos videos={videosRelated} direction="column" />
        </Box>
      </Stack>


    </Box>
  )
}

export default VideoDetail
