import Foundment from './Foundment'
import Research from './Research'
import Pool from './Pool'
import Socials from './Socials'
import Features from './Features'
import Join from './Join'

const Landing: React.FC = () => {
  return (
    <>
      <div className="container">
        <Research />
        <Foundment />
        <Pool />
      </div>
      <div className="container_fluid"> 
        <Socials />
        <Features />
        <Join />
      </div>  
    </>
  );
}

export default Landing;