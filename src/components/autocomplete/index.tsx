import React, {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useMemo,
  useState,
} from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

interface Props extends InputHTMLAttributes<any> {
  className?: string;
  data: any[];
}

const AutoComplete = ({ className, data, ...RestInputProps }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState<null | string>(null);

  const handleOnSelected = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: string,
    index: number
  ) => {
    event.preventDefault();
    setSelected(item);
    setIsOpen(false);
    setValue(item);
  };

  const contentData = useMemo(() => {
    return value
      ? data.filter((item) =>
          (item as string).toLowerCase().includes(value.toLowerCase())
        )
      : data;
  }, [value]);

  return (
    <div
      className={clsx(
        'relative border rounded-md h-[40px] w-[200px]',
        className
      )}
    >
      <div className="flex items-center justify-between w-full h-full px-2">
        <input
          onClick={() => setIsOpen(true)}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onBlur={() => setIsOpen(false)}
          className="flex-1 min-w-0 mr-2 focus:outline-none"
          {...RestInputProps}
        />
        <ChevronDown size={18} className="text-neutral-400" />
      </div>
      {isOpen && (
        <div className="absolute left-0 w-full max-h-60 bg-white top-[40px] shadow-md p-1 rounded-md overflow-y-scroll">
          {contentData.map((item, index) => (
            <div
              key={index}
              onMouseDown={(event) => handleOnSelected(event, item, index)}
              className={`px-4 py-2 cursor-pointer rounded-md ${
                item === selected ? 'bg-blue-200' : 'bg-white'
              } hover:bg-neutral-100 ${
                item === selected ? 'font-medium' : 'font-normal'
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
