import Accordian from "./Accordian"
import "./App.css"
import AccordianQuestions from "./questAccord";
import { Breadcrumb, Container, Stack } from "@chakra-ui/react";

import IceBreakers from "./iceBreakers";
import Junior from "./jrTech";
import MidLevel from "./midLevel";
import SnrLevel from "./snrTech";
import ForSure from "./willComeUpQues";

import Demo from "./breadSiteNav";


function App () {
  return (
    <>
    <div>
      <Stack>
          <Demo></Demo>
          <h1>WEB. DEV. PRACTICE QUESTIONS FOR INTERVIEW</h1>
          <Container id="Breakers" >
            <h2>Break The Ice Questions</h2>
              <IceBreakers></IceBreakers>   
          </Container>

          <h1> These Will Likely Come Up</h1>
          <Container id="100%">
              <ForSure></ForSure>
          </Container>

          <Container id="Jr">
            <h2>Junior Technical Questions</h2>
            <Junior></Junior>
          </Container>

          <Container id="Mid">
              <h2>Mid Level Technical Questions</h2>
              <MidLevel></MidLevel> 
          </Container>

          <Container id="Senior">
              <h2>Senior Level Technical Questions</h2>
              <SnrLevel></SnrLevel>
          </Container>
      </Stack>
    </div>

    </>
 
  )


}

export default App;