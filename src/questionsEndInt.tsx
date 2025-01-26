import { useState } from 'react'
import { AccordionItem , AccordionItemContent , AccordionItemTrigger , AccordionRoot } from '@chakra-ui/react'
import { Stack , Text } from '@chakra-ui/react'

export const EndQuestions = () => {
  const [value, setValue] = useState(["Questions To Ask"])
  return (
    <Stack gap="4">
      <Text fontWeight="medium" fontSize={'xl'}>Expanded: {value.join(", ")}</Text>
      <AccordionRoot value={value} onValueChange={(e) => setValue(e.value)}>
        {items.map((item, index) => (
          <AccordionItem key={index} value={item.value}>
            <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </Stack>
  )
}

const items = [
    { value: "Employer Question 1", title: "What size team would I be workin with?"},
    { value: "Employer Question 2", title: "Briefly Describe Your Experience"},
    { value: "Employer Question 3", title: "How did you become interested in web development?"},
    { value: "Employer Question 4", title: "Tell us what you learned recently."},
    { value: "Employer Question 5", title: "What programming languages are you proficient in?"},
    { value: "Employer Question 6", title: "Why Are You Interested in This Role?"},
    { value: "Employer Question 7", title: "What Are the Qualities Needed for The Success of This Role?"},
    { value: "Employer Question 8", title: "What Are the Roles of an Entry Level Developer?"},
    { value: "Employer Question 9", title: "Why Do You Want to Work for Our Organization?"},
    { value: "Employer Question 10", title: "What do you do if you can’t work out a coding issue by yourself?"},
]


export default EndQuestions;