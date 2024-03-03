// src/components/VideoViewport.tsx
import React, { useState, useEffect } from 'react';

interface VideoViewportProps {
    src: string;
    muted?: boolean;
    loop?: boolean;
    width?: number;
    height?: number;
}

const VideoViewport: React.FC<VideoViewportProps> = ({ src, muted = true, loop = true, width = 640, height = 360 }) => {
    console.info("viewport rendered, ", src);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const video = document.getElementById('video') as HTMLVideoElement;

        const handleInViewChange = () => {
            if (video && video.paused) {
                video.play();
                setIsPlaying(true);
            } else if (video && !video.paused) {
                video.pause();
                setIsPlaying(false);
            }
        };

        document.addEventListener('scroll', handleInViewChange);

        return () => {
            document.removeEventListener('scroll', handleInViewChange);
        };
    }, []);

    return (
        <div className="container mx-auto p-4 flex justify-center">
            <div className="relative" style={{ width: 640, height: 480 }} onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
            <video
                id="video"
                src={src}
                autoPlay={false}
                muted={muted}
                loop={loop}
                width={width}
                height={height}
                controls={isHovered}
                className=" object-cover"
            />
            </div>
        </div>
    );
};

export default VideoViewport;
