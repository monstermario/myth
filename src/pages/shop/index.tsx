import { useEffect, useState } from 'react';
import { FeaturedItem } from '../../components/shop/featuredItem';
import { PrintsItem } from '../../components/shop/printsItem';
import styles from './Shop.module.scss';

export type TypeFeatured = {
  img: string;
  title: string;
  core?: number;
  damageCap?: number;
  state?: string;
  price: number;
};

export type TypePrints = {
  img: string;
  title: string;
  type: string;
  credits: number;
};

export const ShopPage: React.FC = () => {
  const [featuredItems, setFeaturedItems] = useState<TypeFeatured[]>([]);
  const [printsItems, setPrintsItems] = useState<TypePrints[]>([]);

  useEffect(() => {
    setFeaturedItems([
      {
        img: '/img/shop/1.png',
        title: 'STOCK DEAGLE',
        core: 8000,
        price: 2000,
      },
      {
        img: '/img/shop/2.png',
        title: 'CUBAN LINK',
        state: 'COSMETIC',
        price: 500,
      },
      {
        img: '/img/shop/3.png',
        title: 'ANGELIC',
        core: 500,
        damageCap: 5,
        price: 5000,
      },
    ]);
    setPrintsItems([
      {
        img: '/img/crafting/1.png',
        title: 'Thermal Heat Sensor BP',
        type: 'EQUIPMENT',
        credits: 2500,
      },
    ]);
  }, []);

  return (
    <div className={styles.shopPage}>
      <h1>SHOP</h1>

      <h3>FEATURED</h3>
      <div className={styles.featuredItems}>
        {featuredItems.map((item, index) => (
          <FeaturedItem item={item} key={`featured-item-${index}`} />
        ))}
      </div>
      <p>Blueprint: 20,000 Credits</p>
      <button className={styles.small}>GET BP</button>

      <h3>BLUEPRINTS</h3>
      <div className={styles.featuredItems}>
        {printsItems.map((item, index) => (
          <PrintsItem item={item} key={`prints-item-${index}`} />
        ))}
      </div>
    </div>
  );
};
