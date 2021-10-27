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
        {/* <FeatureItem 
          icon="list"
          title="Programmable Swaps"
          content="Program Market and limit orders, DCA, stochastic liquidity pools, and algorithmic trading strategies. Unlimited possibilities for automated strategy execution!     "
        />
        <FeatureItem 
          icon="tree"
          title="High Performance"
          content="Invest and trade at scale with a Hydra head side-chain for maximum performance and cross-blockchain bridges."
        />
        <FeatureItem 
          icon="items"
          title="Meritocratic governance"
          content="DAO governance model based on the proof of merit. Rapid innovation based on decentralisation values."
        />
        <FeatureItem 
          icon="setting"
          title="Crypto Indexes"
          content="Track the performance of the entire market, market sector, or a group of similar assets, such as DeFi projects, DEXs, NFTs, or any group of instruments"
        />
        <FeatureItem 
          icon="launch"
          title="Synthetic Instruments"
          content="Invest in financial instruments which derive their value from land, art, commodities, indexes, stocks, equities, and any existing financial instrument."
        />
        <FeatureItem 
          icon="nut"
          title="Crypto Derivatives"
          content="Engage in options trading, covered calls, collateralized trades, all with optimum efficiency."
        /> */}
      </div>
    </div>
  );
}

export default Features;