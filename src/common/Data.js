// data.js

export const initialData = [
    { key: '1', category: 'Revenue', '31-12-2021': 4357, '31-12-2022': 14333, '31-12-2024': 15213 },
    { key: '2', category: 'Operating Expenses', '31-12-2021': 35814, '31-12-2022': 30554, '31-12-2024': 29312 },
    { key: '3', category: 'Net Profit ', '31-12-2021': 5416, '31-12-2022': 6149, '31-12-2024': 5236 },
  ];

export const staticData = [

    { key: '1', category: 'accountingStandard', '31-12-2021': "IFRS", '31-12-2022': "IFRS", '31-12-2024': "IFRS" },
    { key: '2', category: 'auditMethod', '31-12-2021': "IFRS16 Adj", '31-12-2022': "IFRS16 Adj", '31-12-2024': "IFRS16 Adj" },
    { key: '3', category: 'displayCurrency', '31-12-2021': "HKD", '31-12-2022': "HKD", '31-12-2024': "HKD" },
    { key: '3', category: 'fxRate', '31-12-2021': 1.2826, '31-12-2022': 1.2826, '31-12-2024': 1.2826 },
  ];
  
  export const initialSubData = {
    '1': [
      { key: '1-1', category: 'Revenue 1', '31-12-2021': 2000, '31-12-2022': 2200, '31-12-2024': 5450 },
      { key: '1-2', category: 'Revenue 2', '31-12-2021': 7000, '31-12-2022': 2100, '31-12-2024': 780 },
      { key: '1-3', category: 'Revenue 3', '31-12-2021': 9600, '31-12-2022': 1800, '31-12-2024': 4100 },
      { key: '1-4', category: 'Revenue 4', '31-12-2021': 2500, '31-12-2022': 2300, '31-12-2024': 6300 },
      { key: '1-5', category: 'Revenue 5', '31-12-2021': 7200, '31-12-2022': 1900, '31-12-2024': 850 },
      { key: '1-6', category: 'Revenue 6', '31-12-2021': 8300, '31-12-2022': 2100, '31-12-2024': 4000 },
      { key: '1-7', category: 'Revenue 7', '31-12-2021': 6300, '31-12-2022': 3100, '31-12-2024': 4000 },
      { key: '1-8', category: 'Revenue 8', '31-12-2021': 6300, '31-12-2022': 2100, '31-12-2024': 3000 },
      { key: '1-9', category: 'Revenue 9', '31-12-2021': 1300, '31-12-2022': 3100, '31-12-2024': 4000 },
    ],
    '2': [
      { key: '2-1', category: 'Operating Expenses 1', '31-12-2021': 1400, '31-12-2022': 5200, '31-12-2024': 3300 },
      { key: '2-2', category: 'Operating Expenses 2', '31-12-2021': 1500, '31-12-2022': 4600, '31-12-2024': 2900 },
      { key: '2-3', category: 'Operating Expenses 3', '31-12-2021': 11000, '31-12-2022': 5300, '31-12-2024': 1000 },
      { key: '2-4', category: 'Operating Expenses 4', '31-12-2021': 1200, '31-12-2022': 4800, '31-12-2024': 3100 },
      { key: '2-5', category: 'Operating Expenses 5', '31-12-2021': 1600, '31-12-2022': 5000, '31-12-2024': 2800 },
      { key: '2-6', category: 'Operating Expenses 6', '31-12-2021': 3000, '31-12-2022': 5400, '31-12-2024': 900 },
      { key: '2-7', category: 'Operating Expenses 7', '31-12-2021': 2000, '31-12-2022': 2200, '31-12-2024': 5450 },
      { key: '2-8', category: 'Operating Expenses 8', '31-12-2021': 7000, '31-12-2022': 2100, '31-12-2024': 780 },
      { key: '2-9', category: 'Operating Expenses 9', '31-12-2021': 9600, '31-12-2022': 1800, '31-12-2024': 4100 },
      { key: '2-10', category: 'Operating Expenses 10', '31-12-2021': 2500, '31-12-2022': 2300, '31-12-2024': 6300 },
    ],
    '3': [
      { key: '3-1', category: 'Net Profit 1', '31-12-2021': 1200, '31-12-2022': 9600, '31-12-2024': 5000 },
      { key: '3-2', category: 'Net Profit 2', '31-12-2021': 100, '31-12-2022': 9200, '31-12-2024': 9000 },
      { key: '3-3', category: 'Net Profit 3', '31-12-2021': 1600, '31-12-2022': 8500, '31-12-2024': 7000 },
      { key: '3-4', category: 'Net Profit 4', '31-12-2021': 1100, '31-12-2022': 9800, '31-12-2024': 5400 },
      { key: '3-5', category: 'Net Profit 5', '31-12-2021': 1400, '31-12-2022': 8900, '31-12-2024': 6200 },
      { key: '3-6', category: 'Net Profit 6', '31-12-2021': 1500, '31-12-2022': 9400, '31-12-2024': 6800 },
           
      { key: '3-7', category: 'Net Profit 7', '31-12-2021': 2000, '31-12-2022': 2200, '31-12-2024': 5450 },
      { key: '3-8', category: 'Net Profit  8', '31-12-2021': 7000, '31-12-2022': 2100, '31-12-2024': 780 },
      { key: '3-9', category: 'Net Profit  9', '31-12-2021': 9600, '31-12-2022': 1800, '31-12-2024': 4100 },
      { key: '3-10', category: 'Net Profit  10', '31-12-2021': 2500, '31-12-2022': 2300, '31-12-2024': 6300 },
    ]
  };
  