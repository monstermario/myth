import { TypeFeatured } from '../../pages/shop';
import styles from './ShopItem.module.scss';
import { getRegNumber } from '../../utils';

type PageProps = {
  item: TypeFeatured;
};

export const FeaturedItem = ({ item }: PageProps) => {
  return (
    <div className={styles.featuredBox}>
      <img src={item.img} alt="" width="100%" />
      <h3>{item.title}</h3>
      {item.core && <p>{getRegNumber(item.core)} Core</p>}
      {item.damageCap && <p>+{item.damageCap}k DAMAGE CAP</p>}
      {item.state && <p>{item.state}</p>}
      <div className={styles.btn}>
        <p>
          {getRegNumber(item.price)}{' '}
          <img src="/img/coin_small.png" width="19px" alt="" />
        </p>
        <button>BUY</button>
      </div>
    </div>
  );
};
