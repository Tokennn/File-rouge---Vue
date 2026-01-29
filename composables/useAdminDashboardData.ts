export const useAdminDashboardData = () => {
  const stats = [
    { label: 'Chiffre du jour', value: '4 820 €', delta: '+12%', caption: 'Basé sur 38 commandes' },
    { label: 'Visiteurs actifs', value: '312', delta: '+8%', caption: 'Pic atteint à 14h' },
    { label: 'Panier moyen', value: '127 €', delta: '+4%', caption: 'Stable cette semaine' },
    { label: 'Taux de retour', value: '2.1%', delta: '-0.6%', caption: 'En baisse continue' }
  ]

  const orders = [
    { id: '#5482', customer: 'Lina R.', items: 'Aether Run x1 · Metro Drift x1', total: '278 €', status: 'Expédiée' },
    { id: '#5481', customer: 'Nolan P.', items: 'Trail Pulse x1', total: '159 €', status: 'En préparation' },
    { id: '#5480', customer: 'Aya M.', items: 'Studio Flow x2', total: '238 €', status: 'Expédiée' }
  ]

  const performances = [
    { name: 'Aether Run', sales: '118 ventes', delta: '+14%' },
    { name: 'Metro Drift', sales: '96 ventes', delta: '+9%' },
    { name: 'Trail Pulse', sales: '84 ventes', delta: '+6%' },
    { name: 'Studio Flow', sales: '75 ventes', delta: '+3%' },
    { name: 'Civic Echo', sales: '69 ventes', delta: '+5%' }
  ]

  return { stats, orders, performances }
}
