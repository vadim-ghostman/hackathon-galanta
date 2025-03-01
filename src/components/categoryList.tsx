import Checkbox from '@/components/checkbox';

export interface CategoryListDict { [key: string]: boolean; }

interface CategoryListProps {
  categoryList: CategoryListDict;
  setCategoryList: (arg: CategoryListDict) => void;
}

const CategoryList = ({ categoryList, setCategoryList }: CategoryListProps) => {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-2xl font-bold'>Vyberte kategorie</h1>
      <div className='flex gap-2 w-full flex-wrap'>
        {Object.keys(categoryList).map((category, idx) => (         
          <Checkbox
            key={idx}
            label={category}
            checked={Object.values(categoryList)[idx]}
            onCheckedChange={(checked: boolean) => setCategoryList({ ...categoryList, [category]: checked } as CategoryListDict)}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;