export default function (value) {
  if (typeof value !== 'number') {
    return value;
  }

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return formatter.format(value);
}