export const formatPriceToWon = (number) => {
  return `${new Intl.NumberFormat("ko-KR").format(number)} 원`;
};
