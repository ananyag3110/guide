import { useState } from 'react';

interface SidebarProps {
  categories: string[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const Sidebar = ({ categories, selectedCategory, setSelectedCategory }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility on mobile

  // Toggle sidebar visibility on mobile
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Hamburger Icon on Small Screens */}
      <div className="md:hidden flex justify-between p-4 bg-gray-800 text-white">
        <button onClick={toggleSidebar}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } inset-0 bg-gray-800 bg-opacity-75 md:block md:w-64 md:bg-gray-800 md:h-full p-4`}
      >
        <h2 className="text-white text-2xl font-semibold mb-6">Categories</h2>
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className={`text-white p-2 cursor-pointer hover:bg-gray-700 rounded-lg ${
                selectedCategory === category ? 'bg-gray-700' : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
