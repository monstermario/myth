import styles from './Sidebar.module.scss';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  const menus: any = {
    play: [
      { icon: 'degens', text: 'DEGENS', link: '/degens' },
      { icon: '', text: 'MISSIONS', link: '/missions' },
      { icon: 'fight', text: 'FIGHT', link: '/fight' },
      { icon: 'crafting', text: 'CRAFTING', link: '/crafting' },
    ],
    markets: [
      { icon: 'shop', text: 'SHOP', link: '/shop' },
      { icon: '', text: 'MARKETPLACE', link: '/marketplace' },
      { icon: 'trade', text: 'TRADE', link: '/trade' },
    ],
    other: [
      { icon: '', text: 'STAKING', link: '/staking' },
      { icon: 'games', text: 'GAMES', link: '/games' },
    ],
  };
  const location = useLocation();
  return (
    <div className={styles.sidebarContainer}>
      {Object.keys(menus).map((title) => (
        <div className={styles.sidebarBox} key={`menu-title-${title}`}>
          <h3>{title.toUpperCase()}</h3>
          {menus[title].map((item: any) => (
            <Link
              className={`${styles.menuItem} ${
                location.pathname === item.link && styles.active
              }`}
              to={item.link}
              key={`menu-${item.text}`}
            >
              {item.icon && <img src={`/img/icons/${item.icon}.svg`} alt="" />}
              {item.text}
            </Link>
          ))}
        </div>
      ))}
      <div className={`${styles.sidebarBox} ${styles.last}`}>
        <h3>SOCIALS</h3>
      </div>
    </div>
  );
};
