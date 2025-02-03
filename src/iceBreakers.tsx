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
    { value: "Question 1", title: "Could you tell me about yourself?", text: "Certainly. my name is Thomas Wimer. . . . " },
    { value: "Question 2", title: "Briefly Describe Your Experience", text: "I am familiar with the following languages and technologies: HTML, CSS, PYTHON, REACT, Node.js, Javascript, Typescript, and SQL. The latter 3 I would stress the word 'familiar'" },
    { value: "Question 3", title: "How did you become interested in web development?", text: "Story about coding friends photography page to lower overhead cost - looked into it sparked interest to code. Not stopped since" },
    { value: "Question 4", title: "Tell us what you learned recently.", text: "Just yesteday, in an attempt to prepare for this interview and also fill a glaring gap in the internet space. I dove back into using REACT/JVS to create this page. Learned Chakra and React Icon pulls. Or describe Python web scrapper" },
    { value: "Question 5", title: "What programming languages are you proficient in?", text: "HTML, CSS, PYTHON, JavaScript*, TypeScript*, SQL* (* === Whilst I code with them I need to look at Documentation or Online for assistance more frequently)" },
    { value: "Question 6", title: "Why Are You Interested in This Role?", text: "Since I helped my friend build her photography website I have not stopped coding. I have gone out of my way to learn new languages and techniques. I love everything about programming." },
    { value: "Question 7", title: "What Are the Qualities Needed for The Success of This Role?", text: "I believe to succeed in this role, one would need to be ananlytically minded and a creative problem solver. However, one would also need to be very open to constructive criticisims/review of their work. That also goes hand in hand with being a personable, enjoyable, team player as coding is a team effort." },
    { value: "Question 8", title: "What Are the Roles of an Entry Level Developer?", text: "An entry level Dev would, I imagine, be required to test, debug, build, deloy, document, and collaborate with his peers." },
    { value: "Question 9", title: "Why Do You Want to Work for Our Organization?", text: "As stated prior, I cannot think of a better place for a Jr Dev to start their career. ReyRey has an incredible backlog of programmers from mid to legacy level. The campus has an incredible amount of amenities/benefits that are offered to all employees. The company work culture seems, from reviews and outside persepctive, to be second to none as it fosters the growth of all levels of coders. From someone like myself who just starting out and knows a handful of languages to your more senior devs who know lagnuages such as COBOL/others."},
    { value: "Question 10", title: "What do you do if you can’t work out a coding issue by yourself?", text: "My usual workflow is to look at the code one last time for any glaring errors after a quick stand up or walk. If that fails, I head to documentation -> online resourves (stack overflow, google, AI) -> seeking outside help from a peer -> superior" },
    { value: "Question 11", title: "Have you worked in a customer-facing role in the past? How did you find it?", text: "I have had many customer facing roles and I enjoy the process of working with the customer. Especially with programming. Being able to have a client tell me what they want and being able to make it for them whilst tweaking the site to their liking is always a blast for me" },
    { value: "Question 12", title: "What would you say are your best soft skills?", text: "I would like to think I haven't worked with someone and they didn't notice my absence once gone. I think of myself as personable, communicative, creative, critical thinking, and I try my best to make the work enviorment a pleasant one. Outside of that I am tenacious when it comes to doing things I like to do. I.E. learning to code multiple languages and/or creating this site to practice for this interview" },
    { value: "Question 13", title: "How would you explain an API to a colleague from another team who doesn’t have a technical skillset?", text: "An API or Application Programming Interface is like a waiter at a restaurant. The waiter talked to you and gets your order, then goes and tells the kitchen who amke the food, then the waiter comes back to you with food. Bingo you know APIs now" },
]


export default IceBreakers;