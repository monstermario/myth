import { useState } from 'react';
import { TypeBluePrints } from '../../pages/crafting';
import { getRegNumber } from '../../utils';
import { IconCheck, IconClose } from '../../utils/icons';
import styles from './Crafting.module.scss';

type PageProps = {
  item: TypeBluePrints;
  closeHandler: () => void;
};

export const DetailBlueprint = ({ item, closeHandler }: PageProps) => {
  const [hasAmount, setHasAmount] = useState<number[]>([23, 23, 1]);
  return (
    <div className={styles.printModal}>
      <div className={styles.container}>
        <div className={styles.close} onClick={closeHandler}>
          <IconClose />
        </div>
        <h2>{item.title}</h2>
        <h3>{item.type}</h3>
        <p>{item.description}</p>
        <div className={styles.box}>
          <div className={styles.info}>
            <h4>STATS:</h4>
            <p>+{getRegNumber(item.stats.core)} CORE</p>
            <p>
              +{item.stats.damageCap} DAMAGE CAP
              <br />
              <span>(+{item.stats.damageCap}% BUFF)</span>
            </p>
            <h4>Required:</h4>
            {item.required.map((requiredItem, index) => (
              <div
                className={styles.requiredItem}
                key={`required-item-${index}`}
              >
                <img src={requiredItem.img} alt="" />
                <div className={styles.requiredItemInfo}>
                  <h5>{requiredItem.title}</h5>
                  <p
                    className={
                      hasAmount[index] >= requiredItem.amount
                        ? styles.checked
                        : ''
                    }
                  >
                    {hasAmount[index]}/{requiredItem.amount}
                    {hasAmount[index] >= requiredItem.amount && <IconCheck />}
                  </p>
                </div>
              </div>
            ))}
            <button
              className={styles.sell}
              disabled={
                item.required.filter((x, i) => x.amount > hasAmount[i]).length >
                0
              }
            >
              CRAFT
            </button>
          </div>
          <div className={styles.img}>
            <img src={item.img} width="100%" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
