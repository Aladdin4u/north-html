import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";


const faq = [
  {
    question: "How do I know my gold and silver are there? ",
    answer:
      "You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
  },
  {
    question: "How do I know my gold and silver are safe?",
    answer:
      "Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
  },
  {
    question: "Why should I trust Kinesis?",
    answer:
      "Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
  },
];

const FAQ = () => {
  return (
    <div className="max-w-screen-xl flex flex-col justify-center px-20 py-12 text-white w-full">
      <div className="mb-6 space-y-2">
        <h2 className="text-4xl lg:text-5xl !leading-[1.15] font-bold tracking-tight">
          FAQ
        </h2>
        <p className="text-sm text-blue-500">Visit our Help Center</p>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between gap-x-12 gap-y-6">
        <div className="pl-8">
          <ul>
            <li className="border-l-2 px-2">Trust and security</li>
            <li className="px-2 text-muted-foreground">
              Buying gold and silver
            </li>
            <li className="px-2 text-muted-foreground">Storage</li>
          </ul>
        </div>

        <Accordion type="single" defaultValue="question-0" className="max-w-xl">
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="flex items-center justify-between gap-10">
        <div className="space-y-2">
          <p className="text-sm text-blue-500">INVESTOR</p>
          <h2 className="text-3xl lg:text-4xl !leading-[1.15] font-bold tracking-tight">
            Our offering for gold
            <br /> and silver investors.
          </h2>
          <Link href="#" className="px-5 text-muted-foreground">
            Learn more
          </Link>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-blue-500">TRADER</p>
          <h2 className="text-3xl lg:text-4xl !leading-[1.15] font-bold tracking-tight">
            Our offering for
            <br /> professional traders.
          </h2>
          <Link href="#" className="px-5 text-muted-foreground">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
