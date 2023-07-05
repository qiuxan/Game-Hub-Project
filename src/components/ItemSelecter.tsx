import { ChangeEvent } from "react";

interface Props {
  categories: string[];
  setShowingCategory: (showCategory: string) => void;
}
const ItemSelecter = ({ categories, setShowingCategory }: Props) => {
  //   console.log({ categories });

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    // console.log("Selected option:", selectedOption);
    setShowingCategory(selectedOption);
  };

  return (
    <div>
      <select className="form-select" onChange={handleOptionChange}>
        <option>All</option>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default ItemSelecter;
