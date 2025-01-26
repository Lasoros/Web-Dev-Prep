import { BreadcrumbRoot, BreadcrumbLink, BreadcrumbCurrentLink , BreadcrumbItem , Breadcrumb} from "@chakra-ui/react"
import { FaHome } from "react-icons/fa";


  
  const Demo = () => {
    return (

        <div id="crumb">
            
            <BreadcrumbRoot>
                <BreadcrumbLink href="#home">
                <FaHome /> Home
                </BreadcrumbLink>
                <BreadcrumbLink href="#Breakers">
                <FaHome /> Ice Breaker
                </BreadcrumbLink>
                <BreadcrumbLink href="#100%">
                <FaHome /> 100% Will Come Up
                </BreadcrumbLink>
                <BreadcrumbLink href="#Jr">
                <FaHome /> Jr Level Tech ?'s
                </BreadcrumbLink>
                <BreadcrumbLink href="#Mid">
                <FaHome /> Mid Level Tech ?'s
                </BreadcrumbLink>
                <BreadcrumbLink href="#Senior">
                <FaHome /> Senior Level Tech ?'s
                </BreadcrumbLink>
            </BreadcrumbRoot>

        </div>
    )
  }

    export default Demo;