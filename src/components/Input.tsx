import { useState } from 'react';

interface InputProps {
    onClick?: () => void;
    className?: string;
    title: string;
  }

const Input=({
    className = '',
    title,
  }: InputProps)=> {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className="flex gap-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          title={title}
          className={'w-4 h-4 text-blue-600 ${className}'}
        />
        <label className="text-sm font-medium text-gray-900 dark:text-gray-300">{isChecked ? title:""}</label>
        </div>
    </>
  );
}

export default Input;