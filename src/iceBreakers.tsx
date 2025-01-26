import { useState } from 'react'
import { AccordionItem , AccordionItemContent , AccordionItemTrigger , AccordionRoot } from '@chakra-ui/react'
import { Stack , Text } from '@chakra-ui/react'

export const IceBreakers = () => {
  const [value, setValue] = useState(["IceBreakers"])
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
    { value: "Question 1", title: "Briefly Describe Your Experience", text: "Some value 3..." },
    { value: "Question 2", title: "Could you tell me about yourself?", text: "Certainly. My Name is Thomas Wimer . . " },
    { value: "Question 3", title: "How did you become interested in web development?", text: "Some value 2..." },
    { value: "Question 4", title: "Tell us what you learned recently.", text: "Some value 3..." },
    { value: "Question 5", title: "What programming languages are you proficient in?", text: "Some value 3..." },
    { value: "Question 6", title: "Why Are You Interested in This Role?", text: "Some value 3..." },
    { value: "Question 7", title: "What Are the Qualities Needed for The Success of This Role?", text: "Some value 3..." },
    { value: "Question 8", title: "What Are the Roles of an Entry Level Developer?", text: "Some value 3..." },
    { value: "Question 9", title: "Why Do You Want to Work for Our Organization?", text: "Some value 3..." },
    { value: "Question 10", title: "What do you do if you can’t work out a coding issue by yourself?", text: "Some value 3..." },
    { value: "Question 11", title: "Have you worked in a customer-facing role in the past? How did you find it?", text: "Some value 3..." },
    { value: "Question 12", title: "What would you say are your best soft skills?", text: "Some value 3..." },
    { value: "Question 13", title: "How would you explain an API to a colleague from another team who doesn’t have a technical skillset?", text: "Some value 3..." },
    { value: "Question 14", title: "Give an example of how you would solve a disagreement with a colleague or your team lead.", text: "Some value 3..." },
    { value: "Question 15", title: "Briefly Describe Your Experience", text: "Some value 3..." },
]


export default IceBreakers;