import styles from './ShopItem.module.scss';
import { getRegNumber } from '../../utils';
import { TypePrints } from '../../pages/shop';

type PageProps = {
  item: TypePrints;
};

export const PrintsItem = ({ item }: PageProps) => {
  return (
    <div className={styles.printsBox}>
      <img src={item.img} alt="" width="100%" />
      <h3>{item.title}</h3>
      <p>{item.type}</p>
      <div className={styles.btn}>
        <p>{getRegNumber(item.credits)}</p>
        <button>GET BP</button>
      </div>
    </div>
  );
};
