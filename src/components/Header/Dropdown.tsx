import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "../Buttons";
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
          className="p-2 transition-colors duration-300 border rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 border-white/10"
        >
          <FontAwesomeIcon icon={faBars} className="text-white" />
        </Button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-50 w-56 mt-2 origin-top-right border rounded-lg shadow-xl backdrop-blur-md bg-white/10 border-white/20"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="block w-full px-4 py-3 text-sm text-left text-white transition-colors duration-300 hover:bg-white/10 focus:bg-white/20 first:rounded-t-lg last:rounded-b-lg"
                role="menuitem"
                smooth={true}
                duration={500}
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
