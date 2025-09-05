"use client";

import Image from "next/image";

const contact = [
  {
    image: "/house.png",
    title: "Name and address",
    desc: "Name and address, name and address, name and address",
  },
  {
    image: "/user.png",
    title: "CEO",
    desc: "Chris Rodriguez ",
  },
  {
    image: "/phone.png",
    title: "Contact information",
    desc: "+44 12 3456 6789\nnorthstargroup@gmail.com",
  },
];

const About = () => {
  return (
    <div className="min-h-screen px-20 flex flex-col items-center justify-center text-white pb-20">
      <div className="flex flex-col justify-center items-center h-[600px] space-y-2">
        <h3 className="font-bold text-4xl">
          About <span className="text-blue-600">NSG</span>
        </h3>
        <p className="text-muted-foreground text-sm">
          On a mission to accelerate the world&apos;s transition to sustainable
          money.
        </p>
      </div>

      <div className="max-w-screen-xl grid grid-cols-2 py-12">
        <ul>
          <li className="border-l-2 border-blue-600 p-2">Our Mission</li>
          <li className="p-2 text-muted-foreground">
            An Entirely New Monetary System
          </li>
          <li className="p-2 text-muted-foreground">Gold on the Blockchain</li>
          <li className="p-2 text-muted-foreground">Borderless Currency</li>
        </ul>
        <div className="space-y-4">
          <h3 className="font-bold text-4xl">Our Mission</h3>
          <p className="text-muted-foreground text-sm">
            North Star Group shares a vision of a world where money is honest,
            fair and backed by a true store of value, within a system designed
            to reward everyone who participates.
          </p>

          <p className="text-muted-foreground text-sm">
            NSG has introduced a new form of money to stand the test of time and
            overcome the pitfalls of traditional currencies susceptible to
            inflation, weakened value and eventual collapse. In today&apos;s
            financial model, where more and more money is printed and the value
            of that currency is eroded, economies and individuals are left to
            suffer the consequences.
          </p>

          <h3 className="font-bold text-4xl">Lorem ipsum</h3>
          <p className="text-muted-foreground text-sm">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been
            the industry&apos;s standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl flex flex-col justify-center items-center py-12 space-y-10">
        <h3 className="font-bold text-6xl text-center">
          Industry Leaders in Fully Allocated Precious Metals
        </h3>
        <p className="text-muted-foreground text-sm">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <div className="grid grid-cols-3 gap-10">
          {contact.map((m) => (
            <div
              key={m.title}
              className=" bg-[#25243459] flex flex-col items-center justify-center text-center gap-10 rounded-xl text-white p-12 space-y-4"
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
                <h3 className="font-bold mb-2">{m.title}</h3>
                <p className="text-muted-foreground text-sm">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
