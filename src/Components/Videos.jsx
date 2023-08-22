import { Stack, Box } from "@mui/material"
import { PropTypes } from "prop-types"
import VideoCard from "./VideoCard"

const Videos = ({ videos, direction }) => {
  // console.log(videos);
  if (!videos ?.length) return 'Loading...'

  return (
    <Stack  direction = {direction || "row"}
    flexWrap = 'wrap'
    justifyContent = 'start'
    gap = {2} >
        {videos.map((item, idx) => (
            <Box key={idx} sx={{background:'red'}}>
                {item.id.videoId && <VideoCard video={item} />}
            </Box>
        ))}
    </Stack>
  )
}

Videos.propTypes = {
   videos: PropTypes.array,
   direction:PropTypes.string,
}

export default Videos
