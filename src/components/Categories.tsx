
type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
}


export default function Categories({categories, selected, onClick}: Props) {
  return (
    <section className='flex items-center mb-10 px-4 py-4 bg-white dark:bg-darkSecond rounded-md'> 
      <h2 className='font-medium mr-10'>Category</h2>
      <ul className='flex'>
        {categories.map((category) => (
          <li
          className={`${
            category === selected
              ? 'bg-blue-500 text-white dark:bg-blue-700'
              : 'bg-[#f2f2f2] dark:bg-[#484848]'
          } text-sm font-medium mr-2 px-3 py-1 rounded-md cursor-pointer dark:hover:bg-blue-700 hover:bg-blue-600 hover:text-white`}          
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section> 
  );
}

