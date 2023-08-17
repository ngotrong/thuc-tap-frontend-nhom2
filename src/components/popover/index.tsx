import React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';
import { ChevronDown } from 'lucide-react';

interface PopoverProps {
  text: string;
  Content: React.ReactNode;
}

function Popover({ text, Content }: PopoverProps) {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>
        <button className="flex items-center font-semibold">
          {text}
          <ChevronDown className="ml-[4px]" size={13} />
        </button>
      </RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content className="rounded bg-white shadow-md">
          {Content}
          <RadixPopover.Arrow className="fill-white" />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}

export default Popover;
