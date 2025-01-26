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
    { value: "Question 1", title: "What is the difference between HTML and CSS?", text: "Some value 3..." },
    { value: "Question 2", title: "Can you explain the box model in CSS?", text: "Some value 3..." },
    { value: "Question 3", title: "What is the purpose of JavaScript?", text: "Some value 3..." },
    { value: "Question 4", title: "You’re stuck on a coding problem. Do you go to your superior for help, or continue to work on the issue by yourself? ", text: "Some value 3..." },
    { value: "Question 5", title: "What is an HTTP request?", text: "Some value 3..." },
    { value: "Question 6", title: "What can CSS do for a website?", text: "Some value 3..." },
    { value: "Question 8", title: "What are the possible ways to create objects in JavaScript?", text: "Some value 3..." }, //look at this one
    { value: "Question 9", title: "Describe how you push your code to your git repository?", text: "Some value 3..." },
    { value: "Question 10", title: "Name 3 prominent git commands and describe their uses?", text: "Some value 3..." },
    { value: "Question 11", title: "How are meta tags used in HTML, do they influence the appearance of the website?", text: "Some value 3..." },
    { value: "Question 12", title: "How are the span and div elements different from other elements in HTML?", text: "Some value 3..." },
    { value: "Question 13", title: "Compare cookies and local storage. Which do you believe is more efficient.", text: "Some value 3..." },
]


export default Junior;