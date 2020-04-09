export enum Tabs {
  PRICE_BUY = 'PRICE-BUY',
  COST_EQUITY = 'COST-EQUITY',
  DIVIDEND = 'DIVIDEND',
  MONTHLY_DIVIDEND = 'MONTHLY_DIVIDEND',
  YEARLY_DIVIDEND = 'YEARLY_DIVIDEND',
  TOTAL_PORTFOLIO = 'TOTAL_PORTFOLIO',
  TOP_MOVERS = 'TOP_MOVERS'
}

export enum AdminTabs {
  STOCKS = 'STOCKS'
}

export const MenuTabs = {
  reportTabs: [
    { label: 'Portfolio', value: Tabs.TOTAL_PORTFOLIO, id: 0 },
    { label: 'Price/Buy', value: Tabs.PRICE_BUY, id: 1 },
    { label: 'Cost/Equity', value: Tabs.COST_EQUITY, id: 2 },
    { label: 'Dividends', value: Tabs.DIVIDEND, id: 3 },
    { label: 'Monthly Dividends', value: Tabs.MONTHLY_DIVIDEND, id: 4 },
    { label: 'Yearly Dividends', value: Tabs.YEARLY_DIVIDEND, id: 5 },
    { label: 'Top Movers', value: Tabs.TOP_MOVERS, id: 6 },

  ],

  adminTabs: [
    { label: 'Stocks', value: AdminTabs.STOCKS, id: 0 }
  ]
};

