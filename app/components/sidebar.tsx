interface SidebarProps {
  categories: string[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="w-64 bg-white-800 text-black p-4">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        <li
          className={`cursor-pointer p-2 rounded-lg hover:bg-gray-300 ${
            selectedCategory === null ? 'bg-gray-300' : ''
          }`}
          onClick={() => setSelectedCategory(null)}
        >
          All Videos
        </li>
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer p-2 rounded-lg hover:bg-gray-300 ${
              selectedCategory === category ? 'bg-gray-300' : ''
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
