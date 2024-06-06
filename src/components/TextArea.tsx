import React from "react";

type TextAreaProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="block w-full h-32 px-3 py-2 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
};

export default TextArea;
