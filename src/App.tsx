import Accordian from "./Accordian"
import "./App.css"
import AccordianQuestions from "./questAccord";
import { Container, Stack } from "@chakra-ui/react";

import IceBreakers from "./iceBreakers";
import Junior from "./jrTech";
import MidLevel from "./midLevel";
import SnrLevel from "./snrTech";
import ForSure from "./willComeUpQues";


function App () {
  return (
    <>
    <div className="orbitron-font">
      <Stack>
          <h1>WEB. DEV. PRACTICE QUESTIONS FOR INTERVIEW</h1>
          <Container>
            <h2>Break The Ice Questions</h2>
              <IceBreakers></IceBreakers>   
          </Container>

          <h1> These Will Likely Come Up</h1>
          <Container>
              <ForSure></ForSure>
          </Container>

          <Container>
            <h2>Junior Technical Questions</h2>
            <Junior></Junior>
          </Container>

          <Container>
              <h2>Mid Level Technical Questions</h2>
              <MidLevel></MidLevel> 
          </Container>

          <Container>
              <h2>Senior Level Technical Questions</h2>
              <SnrLevel></SnrLevel>
          </Container>
      </Stack>
    </div>

    </>
 
  )


}

export default App;