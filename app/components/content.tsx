'use client'
import { useState } from 'react';
import Sidebar from './sidebar'; // Import Sidebar

interface Video {
  id: number;
  Title: string;
  Description: string;
  Link: string;
  Category: string;
}

interface ContentProps {
  videos: Video[];
}

export default function Content({ videos }: ContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories from videos
  const categories = Array.from(new Set(videos.map((video) => video.Category)));

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
            .map((video) => (
              <div key={video.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{video.Title}</h2>
                <p className="text-gray-600 mb-4">{video.Description}</p>
                <iframe
                  className="w-full h-64 rounded-lg"
                  src={video.Link}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
