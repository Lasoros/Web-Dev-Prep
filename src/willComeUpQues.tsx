import { useState } from 'react'
import { AccordionItem , AccordionItemContent , AccordionItemTrigger , AccordionRoot } from '@chakra-ui/react'
import { Stack , Text } from '@chakra-ui/react'

export const ForSure = () => {
  const [value, setValue] = useState(["Guaranteed To Come Up"])
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
    { value: "Question 1", title: "FizzBuzz: Make an Algo that prints ints from *number* to *number*. Print FizzBuzz/Fizz/Buzz when Prints i / %*numer* / %*number*", text: "Certainly. My Name is Thomas Wimer . . " },
    { value: "Question 2", title: "In SQL database tables, why is redundant data (i.e. the same data stored in multiple tables) generally a bad thing?", text: "Some value 2..." },
    { value: "Question 2.5", title: "In SQL database tables, why might redundant data be necessary in real world applications?", text: "Some value 2..." },
    { value: "Question 3", title: "Describe 'Closure' concept in JavaScript as best as you are able.", text: "Some value 2..." },
    { value: "Question 4", title: "Explain what Object-oriented Programming is and the benefits of using an Object-oriented language.", text: "Some value 3..." },
    { value: "Question 5", title: "Why Are You Interested in This Role?", text: "Some value 3..." },
    { value: "Question 6", title: "What Are the Qualities Needed for The Success of This Role?", text: "Some value 3..." },
    { value: "Question 7", title: "What Are the Roles of an Entry Level Developer?", text: "Some value 3..." },
    { value: "Question 8", title: "Why Do You Want to Work for Our Organization?", text: "Some value 3..." },
    { value: "Question 10", title: "How would you reduce web application load time? (Name three ways)", text: "Some value 3..." },
    { value: "Question 11", title: "Tell us how you would typically go about creating a web app", text: "Some value 3..." },
    { value: "Question 12", title: "If there was a bug causing issues on a web page, which tools would you use?", text: "Some value 3..." },
    { value: "Question 13", title: "In *Language*, for what reasons might you initialise strings with single quotes ('') instead of double quotes (“”)?", text: "Some value 3..." },
    { value: "Question 13", title: "Briefly Describe Your Experience", text: "Some value 3..." },
]


export default ForSure;