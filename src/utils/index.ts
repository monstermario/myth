export const shortenAddress = (address: string) => {
  return address.slice(0, 5) + '...' + address.slice(-4);
};

export const getRegNumber = (str: string | number) => {
  return Number(str)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
