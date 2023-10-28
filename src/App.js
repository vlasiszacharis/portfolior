import './App.css';
import { FcDeleteDatabase } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { FcDribbble } from "react-icons/fc";

import Card from './components/Card'

function App() {
 let text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  return(
  <>
  <div className='Card'>
  <Card logo={<FcDeleteDatabase />} heading="UX, UI Design" text={text} />
  <Card logo={<FcDislike />} heading="Web Design" text={text} />
  <Card logo={<FcDribbble />} heading="UX Research" text={text} />
  </div>
  </>

  )
}

export default App;
