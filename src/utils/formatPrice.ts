export function formatPrice(price: string): string {
  const priceNumber = parseFloat(price);
  if (isNaN(priceNumber)) return '';
  if (priceNumber < 0.01) return `${(priceNumber * 1000).toFixed(2)}e^6`;
  if (priceNumber < 1000) return `${priceNumber.toFixed(2)}`; 

  const suffixes = ['', 'k', 'm', 'b', 't'];
  const suffixIndex = Math.floor(Math.log10(Math.abs(priceNumber)) / 3);
  if (suffixIndex >= suffixes.length) return 'Number too large';

  const formattedValue = (priceNumber / Math.pow(10, suffixIndex * 3)).toFixed(2);
  return `${formattedValue}${suffixes[suffixIndex]}`; 
}


export function formatPercentage(percentage: string): string {
  const percentageNumber = parseFloat(percentage);
  if (isNaN(percentageNumber)) return '';

  return `${percentageNumber.toFixed(2)}`; 
}
