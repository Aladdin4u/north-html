import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const moneyList = [
  {
    image: "/shape-6.png",
    title: "Gold and silver",
    desc: "Spend and save in digitalised physical gold and silver.",
    href: "#",
  },
  {
    image: "/shape-4.png",
    title: "Earn",
    desc: "Earn gold and silver just for using your account.",
    href: "#",
  },
  {
    image: "/shape-7.png",
    title: "NSG Card",
    desc: "Spend gold, silver and digital currency globally.",
    href: "#",
  },
  {
    image: "/shape-3.png",
    title: "Trust and security",
    desc: "Be sure that your gold and silver are in safe hands.",
    href: "#",
  },
];

const bankList = [
  {
    image: "/workplace.png",
    title: "NSG Money platform",
    desc: "Keep track of everyday spending. Build your wealth in gold and silver.",
    href: "#",
  },
  {
    image: "/mobile_phone.png",
    title: "NSG mobile app",
    desc: "Take care of your finances on the move. Buy gold, silver and digital currency.",
    href: "#",
  },
  {
    image: "/credit_cards.png",
    title: "NSG Card",
    desc: "Spend gold, silver and digital currency globally.",
    href: "#",
  },
];

const mobiles = [
  {
    title: "Stay connected",
    desc: "Manage your spending, alongside your investments, wherever you are.",
  },
  {
    title: "Take an opportunity",
    desc: "Buy gold, silver and digital currency in seconds, 24/7, or set your own price.",
  },
];

const cards = [
  {
    image: "/wallet.png",
    title: "Go borderless",
  },
  {
    image: "/money_coins.png",
    title: "Sky-high daily limits",
  },
  {
    image: "/gold_bars.png",
    title: "Get paid gold and silver",
  },
];

const remittances = [
  {
    image: "/briefcase_document.png",
    title: "No hidden fees",
    desc: "A flat 0.45% fee. Any amount, sent any time to anywhere in the world.",
  },
  {
    image: "/timer.png",
    title: "Arrives in seconds",
    desc: "Make payments in gold and silver, cleared within seconds, 24/7.",
  },
  {
    image: "/stairs_up.png",
    title: "No mark-ups – ever",
    desc: "The same low cost, whether weekday or weekend, all year round.",
  },
];

const coolWallets = [
  {
    image: "/lock3.png",
    title: "Added security",
    desc: "Biometric and physical 2FA checks ensure your assets’ safety.",
  },
  {
    image: "/door_exit.png",
    title: "Compact",
    desc: "Credit card-size, convenient and accessible, wherever you go.",
  },
];

const wealths = [
  {
    image: "/gold.png",
    title: "Gold",
    desc: "Earn on every gram of gold you hold.",
    href: "#",
  },
  {
    image: "/silver.png",
    title: "Silver",
    desc: "Earn on every gram of silver you hold.",
    href: "#",
  },
  {
    image: "/nsg.png",
    title: "NSG",
    desc: "Receive a proportionate 20% share of every fee taken by NSG.",
    href: "#",
  },
];

const Features = () => {
  return (
    <>
      <div className="max-w-screen-xl flex flex-col items-center justify-center px-20 text-white">
        <div className="space-y-12 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] text-center">
            Make your money work for you
          </h1>
          <div className="w-full aspect-video bg-accent overflow-hidden">
            <Image
              className="dark:invert"
              src="/video.png"
              alt="video"
              width={1468}
              height={825}
              priority
            />
          </div>
        </div>

        <div className="space-y-20 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] text-center">
            Ask a little more from your money
          </h1>
          <div className="w-full grid grid-cols-4 gap-10">
            {moneyList.map((m) => (
              <div
                key={m.title}
                className="relative bg-[#25243459] flex flex-col justify-around rounded-xl  p-8 space-y-4"
              >
                <Image
                  className="absolute -top-5 -right-5"
                  src={m.image}
                  alt="icon image"
                  width={50}
                  height={50}
                  priority
                />
                <h3 className="font-bold">{m.title}</h3>
                <p className="text-muted-foreground text-sm">{m.desc}</p>
                <Link
                  href={m.href}
                  className=" text-blue-500 inline-flex items-center"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 items-center gap-20 space-y-20 py-12">
          <div className="space-y-5">
            <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
              More than just your average bank account
            </h1>
            <p className="text-muted-foreground">
              Manage your spending and savings from a single account. Get
              digital currency. Instantly buy gold and silver at world-class
              industry prices.
            </p>
          </div>
          <div className="w-full grid grid-rows-3 gap-10">
            {bankList.map((m) => (
              <div
                key={m.title}
                className=" bg-[#25243459] flex items-center gap-10 rounded-xl text-white p-8 space-y-4"
              >
                <Image
                  className=""
                  src={m.image}
                  alt="icon image"
                  width={100}
                  height={100}
                  priority
                />
                <div>
                  <h3 className="font-bold">{m.title}</h3>
                  <p className="text-muted-foreground text-sm">{m.desc}</p>
                  <Link
                    href={m.href}
                    className=" text-blue-500 inline-flex items-center"
                  >
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 items-center gap-20 py-12">
          <div className="space-y-6">
            <p className="text-blue-600 text-sm">MOBILE APP</p>
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold !leading-[1.2]">
              One app for everything
            </h1>
            <p className="text-muted-foreground">
              Keep an eye on your spending and savings, always. Get digital
              currency. Instantly buy gold and silver with real-time pricing.
            </p>
            {mobiles.map((m) => (
              <div
                key={m.title}
                className=" bg-[#25243459] flex items-center gap-10 rounded-xl text-white p-8 space-y-4"
              >
                <div>
                  <h3 className="font-bold">{m.title}</h3>
                  <p className="text-muted-foreground text-sm">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            <Image
              className=""
              src="/bank_note.png"
              alt="icon image"
              width={685}
              height={986}
              priority
            />
          </div>
        </div>
      </div>
      <div className="py-12">
        <Image
          className=""
          src="/about.png"
          alt="icon image"
          width={1900}
          height={850}
          priority
        />
      </div>
      <div className="max-w-screen-xl flex flex-col items-center justify-center px-20 text-white">
        <div className="grid grid-cols-2 items-center gap-20 py-12">
          <div className="w-[500px] h-[685px] rounded-xl bg-[#25243459]" />
          <div className="space-y-6">
            <p className="text-blue-600 text-sm">KINESIS VIRTUAL CARD</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold !leading-[1.2]">
              Spend your gold and silver instantly
            </h1>
            <p className="text-muted-foreground">
              Protect your wealth in gold and silver – or hold digital currency
              – only converting your assets at the exact moment of purchase.
            </p>
            {cards.map((m) => (
              <div
                key={m.title}
                className=" bg-[#25243459] flex items-center gap-10 rounded-xl text-white px-4 py-2 space-y-4"
              >
                <Image
                  className=""
                  src={m.image}
                  alt="icon image"
                  width={100}
                  height={100}
                  priority
                />
                <h3 className="font-bold">{m.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl flex flex-col items-center justify-center px-20 text-white">
        <div className="grid grid-cols-2 items-center gap-20 py-12">
          <div className="space-y-6">
            <p className="text-blue-600 text-sm">REMITTANCE</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold !leading-[1.2]">
              Send money globally in seconds
            </h1>
            <p className="text-muted-foreground">
              Send our gold and silver-based digital currencies to friends and
              family around the globe, with a low, flat fee. They’ll get it in
              2-3 seconds – every time.
            </p>
            {remittances.map((m) => (
              <div
                key={m.title}
                className=" bg-[#25243459] flex items-center gap-10 rounded-xl text-white px-4 py-2 space-y-4"
              >
                <Image
                  className=""
                  src={m.image}
                  alt="icon image"
                  width={100}
                  height={100}
                  priority
                />
                <div>
                  <h3 className="font-bold">{m.title}</h3>
                  <p className="text-muted-foreground text-sm">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[500px] h-[685px] rounded-xl bg-[#25243459]" />
        </div>
      </div>

      <div className="max-w-screen-xl flex flex-col items-center justify-center px-20 text-white">
        <div className="grid grid-cols-2 items-center gap-20 py-12">
          <div className="w-[500px] h-[440px] rounded-xl bg-[#25243459]" />
          <div className="space-y-6">
            <p className="text-blue-600 text-sm">KINESIS COOLWALLETS</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold !leading-[1.2]">
              Your portable vault
            </h1>
            <p className="text-muted-foreground">
              Keep all of your digital assets offline, secure and safely in your
              pocket with the NSG CoolWallet S.
            </p>
            {coolWallets.map((m) => (
              <div
                key={m.title}
                className=" bg-[#25243459] flex items-center gap-10 rounded-xl text-white px-4 py-2 space-y-4"
              >
                <Image
                  className=""
                  src={m.image}
                  alt="icon image"
                  width={100}
                  height={100}
                  priority
                />
                <div>
                  <h3 className="font-bold">{m.title}</h3>
                  <p className="text-muted-foreground text-sm">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12">
        <Image
          className=""
          src="/pic2.png"
          alt="cover image"
          width={1900}
          height={545}
          priority
        />
      </div>

      <div className="max-w-screen-xl flex flex-col items-center justify-center px-20 text-white">
        <div className="grid grid-cols-2 items-center gap-20 py-12">
          <div className="w-[500px] h-[440px] rounded-xl bg-[#25243459]" />
          <div className="space-y-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold !leading-[1.2]">
              Build your wealth
            </h1>
            {wealths.map((m) => (
              <div
                key={m.title}
                className=" bg-[#25243459] flex items-center gap-10 rounded-xl text-white px-4 py-2 space-y-4"
              >
                <Image
                  className=""
                  src={m.image}
                  alt="icon image"
                  width={100}
                  height={100}
                  priority
                />
                <div className="space-y-3">
                  <h3 className="font-bold">{m.title}</h3>
                  <p className="text-muted-foreground text-sm">{m.desc}</p>
                  <Link
                    href={m.href}
                    className=" text-blue-500 inline-flex items-center"
                  >
                    Get yours <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 items-center gap-20 space-y-20 py-12">
          <div className="space-y-5">
            <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
              Digital currency made easy
            </h1>
            <p className="text-muted-foreground">
              Instantly buy or sell digital currency, 24/7, from your regular
              account – starting at just $1.
            </p>
            <Button className="hidden sm:inline-flex bg-blue-500 hover:bg-blue-600">
              Join Group
            </Button>
          </div>
          <div className="w-[500px] h-[300px] rounded-xl bg-[#25243459]" />
        </div>
      </div>
    </>
  );
};

export default Features;
