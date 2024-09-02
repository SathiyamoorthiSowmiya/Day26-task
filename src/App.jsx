import React from 'react';
import PriceCard from './pricecard.jsx';
import './App.css';

const App = () => {
  const plans = [
    {
      title: 'FREE',
      price: '$0/month',
      users: null,
      storage: '50GB',
      publicProjects: true,
      communityAccess: true,
      privateProjects: false,
      phoneSupport: false,
      subdomain: false,
      reports: false
    },
    {
      title: 'PLUS',
      price: '$9/month',
      users: 5,
      storage: '50GB',
      publicProjects: true,
      communityAccess: true,
      privateProjects: true,
      phoneSupport: true,
      subdomain: true,
      reports: false
    },
    {
      title: 'PRO',
      price: '$49/month',
      users: 'Unlimited',
      storage: '50GB',
      publicProjects: true,
      communityAccess: true,
      privateProjects: true,
      phoneSupport: true,
      subdomain: true,
      reports: true
    }
  ];

  const PriceCard = ({ title, price, users, storage, publicProjects, communityAccess, privateProjects, phoneSupport, subdomain, reports }) => {
    const checkMark = <span className="check">&#10003;</span>; // ✓
    const crossMark = <span className="cross">&#10005;</span>; // ✖
  
    return (
      <div className="price-card">
        <h3>{title}</h3>
        <h4>{price}</h4>
        <ul>
    
          <li>{users ? checkMark : crossMark} {users ? `${users} Users` : 'Single User'}</li>
          <li>{checkMark} {storage} Storage</li>
          <li>{publicProjects ? checkMark : crossMark} Unlimited Public Projects</li>
          <li>{communityAccess ? checkMark : crossMark} Community Access</li>
          <li className={privateProjects ? '' : 'disabled'}>{privateProjects ? checkMark : crossMark} Unlimited Private Projects</li>
          <li className={phoneSupport ? '' : 'disabled'}>{phoneSupport ? checkMark : crossMark} Dedicated Phone Support</li>
          <li className={subdomain ? '' : 'disabled'}>{subdomain ? checkMark : crossMark} Free Subdomain</li>
          <li className={reports ? '' : 'disabled'}>{reports ? checkMark : crossMark} Monthly Status Reports</li>
        </ul>
        <button>BUTTON</button>
      </div>
    );
  }

  return (
    <div className="pricing">
  
      {plans.map(plan => (
        <PriceCard key={plan.title} {...plan} />
      ))}
    </div>
  );
}

export default App;
