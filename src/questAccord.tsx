import { useState } from 'react'
import { AccordionItem , AccordionItemContent , AccordionItemTrigger , AccordionRoot } from '@chakra-ui/react'
import { Stack , Text } from '@chakra-ui/react'

export const AccordianQuestions = () => {
  const [value, setValue] = useState(["second-item"])
  return (
    <Stack gap="4">
      <Text fontWeight="medium" fontSize={'xl'}>Expanded: {value.join(", ")}</Text>
      <AccordionRoot value={value} onValueChange={(e) => setValue(e.value)}>
        {items.map((item, index) => (
          <AccordionItem key={index} value={item.value}>
            <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
            <AccordionItemContent>{item.text}</AccordionItemContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </Stack>
  )
}

const items = [
  { value: "first-item", title: "First ?", text: "Anwser 1" },
  { value: "second-item", title: "Second ?", text: "Anwser 2" },
  { value: "third-item", title: "Third ?", text: "Anwser 3" },
]

export default AccordianQuestions;




