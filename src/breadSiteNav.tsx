import { BreadcrumbRoot, BreadcrumbLink, BreadcrumbCurrentLink , BreadcrumbItem , Breadcrumb} from "@chakra-ui/react"
import { IconContext } from "react-icons";
import { FaHome } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { GiMeltingIceCube } from "react-icons/gi";
import { TbAntennaBars2, TbAntennaBars4, TbAntennaBars5 } from "react-icons/tb";


  
  const Demo = () => {
    return (
        <IconContext.Provider value={{ color: "blue", className: "bread-image" }}>
            

        <div id="crumb">
            
        
            <BreadcrumbRoot>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#home">
                        <FaHome /> Home
                    </BreadcrumbLink>
             
                </BreadcrumbItem>

                <BreadcrumbItem>
                <BreadcrumbLink href="#Breakers">
                <GiMeltingIceCube /> Ice Breaker
                </BreadcrumbLink>
             
                </BreadcrumbItem>


                <BreadcrumbItem>
                <BreadcrumbLink href="#100%">
                <FaCheck /> 100% Will Come Up
                </BreadcrumbLink>
             
                </BreadcrumbItem>

                <BreadcrumbItem>
                <BreadcrumbLink href="#Jr">
                <TbAntennaBars2 /> Jr Level Tech ?'s
                </BreadcrumbLink>
             
                </BreadcrumbItem>

                <BreadcrumbItem>
                <BreadcrumbLink href="#Mid">
                <TbAntennaBars4 /> Mid Level Tech ?'s
                </BreadcrumbLink>
             
                </BreadcrumbItem>

                <BreadcrumbItem>
                <BreadcrumbLink href="#Senior">
                <TbAntennaBars5 /> Sr Level Tech ?'s
                </BreadcrumbLink>
             
                </BreadcrumbItem>

                {/* <BreadcrumbLink href="#Breakers">
                <GiMeltingIceCube /> Ice Breaker
                </BreadcrumbLink>
                <BreadcrumbLink href="#100%">
                <FaCheck /> 100% Will Come Up
                </BreadcrumbLink>
                <BreadcrumbLink href="#Jr">
                <TbAntennaBars2 /> Jr Level Tech ?'s
                </BreadcrumbLink>
                <BreadcrumbLink href="#Mid">
                <TbAntennaBars4 /> Mid Level Tech ?'s
                </BreadcrumbLink>
                <BreadcrumbLink href="#Senior">
                <TbAntennaBars5 /> Senior Level Tech ?'s
                </BreadcrumbLink> */}
            </BreadcrumbRoot>
        

            {/* <Breadcrumb.Root>
                <Breadcrumb.List>
                    <Breadcrumb.Item>
                        <BreadcrumbLink href="#home">
                            <FaHome /> Home
                        </BreadcrumbLink>
                    </Breadcrumb.Item>

                    <Breadcrumb.Separator />

                    <Breadcrumb.Item>
                        <BreadcrumbLink href="#home">
                            <FaHome /> Home
                        </BreadcrumbLink>
                    </Breadcrumb.Item>

                    <Breadcrumb.Separator />

                    <Breadcrumb.Item>
                        <BreadcrumbLink href="#home">
                            <FaHome /> Home
                        </BreadcrumbLink>
                    </Breadcrumb.Item>

                    <Breadcrumb.Separator />

                </Breadcrumb.List>
            </Breadcrumb.Root> */}

        </div>

        </IconContext.Provider>
    )
  }

    export default Demo;