import { useState } from "react";
import Link from "next/link";
import { HeaderType } from "@/app/types/menu";
import { Icon } from "@iconify/react";

const MobileHeaderLink: React.FC<{ item: HeaderType; closeNavbar: () => void }> = ({ item, closeNavbar }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    if (item.submenu) {
      e.preventDefault();
      setSubmenuOpen(!submenuOpen);
    } else {
      closeNavbar();
    }
  };

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={handleToggle}
        className="flex items-center justify-between w-full py-3 text-lg font-semibold text-black hover:text-primary border-b border-gray-100"
      >
        {item.label}
        {item.submenu && (
          <Icon
            icon={submenuOpen ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"}
            width={24}
            className="text-gray-400"
          />
        )}
      </Link>
      {submenuOpen && item.submenu && (
        <div className="bg-gray-50/50 w-full flex flex-col pl-4">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              onClick={closeNavbar}
              className="block py-3 text-base font-medium text-gray-600 hover:text-primary transition-colors"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
