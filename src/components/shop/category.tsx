// components/CategoryFilter.tsx
interface CategoryFilterProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
  }
  
  const staticCategories = [
    "Sandwich",
    "Burger",
    "Dessert",
    "Drink",
    "Pizza",
    "Non Veg",
  ];
  
  const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
    return (
      <div>
        <h3 className="text-lg text-black mb-4">Category</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <input
              type="radio"
              id="All"
              name="category"
              checked={selectedCategory === "All"}
              onChange={() => onCategoryChange("All")}
              className="mr-2"
            />
            <label htmlFor="All" className="text-black">
              All
            </label>
          </div>
          {staticCategories.map((category) => (
            <div key={category} className="flex items-center">
              <input
                type="radio"
                id={category}
                name="category"
                checked={selectedCategory === category}
                onChange={() => onCategoryChange(category)}
                className="mr-2"
              />
              <label htmlFor={category} className="text-black">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CategoryFilter;
  