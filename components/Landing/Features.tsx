import FeatureItem from '../commons/FeatureItem'

const Features:React.FC = () => {
  return (
    <div className="container features mt-5" id="future">
      <div>
        <h6>THE ROAD AHEAD</h6>
        <h1>Future Features</h1>
      </div>
      <div className="items row" style={{paddingTop:'20px'}}>
        <FeatureItem 
          icon="list"
          title="Crypto Indexes"
          content="A short sentence should go here to explain this specific feature."
        />
        <FeatureItem 
          icon="tree"
          title="Blockchain bridges"
          content="A short sentence should go here to explain this specific feature."
        />
        <FeatureItem 
          icon="items"
          title="Liquidity Mining"
          content="A short sentence should go here to explain this specific feature."
        />
        <FeatureItem 
          icon="setting"
          title="Synthetic Instruments"
          content="A short sentence should go here to explain this specific feature."
        />
        <FeatureItem 
          icon="launch"
          title="Platform Governance"
          content="A short sentence should go here to explain this specific feature."
        />
        <FeatureItem 
          icon="nut"
          title="Crypto Derivatives"
          content="A short sentence should go here to explain this specific feature."
        />
      </div>
    </div>
  );
}

export default Features;