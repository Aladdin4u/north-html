import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" className="bg-[#202E48]">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="sr-only">open menu</SheetTitle>
          <SheetDescription className="sr-only">menu items</SheetDescription>
        </SheetHeader>
        <NavMenu orientation="vertical" />
      </SheetContent>
    </Sheet>
  );
};
