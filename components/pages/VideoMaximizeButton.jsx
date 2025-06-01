import React, { useState } from 'react';
import { MdFullscreen } from 'react-icons/md';
import { VideoModal } from './HeroPage';

const VideoMaximizeButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8  dark:bg-gradient-to-r dark:from-[#005b94] dark:to-[#00AEEF] 
                         bg-gradient-to-r from-[#98f868] to-[#a8e063]  text-gray-800 dark:text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-[9998] flex items-center gap-2"
        style={{ backdropFilter: 'blur(4px)' }}
      >
        <MdFullscreen className="text-2xl" />
        <span className="font-medium">Watch Video</span>
      </button>

      <VideoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default VideoMaximizeButton; 