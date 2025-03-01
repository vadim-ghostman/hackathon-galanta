'use client';
import React from 'react';

const Checkbox = ({ label, checked, onCheckedChange }: { label: string, checked: boolean, onCheckedChange: (checked: boolean) => void }) => {
  return (
    <p
      onClick={() => onCheckedChange(!checked)}
      className={`px-5 py-2 border ${checked ? 'border-[var(--vista-blue)]' : ''} rounded-[10px] cursor-pointer w-min`}
    >
      {label}
    </p>
  );
}

export default Checkbox;
