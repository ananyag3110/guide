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
  text: string; // Structure of each description item
}

interface ContentProps {
  videos: Video[];
}

export default function Content({ videos }: ContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleDescriptions, setVisibleDescriptions] = useState<Set<number>>(new Set());
  const [visibleTitles, setVisibleTitles] = useState<Set<number>>(new Set());

  // Extract unique categories from videos
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

  const toggleTitle = (id: number) => {
    setVisibleTitles((prev) => {
      const newVisible = new Set(prev);
      if (newVisible.has(id)) {
        newVisible.delete(id);
      } else {
        newVisible.add(id);
      }
      return newVisible;
    });
  };

  return (
    <div className="flex">
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      
      <div className="container mx-auto p-4 flex-grow">
        <h1 className="text-4xl font-bold text-center mb-8">Smart Care Learning Videos</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {videos
            .filter((video) => (selectedCategory ? video.Category === selectedCategory : true))
            .map((video) => {
              const isDescriptionVisible = visibleDescriptions.has(video.id);
              const isTitleVisible = visibleTitles.has(video.id);
              
              const truncatedDescription = isDescriptionVisible 
                ? video.Description.map(item => (
                    <p key={item.text} className="text-gray-600 mb-2">{item.text}</p>
                  ))
                : video.Description.slice(0, 2).map(item => (
                    <p key={item.text} className="text-gray-600 mb-2">{item.text}</p>
                  ));

              const truncatedTitle = isTitleVisible ? video.Title : `${video.Title.substring(0, 20)}...`;

              return (
                <div key={video.id} className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {truncatedTitle}
                    <button 
                      className="text-blue-500 font-normal text-lg hover:underline ml-2"
                      onClick={() => toggleTitle(video.id)}
                    >
                      {isTitleVisible ? 'Show Less' : 'Read More'}
                    </button>
                  </h2>
                  <iframe
                    className="w-full h-64 rounded-lg mt-4"
                    src={video.Link}
                    frameBorder="0"
                    allowFullScreen
                  />
                  <div className="mb-4">
                    {truncatedDescription}
                    {!isDescriptionVisible && video.Description.length > 2 && (
                      <p className="text-gray-600 mb-2">...</p>
                    )}
                  </div>
                  <button 
                    className="text-blue-500 hover:underline"
                    onClick={() => toggleDescription(video.id)}
                  >
                    {isDescriptionVisible ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
