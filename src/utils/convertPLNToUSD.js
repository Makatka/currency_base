export const convertPLNToUSD = (PLN) => {

  const PLNtoUSD = PLN / 3.5;
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
if (typeof PLN === "string" || !PLN && PLN !== null){
  return NaN
}
if (typeof PLN === "object" || typeof PLN === "function" || PLN === null) {
  return "Error"
}
 if (PLN < 0){
  return "$0.00"
}

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');


}