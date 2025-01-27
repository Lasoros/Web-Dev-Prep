import { useState } from 'react'
import { AccordionItem  , AccordionItemTrigger , AccordionRoot } from '@chakra-ui/react'
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
    { value: "Employer Question 2", title: "Will I have the opportunity to meet my team lead? (Unless already in the interview as suggested by research)"},
    { value: "Employer Question 3", title: "Can you tell me about the team I'd be working with?"},
    { value: "Employer Question 4", title: "In the interim of being onboarded, is there anything I should be going out of my way to familiarize myself with? (If it's going well)"},
    { value: "Employer Question 5", title: "As far as first hiring entry level devs what is the most prominent challenge/shortcoming you have seen so I can do my best to avoid making the same pitfall"},
    { value: "Employer Question 6", title: "Whats each of your favorite things about working for ReyRey?"},
    { value: "Employer Question 7", title: "What Are the Qualities Needed for The Success of This Role?"},
    { value: "Employer Question 8", title: "Would I be workin with any perpriority technology in this role?"},
    { value: "Employer Question 9", title: "What are your expectations for this role during the first 30 to 60 days?"},
    { value: "Employer Question 10", title: "What do you do if you can’t work out a coding issue by yourself?"},
]


export default EndQuestions;