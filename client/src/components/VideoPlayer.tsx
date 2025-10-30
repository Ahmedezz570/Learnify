"use client"

import React from "react"

interface VideoPlayerProps {
  src: string
  title?: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title }) => {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
      <video
        src={src}
        controls
        className="w-full h-auto"
        poster="/poster.png"
      />
      {title && <h2 className="text-center mt-3 font-semibold">{title}</h2>}
    </div>
  )
}

export default VideoPlayer
