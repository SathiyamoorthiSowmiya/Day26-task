import React from 'react';

const PriceCard = ({ title, price, users, storage, publicProjects, communityAccess, privateProjects, phoneSupport, subdomain, reports }) => {
  return (
    <div className="price-card">
      <h3>{title}</h3>
      <h4>{price}</h4>
      <ul>
        <li>{users ? `${users} Users` : 'Single User'}</li>
        <li>{storage} Storage</li>
        <li>{publicProjects ? 'Unlimited Public Projects' : 'Limited Public Projects'}</li>
        <li>{communityAccess ? 'Community Access' : 'No Community Access'}</li>
        <li className={privateProjects ? '' : 'disabled'}>{privateProjects ? 'Unlimited Private Projects' : 'No Private Projects'}</li>
        <li className={phoneSupport ? '' : 'disabled'}>{phoneSupport ? 'Dedicated Phone Support' : 'No Phone Support'}</li>
        <li className={subdomain ? '' : 'disabled'}>{subdomain ? 'Free Subdomain' : 'No Subdomain'}</li>
        <li className={reports ? '' : 'disabled'}>{reports ? 'Monthly Status Reports' : 'No Status Reports'}</li>
      </ul>
      <button>BUTTON</button>
    </div>
  );
}

export default PriceCard;
