import { TypeInventory } from '../../pages/degens';
import { getRegNumber } from '../../utils';
import { IconClose } from '../../utils/icons';
import styles from './Degens.module.scss';

type PageProps = {
  inventory: TypeInventory;
  closeHandler: () => void;
};

export const InventoryDetail = ({ inventory, closeHandler }: PageProps) => {
  return (
    <div className={styles.inventoryModal}>
      <div className={styles.container}>
        <div className={styles.close} onClick={closeHandler}>
          <IconClose />
        </div>
        <h2>{inventory.title}</h2>
        <h3>{inventory.type}</h3>
        <p>{inventory.description}</p>
        <div className={styles.box}>
          <div className={styles.info}>
            <h4>STATS:</h4>
            <p>+{getRegNumber(inventory.status)} CORE</p>
            <h4>QUICK ACTIONS</h4>
            <button>{inventory.equipped ? 'UNEQUIP' : 'EQUIP'}</button>
            <button>UPGRADE</button>
            <button className={styles.sell}>SELL</button>
          </div>
          <div className={styles.img}>
            <img src={inventory.img} width="100%" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
