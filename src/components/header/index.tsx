import { getRegNumber, shortenAddress } from '../../utils';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>MYTH</div>
      <div className={styles.wallet}>
        <div className={styles.balance}>
          <img src="/img/coin.png" width="40px" alt="" />
          <div className={styles.balanceAmount}>
            MYTHRAL
            <span>{getRegNumber(7267)}</span>
          </div>
        </div>
        <div className={styles.account}>
          <div className={styles.avatar}>
            <img src="/img/avatar.png" width="44px" alt="" />
            <span></span>
          </div>
          <p>{shortenAddress('0x93c5fe5242697aee0c5059dDD36034390E6A494b')}</p>
        </div>
      </div>
    </div>
  );
};
