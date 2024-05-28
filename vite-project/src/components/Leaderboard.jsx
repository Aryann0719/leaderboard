import React from 'react';
import './Leaderboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
const growthIcon = (
    <svg width="24" height="15" viewBox="0 0 24 24" stroke="green" className="my-svg">
      <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
    </svg>
   
  );
  

const Leaderboard = () => {
    const data = [
        { rank: 1, name: 'Selling with re entr', calmarRatio: 3.96, overallProfit: 381845, avgDailyProfit: 319.54, winPercent: 0.65, price: '-', action: 'View' },
        { rank: 2, name: 'strategy_name', calmarRatio: 3.62, overallProfit: 268872.5, avgDailyProfit: 216.31, winPercent: 0.64, price: '500', action: 'Buy' },
        { rank: 3, name: 'Based on premium and', calmarRatio: 3.42, overallProfit: 255425, avgDailyProfit: 208.51, winPercent: 0.64, price: '-', action: 'View' },
        { rank: 4, name: 'strategy_name', calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercent: 0.65, price: '-', action: 'View' },
        { rank: 5, name: 'strategy_name', calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercent: 0.65, price: '-', action: 'View' },
        { rank: 6, name: 'Based on premium wit', calmarRatio: 3.01, overallProfit: 135980, avgDailyProfit: 185.77, winPercent: 0.49, price: '-', action: 'View' },
        { rank: 7, name: 'strategy_name', calmarRatio: 2.76, overallProfit: 267867.5, avgDailyProfit: 218.49, winPercent: 0.6, price: '-', action: 'View' },
    ];
    
    return (
        <div className="main-page">
        <div className="leaderboard-header">Leaderboard</div>
        <div className="leaderboard-container">
            
            <div className="header">
        <h3>Basic Backtest</h3>
        <div className="slippage-selector">
          <label htmlFor="slippage">Slippage:</label>
          <select id="slippage" name="slippage">
            <option value="0%">0%</option>
            <option value="0.1%">0.1%</option>
            <option value="0.5%">0.5%</option>
            <option value="1%">1%</option>
          </select>
        </div>
      </div>
            
            <table>
                <thead>
                    <tr>
                        <th className="bold">Rank</th>
                        <th className="bold">Name</th>
                        <th className="right-align bold">Calmar Ratio</th>
                        <th className="right-align bold">Overall Profit</th>
                        <th className="right-align bold">Avg. Daily Profit</th>
                        <th className="right-align bold">Win %(Day)</th>
                        <th className="right-align bold">Price (Rs)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="size">{item.rank}</td>
                            <td className="size">{item.name}</td>
                            <td className="right-align size calmar-ratio-cell">{growthIcon}{item.calmarRatio}</td>
                            <td className="right-align size">{item.overallProfit}</td>
                            <td className="right-align size">{item.avgDailyProfit}</td>
                            <td className="right-align size color">{item.winPercent}</td>
                            <td className="right-align size">{item.price}</td>
                            <td data-row="2" data-col="8" className="action-links size"><a href="#">{item.action}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default Leaderboard;

// import React from 'react';
// import './Leaderboard.css';

// const Leaderboard = ({ data }) => {
//   return (
//     <div className="backtest-container">
//       <div className="header">
//         <h2>Basic Backtest</h2>
//         <div className="slippage-selector">
//           <label htmlFor="slippage">Slippage:</label>
//           <select id="slippage" name="slippage">
//             <option value="0%">0%</option>
//             <option value="0.1%">0.1%</option>
//             <option value="0.5%">0.5%</option>
//             <option value="1%">1%</option>
//           </select>
//         </div>
//       </div>
//       <table className="backtest-table">
//         <thead>
//           <tr>
//             <th>Rank</th>
//             <th>Name</th>
//             <th>Calmar Ratio</th>
//             <th>Overall Profit</th>
//             <th>Avg. Daily Profit</th>
//             <th>Win % (Day)</th>
//             <th>Price (Rs)</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((entry, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{entry.name}</td>
//               <td>{entry.calmarRatio}</td>
//               <td>{entry.profit}</td>
//               <td>{entry.dailyProfit}</td>
//               <td>{entry.winRate}</td>
//               <td>{entry.price === '-' ? 'Free' : `₹${entry.price}`}</td>
//               <td>
//                 <button className="action-button">{entry.price === '-' ? 'View' : 'Buy'}</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Leaderboard;
