import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "./Buttons/Button";
import { Link } from "react-scroll";

interface DropdownProps {
  items: { text: string; href: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <div>
        <Button
          type="button"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-50 w-56 mt-2 origin-top-right bg-gray-100 rounded-md shadow-lg dark:bg-gray-900 ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="block w-full px-4 py-2 text-sm text-left text-blue-500 hover:text-purple-600 focus:bg-purple-200"
                role="menuitem"
                onClick={toggleDropdown}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
