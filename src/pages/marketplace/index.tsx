import { IconMarketPlace } from '../../utils/icons';
import styles from './Marketplace.module.scss';

export const MarketplacePage: React.FC = () => {
  return (
    <div className={styles.marketplacePage}>
      <p>VISIT EXTERNAL LINK</p>
      <h1>NFT MARKETPLACE</h1>
      <IconMarketPlace />
    </div>
  );
};
