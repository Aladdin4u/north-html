import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Logo } from "../logo";

const footerSections = [
  {
    title: "Product",
    links: [
      {
        title: "NSG Money",
        href: "#",
      },
      {
        title: "Mobile App",
        href: "#",
      },
      {
        title: "NSG Card",
        href: "#",
      },
      {
        title: "Hardware Device",
        href: "#",
      },
      {
        title: "Pricing",
        href: "#",
      },
      {
        title: "NSG Mint",
        href: "#",
      },
      {
        title: "NSG Exchange",
        href: "#",
      },
      {
        title: "EPD",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Fees",
        href: "#",
      },
      {
        title: "Projects",
        href: "#",
      },
      {
        title: "Roadmap",
        href: "#",
      },
      {
        title: "Transaction Explorer",
        href: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        title: "About Us",
        href: "#",
      },
      {
        title: "Team",
        href: "#",
      },
      {
        title: "Media Centre",
        href: "#",
      },
      {
        title: "Testimonials",
        href: "#",
      },
      {
        title: "Contact us",
        href: "#",
      },
    ],
  },
  {
    title: "Downloads",
    links: [
      {
        title: "Brand Resources",
        href: "#",
      },
      {
        title: "Documents",
        href: "#",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        title: "Knowledge Base",
        href: "#",
      },
      {
        title: "Video Lessons",
        href: "#",
      },
      {
        title: "User Guides",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="grow bg-muted" />
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <h6 className="font-semibold text-white px-6 mb-10 text-shadow-2xs">
            North Star Group
          </h6>
          <Separator />
          <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full xl:col-span-2 flex flex-col justify-between">
              {/* Logo */}
              <Logo />

              <div className="space-y-4">
                <p className="mt-4 text-white">Get The Latest Updates</p>
                <div className="flex ">
                  <Input
                    type="email"
                    placeholder="Your username"
                    className="border-[#13131D]"
                  />
                  <Button
                    type="submit"
                    className="bg-[#202E48] hover:bg-[#202E48]/50"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {footerSections.map(({ title, links }) => (
              <div key={title}>
                <h6 className="font-semibold text-white">{title}</h6>
                <ul className="mt-6 space-y-4">
                  {links.map(({ title, href }) => (
                    <li key={title}>
                      <Link
                        href={href}
                        className="text-white hover:text-white/50"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="py-8 flex flex-col-reverse sm:flex-row items-center gap-x-10 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-white">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                North Star Group
              </Link>
            </span>

            <div className="flex sm:flex-row flex-col items-center gap-5 text-white">
              <Link href="#" target="_blank">
                Terms of use
              </Link>
              <Link href="#" target="_blank">
                Privacy Policy
              </Link>
              <Link href="#" target="_blank">
                Offering memorandum PDF
              </Link>
              <Link href="#" target="_blank">
                Cashback Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
