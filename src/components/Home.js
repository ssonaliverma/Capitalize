import React from 'react'
import pic from "./home2.png";
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className="web">
      <div className='Img'>
        <img src="https://media.istockphoto.com/id/1249388391/photo/business-man-on-future-network-city-technology-background.jpg?s=170667a&w=0&k=20&c=YVHbiKXrA5lJHo8ZDDuYwxgbczZsHcKaUtAYAaWxab0=" className="img-fluid" alt='Image1' />
      </div>
      <div className='head1'>Capitalize will help you  grow your wealth!</div>
      <div className="card-group">
        
        <Link to="/stocks" className="card">
          <img src="https://images.livemint.com/img/2023/03/13/1600x900/Day_trading_guide_Stock_market_news_1678667548170_1678667548474_1678667548474.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Stocks</h5>
            <p className="card-text">Looking to buy stocks? We offer access to a wide range of investment options, including stocks from major companies in various industries, allowing you to diversify your holdings and minimize your risk.</p>
          </div>
          <div className="card-footer">
            {/* <small className="text-muted">Last updated 3 mins ago</small> */}
          </div>
        </Link>
        <Link to="/bonds" className="card">

          <img src="https://images.moneycontrol.com/static-mcnews/2022/12/bonds2-770x433.jpg?impolicy=website&width=770&height=431" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Bonds</h5>
            <p className="card-text">With our proven track record and expertise in the bond market, we are confident that we can provide you with the best returns and peace of mind.</p>
          </div>
          <div className="card-footer">
            {/* <small className="text-muted">Last updated 3 mins ago</small> */}
          </div>
        </Link>
        <Link to="/mutualfunds" className="card">
          <img src="https://economictimes.indiatimes.com/thumb/height-450,width-600,imgsize-51762,msid-88824336/am-i-investing-in-right-mutual-funds.jpg?from=mdr" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Mutual Funds</h5>
            <p className="card-text">Investing in our mutual funds could help you achieve your financial goals faster and more efficiently.</p>
          </div>
          <div className="card-footer">
            {/* <small className="text-muted">Last updated 3 mins ago</small> */}
          </div>
        </Link>
      </div>

      
        <img src="https://tse3.mm.bing.net/th?id=OIP.hqqtpJ5usYlWubgNiqPDYAHaE7&pid=Api&P=0" width="339" height="300" className="cu1"/>
        <p className="text1"> 40+ Million Customers</p>
        <img src="https://tse3.mm.bing.net/th?id=OIP.Ee_W8yvkvfgQy4bVSTQFEwHaE7&pid=Api&P=0" width="339" height="300" className="cu2"/>
        <p className="text1">1000+ Team Member</p>
        <img src="https://tse3.mm.bing.net/th?id=OIP.gSMa738cUeth24DfmxAOmAHaHa&pid=Api&P=0" width="310" height="300" className="cu3"/>
        <p className="text1">4.5 Star Rating</p> 
    
    </div>
  )
}

export default Home
