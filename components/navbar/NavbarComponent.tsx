
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuList } from "./menu";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

type MenuType = {
    name: string;
    path: string;
    active: boolean;
};

export default function NavbarComponent() {
  const pathname = usePathname();
  const [menu , setMenu] = useState<MenuType[]>(MenuList)
  return (
    <Navbar fluid rounded >
      <NavbarBrand as={Link} href="https://flowbite-react.com">
            <img src="/logo.png" className="h-6 sm:h-9 text-white" alt="" />
            <span className="self-center whitespace-nowrap text-xl tracking-widest font-bold dark:text-white">Susu</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
              <Avatar alt="User settings" img="/profile.jpg" rounded stacked  />
          }
        >
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
            {menu.map((item, index) => (
					<NavbarLink
					key={index}
						as={Link}
						href={item.path}
						active={item.path === pathname}
					>
						{item.name}
					</NavbarLink>
			))}
	    </NavbarCollapse>
    </Navbar>
  );
}
