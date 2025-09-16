import React from "react";

interface RegulardropdownProps {
  options: string[];
  label?: string;
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
}

const Regulardropdown: React.FC<RegulardropdownProps> = ({
  options,
  label,
  onChange,
  value,
  className = "",
}) => {
  return (
    <div className={`dropdown inline-flex items-center space-x-3 ${className}`}>
      {label && (
        <label
          htmlFor="regular-dropdown"
          className="whitespace-nowrap text-gray-700 font-medium"
        >
          {label}
        </label>
      )}
      <select
        id="regular-dropdown"
        className="min-w-[160px] px-3 py-1 border border-gray-300 rounded-md shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                   text-gray-900"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      >


        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Regulardropdown;
