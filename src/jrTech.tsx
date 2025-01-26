import { useState } from 'react'
import { AccordionItem , AccordionItemContent , AccordionItemTrigger , AccordionRoot } from '@chakra-ui/react'
import { Stack , Text } from '@chakra-ui/react'

export const Junior = () => {
  const [value, setValue] = useState(["Junior Web Dev Questions"])
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
    { value: "Questoin 1", title: "What is the difference between HTML and CSS?", text: "Some value 3..." },
    { value: "Questoin 2", title: "Can you explain the box model in CSS?", text: "Some value 3..." },
    { value: "Questoin 3", title: "What is the purpose of JavaScript?", text: "Some value 3..." },
    { value: "Questoin 4", title: "You’re stuck on a coding problem. Do you go to your superior for help, or continue to work on the issue by yourself? ", text: "Some value 3..." },
    { value: "Questoin 5", title: "What is an HTTP request?", text: "Some value 3..." },
    { value: "Questoin 6", title: "What can CSS do for a website?", text: "Some value 3..." },
    { value: "Questoin 7", title: "What is a CSS grid layout? How does it change the overall appearance of a website? ", text: "Some value 3..." },
]


export default Junior;