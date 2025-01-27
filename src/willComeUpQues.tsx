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
    { value: "Question 1", title: "FizzBuzz: Make an Algo that prints ints from *number* to *number*. Print FizzBuzz/Fizz/Buzz when Prints i / %*numer* / %*number*", text: "Python or JavaScript " },
    { value: "Question 2", title: "In SQL database tables, why is redundant data (i.e. the same data stored in multiple tables) generally a bad thing?", text: "Redundant data is not great due storing data in multiple places which makes it harder to maintain data consistency if someone needed to change their address on their account. This could lead to having two different addresses for the same user" },
    { value: "Question 3", title: "Describe 'Closure' concept in JavaScript as best as you are able.", text: "Closure is what allows a function to 'remember' the vars and scope created, even after it has exited" },
    { value: "Question 4", title: "Explain what Object-oriented Programming is and the benefits of using an Object-oriented language.", text: "OOP is a methodology that has four pillars. APE.I., and it focuses on using objects over functions and logic. It allows for easy scalability and resuability of assets." },
    { value: "Question 5", title: "How would you reduce web application load time? (Name three ways)", text: "Remove extenuous widgets, reduce HTTP requests, and consolidate CSS if able" },
    { value: "Question 6", title: "Tell us how you would typically go about creating a web app", text: "Some value 3..." },
    { value: "Question 7", title: "If there was a bug causing issues on a web page, which tools would you use?", text: "Dev Tools on chrome as that is what I mostly use. Outside of that I would go to inter" },
    { value: "Question 8", title: "In *Language*, for what reasons might you initialise strings with single quotes ('') instead of double quotes (“”)?", text: "See the question. If you wanted to use quotes in your text" },
    { value: "Question 9", title: "What are the four pillars or OOP?", text: "PIEA, PIE.A., Polymorphism, Inheritance, Encapsulation, Abstraction" },
]


export default ForSure;