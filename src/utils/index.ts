export const shortenAddress = (address: string): string => {
  return address.slice(0, 5) + '...' + address.slice(-4);
};

export const getRegNumber = (str: string | number): string => {
  return Number(str)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export enum STATUS {
  'BOUNTY',
}
