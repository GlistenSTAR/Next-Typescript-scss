import Foundment from './Foundment'
import Research from './Research'
import Pool from './Pool'
import Socials from './Socials'

const Landing = () => {
  return (
    <>
      <div className="container">
        <Research />
        <Foundment />
        <Pool />
      </div>

      <div className="container_fluid"> 
        <Socials />

        <div className=" container features">
          <div>
            <h6>THE ROAD AHEAD</h6>
            <h1>Future Features</h1>
          </div>
        </div>
      </div>  

    </>
  );
}

export default Landing;