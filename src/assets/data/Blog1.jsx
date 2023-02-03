import React from 'react'
import IMG1 from "./IMG1.png"
import IMG2 from "./IMG2.png"
import IMG3 from "./IMG3.jfif"

const Blog1 = () => {
  return (
    <div style={{fontSize: "1rem"}}> In my last article, “Understanding Web3”, we learnt that Web3 is based on these three premises; <br/>


    If you haven’t read it, click on this <a href="https://medium.com/@MattiJeremiah/understanding-web3-0-c252221af86c">link</a>  <br/>
    
   <h6 style={{padding: "10px", fontWeight: "bold"}}>
    1. The Backend evolution powering it (Blockchain technology) <br/>
    
    2. Token economy (coins, tokens, and NFTs) <br />
    
    3. Autonomous governance (DAO) <br/>
    </h6>

    <div style={{paddingBottom: "10px", }} >
    I will, over time, distil these underlying fundamentals of web3, starting with “The backend evolution (Blockchain Technology)” in this article.
    
    I will dive deeply into understanding blockchain in the simplest form, void of the technical web3 jargon.
    
    Let’s go! <br/>
    </div>

    From the beginning of time, humans have always cooperated and interacted via networks. We align with networks that meet our needs and suit our well-being, from trade, religion, social groups, finance, ethnicity, and a host of others. We have connected and aligned with one network or the other.
    
    These networks are controlled by a central authority that lays down the rules and enforces these rules among participants.
    
    However, who monitors this central authority and ensures they do right?
    
    Blockchain technology allows us to govern a network without any central authority.
    
    For example, you need a bank (financial institution) to help with holding your money and allow you to make other financial transactions. The bank ensures everyone using them follows the laid down financial rules.
    
    In Blockchain, the code is the law! <br/>
    
    <h6  style={{padding: "10px", fontWeight: "bold"}} >
    What is Blockchain? <br/>
    </h6>
    The Blockchain is a distributed network of computers called nodes that maintains a continuously growing list of information called data in batches called blocks that are cryptographically connected (chains). <br/>
    <img src={IMG1} alt="Block" className='w-100' style={{paddingTop: "20px"}}/>
   <div>
   Simply put, Blockchain is the instant and continuous storage of data and information on different computers connected in a network without the interference of a central authority.
   </div>
   <h6 style={{padding: "10px", fontWeight: "bold"}}>
   Where did the term Blockchain emanate from?
   </h6>
   <div style={{paddingTop: "10px", paddingBottom: "10px"}} >
   A block in this context is a bunch of data bundled together.
   <img src={IMG2} alt="Block" className='w-100' style={{paddingTop: "20px"}}/>
   These blocks of data are cryptographically connected in a chain-like manner, and this means every new block is connected to the previous existing block cryptographically.
   </div>

Yeah, I am sure it is now making sense why the coins used in the network are called “cryptocurrency”.

Nodes (computers) ensure that everyone interacting with the blockchain network has the same blocks and data.

For example, if a blockchain network has 1000 nodes (computers), every node will have the same number of blocks and data. The data in Blocks 1, 2 and 3 in the above diagram will be the same across all the nodes, and as new blocks are formed, they are updated on every node.

Nodes (computers), also called miners in the Blockchain, solve a cryptographic puzzle to form and validate the next block on the network. The process of solving this cryptographic puzzle is called mining. One of the core features of Blockchain is the immutability of data. When a block is formed and validated by all the nodes, its data cannot be altered or erased by any entity.

A Blockchain network confirms each block of data using a consensus mechanism. Consensus is a system where all nodes on the blockchain network agree before a new block is formed.

There are two significant types of consensus mechanisms which are;

<h6  style={{padding: "10px", fontWeight: "bold"}}>
- Proof of Work (PoW) <br/>
- Proof of Stake (PoS)
</h6>

<h5  style={{ fontWeight: "bold"}}>
Proof of Work (PoW) <br/>

</h5>

Proof of Work is a consensus process where all nodes in the Blockchain solve a cryptographic puzzle to secure the next block on the network. This process is called mining.

The first node (computer) to solve the puzzle gets a “mining reward”, a reward in the form of the network’s coins.

The node immediately broadcasts the answer to the other nodes, and they all agree with the nodes that solve the puzzle and then add the block to the network.

The proof of work concepts stems from the fact that all the nodes need to simultaneously put in computationally effort (work) to solve the cryptographic puzzle. <br/>

Examples of blockchain network that uses the Proof of Work consensus mechanism are Bitcoin Blockchain, Litecoin, Monero, Dogecoin, Bitcoin Cash, and BSV.

<h5  style={{ fontWeight: "bold"}}>
Proof of Stake (PoS) <br/>

</h5>

Proof of Stake is a consensus process in which one of the nodes (computers) in the blockchain network is randomly chosen to solve a cryptographic puzzle and mint the next block.

The node gets a mining reward for validating and minting a new block on the network. <br/>

The probability of selection is directly correlated to the node’s number of network coins staked.
<img src={IMG3} alt="Block" className='w-100' style={{paddingTop: "20px"}}/>
  <div style={{paddingTop: "20px"}} >
  From the illustration, node A staked 200 coins with a 20% chance of selection, while Node B staked 400 coins. The 100% staking increment of Node B over Node A gives it a high probability of selection. The higher the number of network coins staked by a Node, the higher its chances of being selected to validate and mint a block.

Staking in this context is the deposit of the network’s coin (cryptocurrency) as a security deposit.

Blockchain network that uses the Proof of Stake is Solana and Cardano. However, the Ethereum network, the most prominent blockchain network, is gradually transitioning from a proof of work to a proof of stake mechanism.

<h6 style={{padding: "10px", fontWeight: "bold"}}>
Why is called a backend evolution?
</h6>

Data and information on Web2 are stored in centralized servers owned by a central entity. These giant institutions own and control the use of these data to their financial advantage.

However, the advent of blockchain technology enables decentralized data storage and incentivizes participants by rewarding them with network coins.

<h6  style={{padding: "10px", fontWeight: "bold"}}>
A Blockchain network has the following features; <br />

1. Openness: Anyone can participate in the network, and information in the network is open to the public.<br />

2. Trustless: It doesn’t need a central entity to validate transactions on the network.<br />

3. Ownership: Honest efforts are rewarded with the network’s coin.<br />

4. Decentralized: Data are recorded and distributed amongst many computers.<br />

5. Immutable: Data recorded on the network cannot be altered.<br />
</h6>
    </div>  
    </div>
  )
}

export default Blog1