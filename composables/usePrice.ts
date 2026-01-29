export const usePrice = () => {
  const formatPrice = (value: number) => `${value.toFixed(0)} €`
  return { formatPrice }
}
