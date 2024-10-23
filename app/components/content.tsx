'use client';
import { useState } from 'react';
import Sidebar from './sidebar'; // Import Sidebar

interface Video {
  id: number;
  Title: string;
  Description: DescriptionItem[];
  Link: string;
  Category: string;
}

interface DescriptionItem {
  text: string;
}

interface ContentProps {
  videos: Video[];
}

export default function Content({ videos }: ContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleDescriptions, setVisibleDescriptions] = useState<Set<number>>(new Set());

  const categories = Array.from(new Set(videos.map((video) => video.Category)));

  const toggleDescription = (id: number) => {
    setVisibleDescriptions((prev) => {
      const newVisible = new Set(prev);
      if (newVisible.has(id)) {
        newVisible.delete(id);
      } else {
        newVisible.add(id);
      }
      return newVisible;
    });
  };

  const filteredVideos = videos.filter((video) =>
    selectedCategory ? video.Category === selectedCategory : true
  );

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      
      <div className="container mx-auto p-4 flex-grow bg-white">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">Smart Care Learning Videos</h1>

        {filteredVideos.length === 0 ? (
          <div className="text-center text-gray-500">
            <p>No videos available in this category.</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-4">
            {filteredVideos.map((video) => {
              const isDescriptionVisible = visibleDescriptions.has(video.id);
              
              const truncatedDescription = isDescriptionVisible 
                ? video.Description.map(item => (
                    <p key={item.text} className="text-gray-600 mb-2">{item.text}</p>
                  ))
                : video.Description.slice(0, 2).map(item => (
                    <p key={item.text} className="text-gray-600 mb-2">{item.text}</p>
                  ));

              return (
                <div key={video.id} className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[23%]">
                  
                  <iframe
                    className="rounded-lg mt-4 w-full h-40 md:h-48"
                    src={video.Link}
                    frameBorder="0"
                    allowFullScreen
                  />
                  <h2 className="text-md font-medium text-gray-800 mb-4">
                    {video.Title}
                  </h2>
                  <div className="mb-4">
                    {truncatedDescription}
                    {!isDescriptionVisible && video.Description.length > 2 && (
                      <p className="text-gray-600 mb-2">...</p>
                    )}
                  </div>
                  <div className='flex justify-between'>
                    <button 
                      className="text-blue-500 hover:underline"
                      onClick={() => toggleDescription(video.id)}
                    >
                      {isDescriptionVisible ? 'Show Less' : 'Read More'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
