import ytdl from "ytdl-core"
import fs from "fs"

export const download = (videoId) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoId

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
  .on('info', (info) => {
    
  })
}
