import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Investor",
    href: "#",
  },
  {
    title: "Product",
    href: "#",
  },
  {
    title: "Roadmap",
    href: "#",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Support",
    href: "#",
  },
];
export const NavMenu = (props: NavigationMenuProps) => {
  const currentPath = usePathname();

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        {links.map((link) => (
          <NavigationMenuItem key={link.title}>
            <NavigationMenuLink asChild>
              <Link
                href={link.href}
                className={
                  currentPath === link.href
                    ? "border-b-2 border-blue-600 rounded-b-none"
                    : ""
                }
              >
                {link.title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
