//import './App.css'

import { Hero, Typography } from "mds-react"
import HeaderFragment from "./fragments/HeaderFragment"


function App() {
  
  return (
    <>
      <HeaderFragment />
      <div className="mds-container">
        <div className="mds-row">
          <div className="mds-col">
            <Hero 
              upTitle={<><Typography variant="h6" framed={true}>Exploration</Typography></>}
              title={<Typography variant="h1">Headless Design System</Typography>}
              subTitle="Exploring possibilities of headless CMS coupled with a React frontend"
              image="/assets/exploration.jpg"
             />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
