import React, { InputHTMLAttributes, useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { useRouter } from "next/router";
import slugify from "slugify"; // Import the slugify library

interface Props extends InputHTMLAttributes<any> {
  className?: string;
  data: any[];
  placeholder: string;
}

const AutoComplete = ({ className, data, placeholder, ...RestInputProps }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState<null | string>(null);
  const router = useRouter();

  const handleOnSelected = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: string,
    index: number
  ) => {
    event.preventDefault();
    setSelected(item);
    setIsOpen(false);
    setValue(item);
    const slug = slugify(item, { lower: true }); // Create a slug from the item name
    router.push(`/genre/${slug}`); // Redirect to genre page with slug
  };

  return (
    <div className={clsx("relative border rounded-md h-[40px] w-[200px]", className)}>
      <div className="flex items-center justify-between w-full h-full px-2">
        <input
          onClick={() => setIsOpen(true)}
          value={value ? data[Number(value) - 1]?.name : value}
          onChange={(event) => setValue(event.target.value)}
          onBlur={() => setIsOpen(false)}
          className="flex-1 min-w-0 mr-2 focus:outline-none"
          placeholder={placeholder}
          {...RestInputProps}
        />
        <ChevronDown size={18} className="text-neutral-400" />
      </div>
      {isOpen && (
        <div className="absolute left-0 w-full max-h-60 bg-white top-[40px] shadow-md p-1 rounded-md overflow-y-scroll z-40">
          {data?.map((item, index) => (
            <div
              key={item.id}
              onMouseDown={(event) => handleOnSelected(event, item.name, index)}
              className={`px-4 py-2 cursor-pointer rounded-md ${
                item.name === selected ? "bg-blue-200" : "bg-white"
              } hover:bg-neutral-100 ${
                item.name === selected ? "font-medium" : "font-normal"
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
