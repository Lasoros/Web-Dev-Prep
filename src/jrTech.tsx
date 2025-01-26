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
    { value: "Question 1", title: "What is the difference between HTML and CSS?", text: "The ananlogy I use is, if you imagine house. HTML (Hypertext Markup Language) is the structure: foundation, walls, roof, ceiling, rooms, floorboards, attic, etc. While CSS (Cascading Style Sheet) is the visual aspect of the home: paint, art, curtains, prictures, etc. HTML builds the website and CSS makes it look good" },
    { value: "Question 2", title: "Can you explain the box model in CSS?", text: "Sure, the box model in CSS the basic rectangular layout in HTML, with compenents of padding, amargin, content, and border" },
    { value: "Question 3", title: "What is the purpose of JavaScript?", text: "While HTML (structure) and CSS (styling) build the page. JavaScript is was builds functionality into a website." },
    { value: "Question 4", title: "You’re stuck on a coding problem. Do you go to your superior for help, or continue to work on the issue by yourself? ", text: "My usual workflow is to look at the code one last time for any glaring errors after a quick stand up or walk. If that fails, I head to documentation -> online resourves (stack overflow, google, AI) -> seeking outside help from a peer -> superior" },
    { value: "Question 5", title: "What is an HTTP request?", text: "HTTP (Hypertext Transfer Protocol) is a message sent, usually by a web browser, to a server requesting a specific resource. I.E webpage/image" },
    { value: "Question 6", title: "What can CSS do for a website?", text: "CSS (Cascading Style Sheet) is used to style the websites components that are laid out via HTML" },
    { value: "Question 8", title: "What are the possible ways to create objects in JavaScript?", text: "You can use a constructor function, use object literals (const, let, new), use object.create method(), or es6 classes" }, //look at this one
    { value: "Question 9", title: "Describe how you push your code to your git repository?", text: "I have not used the cmd very much as I usually use VSCode's built in GUI to do all of my git work. Commit, Push, Pull, Clone, Revert" },
    { value: "Question 10", title: "Name 3 prominent git commands and describe their uses?", text: "Git Push: sends the saved changes to the repo. Git Clone: downloads source code from the specified remote repo (Github). Git Branch: creates a branch, locally, of the descired repo. Allows for multiple devs to work at the same time " },
    { value: "Question 11", title: "How are meta tags used in HTML, do they influence the appearance of the website?", text: "Meta tages in HTML are used defining MEATDATA for HTML document. SEO, page information(author, description), viewport" },
    { value: "Question 12", title: "How are the span and div elements different from other elements in HTML?", text: "Span is an inline element while div is a block element. While both are used to wrap div is used to wrap sections while span should wrap text, images, etc" },
    { value: "Question 13", title: "Explain the difference between cookies, session and local storage", text: "All serve the purpose of storing data. Cookies and Local storage are both persistant until deleted by the user or expire (cookies). Cookies can only store 4kb while Local and Session can store 5kb. All store in the form of strings. Cookies are sent back upon each HTTP request" },
    { value: "Question 14", title: "What is the DOM (Document Object Model), and how do you interact with it in JavaScript?", text: "DOM is usually visualized as a Tree with roots being document, HTML tags being branches, while other elemtns are the leaves. Once loaded you can manipulate the DOM via documnet object" },
    { value: "Question 15", title: "What is the difference between inline, block, and inline-block elements in CSS?", text: "Some value 3..." },
    { value: "Question 16", title: "Can you explain how CSS specificity works?", text: "Some value 3..." },
    { value: "Question 17", title: "Can you explain the difference between var, let, and const in JavaScript?", text: "Some value 3..." },
    { value: "Question 18", title: "What is AJAX and how do you implement it?", text: "Some value 3..." },
    { value: "Question 19", title: "What are RESTful APIs, and how do you interact with them in your code?", text: "Some value 3..." },
    { value: "Question 20", title: "What is version control, and why is Git used in development?", text: "Some value 3..." },
    { value: "Question 21", title: "Explain the difference between front-end and back-end development.", text: "Some value 3..." },
    { value: "Question 22", title: "What are some of the key differences between SQL and NoSQL databases?", text: "Some value 3..." },
    { value: "Question 23", title: "How would you optimize a website for performance?", text: "Some value 3..." },
    { value: "Question 24", title: 'What is the purpose of the "this" keyword in JavaScript?', text: "Some value 3..." },
    { value: "Question 24", title: 'What is the difference between Grid and Flexbox?', text: "Both are used in CSS while the Flexbox is used for one dimesional pages and Grid is used for two dimensional pages" },
]


export default Junior;