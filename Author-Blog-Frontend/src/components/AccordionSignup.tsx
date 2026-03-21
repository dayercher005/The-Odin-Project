import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const items = [
  {
    value: "PatchNote-Introduction",
    trigger: "What is PatchNote?",
    content:
      "PatchNote is a Blog that covers Open Source material. Explore the architecture and usage behind open-source tools. From performance benchmarks to \"how-to\" guides, we provide the technical context you need to build, fork, and scale with confidence.",
  },
  {
    value: "PatchNote-Usage",
    trigger: "Why should I use PatchNote?",
    content:
      "Because PathNote provides the latest releases, security audits, and ecosystem news. We believe that the best software is built transparently, and this blog is our commitment to keeping our community informed and empowered",
  },
  {
    value: "PatchNote-Tools",
    trigger: "What tools and technologies were used to build PatchNote?",
    content:
      "PatchNote is a Full-Stack Web Application that utilizes a REST API combined with a Front-End website built using PERN stack.",
  },
]
export function AccordionSignup() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="max-w-xl rounded-lg border bg-neutral-300 dark:bg-neutral-700 p-15"
    >
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}