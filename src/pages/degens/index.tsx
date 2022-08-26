import { useState } from 'react';
import { DegenDetail } from '../../components/degens/degenDetail';
import { DegenList } from '../../components/degens/degenList';
import { STATUS } from '../../utils';
import { mockupDegens } from '../../utils/mockup';

export type TypeInventory = {
  img: string;
  title: string;
  type: string;
  description: string;
  status: number;
  amount: number;
  equipped: boolean;
};

export type TypeDegen = {
  img: string;
  name: string;
  role: string;
  state: {
    score: number;
    maxDamage: number;
    damageCap: number;
    status: STATUS;
  };
  inventory: TypeInventory[];
};

export const DegensPage: React.FC = () => {
  const [degens, setDegens] = useState<TypeDegen[]>(mockupDegens);
  const [selectedDegen, setSelectedDegen] = useState<TypeDegen | null>(null);

  return selectedDegen ? (
    <DegenDetail selectedDegen={selectedDegen} />
  ) : (
    <DegenList
      degens={degens}
      selectHandler={(degen) => {
        setSelectedDegen(degen);
      }}
    />
  );
};
