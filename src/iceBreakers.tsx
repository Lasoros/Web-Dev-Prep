import { useState } from 'react'
import { AccordionItem , AccordionItemContent , AccordionItemTrigger , AccordionRoot } from '@chakra-ui/react'
import { Stack , Text } from '@chakra-ui/react'

export const IceBreakers = () => {
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
  { value: "Question 1", title: "Could you tell me about yourself?", text: "Certainly. My Name is Thomas Wimer . . " },
  { value: "Question 2", title: "How did you become interested in web development?", text: "Some value 2..." },
  { value: "Questoin 3", title: "Tell us what you learned recently.", text: "Some value 3..." },
  { value: "Questoin 4", title: "What programming languages are you proficient in?", text: "Some value 3..." },
  { value: "Questoin 5", title: "Why Are You Interested in This Role?", text: "Some value 3..." },
  { value: "Questoin 6", title: "What Are the Qualities Needed for The Success of This Role?", text: "Some value 3..." },
  { value: "Questoin 7", title: "What Are the Roles of an Entry Level Developer?", text: "Some value 3..." },
  { value: "Questoin 8", title: "Why Do You Want to Work for Our Organization?", text: "Some value 3..." },
  { value: "Questoin 9", title: "Briefly Describe Your Experience", text: "Some value 3..." },
]


export default IceBreakers;