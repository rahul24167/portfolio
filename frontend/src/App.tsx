import {Intro} from "./components/Intro"
import {MainContent} from "./components/MainContent"

function App() {
  

  return (
    <div className='flex flex-row justify-center bg-black text-[#fafafa] gap-6 py-16 px-20'>
      <Intro></Intro>
      <MainContent></MainContent>
    </div>
  )
}

export default App
