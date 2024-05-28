// import React from 'react';
// import Leaderboard from './components/Leaderboard';
// // import Navbar from './components/Navbar';
// // import Footer from './components/Footer';

// function App() {
//   return (
//     <div>
      
//       <div className="container">
//         <Leaderboard />
//       </div>
      
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Leaderboard from './components/Leaderboard';


const data = [
  { name: "Selling with re entr", calmarRatio: 3.96, profit: 381845, dailyProfit: 319.54, winRate: 0.65, price: '-' },
  { name: "strategy_name", calmarRatio: 3.62, profit: 268872.5, dailyProfit: 216.31, winRate: 0.64, price: 500 },
  { name: "Based on premium and", calmarRatio: 3.42, profit: 255425, dailyProfit: 208.51, winRate: 0.64, price: '-' },
  { name: "strategy_name", calmarRatio: 3.22, profit: 370845, dailyProfit: 303.47, winRate: 0.65, price: '-' },
  { name: "strategy_name", calmarRatio: 3.22, profit: 370845, dailyProfit: 303.47, winRate: 0.65, price: '-' },
  { name: "Based on premium wit", calmarRatio: 3.01, profit: 135980, dailyProfit: 185.77, winRate: 0.49, price: '-' },
  { name: "strategy_name", calmarRatio: 2.76, profit: 267867.5, dailyProfit: 218.49, winRate: 0.60, price: '-' }
];

function App() {
  return (
    <div className="App">
      <Leaderboard data={data} />
    </div>
  );
}

export default App;
