
 import Automatic from "./Components/automatic"
 import Sellfast from "./Components/sellfast"
 import Feature from "./Components/feature"
import Market from "./Components/market"
import Integrate from "./Components/integrate"
import BestPhone from "./Components/bestPhone"
// import Introduce from "./Components/introduce"
import Flex from "./Components/flex"
import {
  about_us_page,
  text,
  already_excited,
  button1,
  button2,
  about_header,
  buttons,
  about_hdr,
  border_background,
  border_margin,
  border_content,
  selling_part
} from './SCSS/assistant.module.scss'
 const Index = () =>{
    return (
      
      <div className={about_us_page}>
        {/* <BestPhone/> */}
        {/* <Introduce/> */}
        
        <Automatic/>
        <Sellfast/>
        <Automatic/>
        <Feature/>
        <Market/>
        <Integrate/>
        <Flex/>
        <div className={selling_part}>
          <p>Selling electronics online is about to get a whole lot easier…</p>
        </div>
      </div>
      
    );
  }

export default Index