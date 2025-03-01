import Checkbox from '@/components/checkbox';

interface FilterListDict { [key: string]: boolean; }

interface FilterListProps {
  filterList: FilterListDict;
  setFilterList: (arg: FilterListDict) => void;
}

const FilterList = ({ filterList, setFilterList }: FilterListProps) => {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-2xl font-bold'>Filter</h1>
      <div className='flex gap-2 w-full flex-wrap'>
        {Object.keys(filterList).map((filter, idx) => (         
          <Checkbox
            key={idx}
            label={filter}
            checked={Object.values(filterList)[idx]}
            onCheckedChange={(checked: boolean) => setFilterList({ ...filterList, [filter]: checked } as FilterListDict)}
          />
        ))}
      </div>
    </div>
  );
}

export default FilterList;