import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const items = [
  {
    value: "PatchNote-Usage",
    trigger: "Why use PatchNote for Blog Publishing?",
    content:
      "Unlike other Blog Publishing services, PatchNote lets you decide the layout, the tone, and the \"shelf life\" of your content. By publishing high-quality posts around specific keywords, you can attract a global audience without spending a dime on advertising.",
  },
  {
    value: "PatchNote-Tools",
    trigger: "What tools and technologies were used to build PatchNote?",
    content:
      "PatchNote is a Full-Stack Web Application that utilizes a REST API combined with a Front-End website built using PERN stack.",
  },
]
export function AccordionLogin() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="PatchNote-Usage"
      className="max-w-xl"
    >
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent className="text-md">{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}