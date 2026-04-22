import { useState } from "react";
import Link from "next/link";
import { HeaderType } from "@/app/types/menu";
import { Icon } from "@iconify/react";

const MobileHeaderLink: React.FC<{ item: HeaderType; closeNavbar: () => void }> = ({ item, closeNavbar }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);



  return (
    <div className="relative w-full border-b border-gray-100">
      <div className="flex items-center justify-between w-full">
        <Link
          href={item.href}
          onClick={() => closeNavbar()}
          className="flex-grow py-3 text-[16px] font-medium text-black hover:text-primary"
        >
          {item.label}
        </Link>
        {item.submenu && (
          <button
            onClick={() => setSubmenuOpen(!submenuOpen)}
            className="p-3 -mr-3 text-gray-400 hover:text-primary transition-colors focus:outline-none"
          >
            <Icon
              icon={submenuOpen ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"}
              width={24}
            />
          </button>
        )}
      </div>
      {submenuOpen && item.submenu && (
        <div className="bg-gray-50/50 w-full flex flex-col pl-4">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              onClick={closeNavbar}
              className="block py-3 text-[16px] font-medium text-gray-600 hover:text-primary transition-colors"
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
