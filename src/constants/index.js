export const topCardsContent = [
  {
    name: "Unit Arrived in (Not Received)",
    value: 24,
    cardColor: "rgba(21, 101, 216, 0.03)",
    cardBorder: "#1565D8",
  },
  {
    name: "PO Arrived in (Not Received)",
    value: 1,
    cardColor: "rgba(0, 156, 52, 0.03)",
    cardBorder: "#009C34",
  },
  {
    name: "Daily Received",
    value: 32,
    cardColor: "rgba(255, 153, 0, 0.05)",
    cardBorder: "#FF9900",
  },
  {
    name: "Daily Arrived in Units",
    value: 0,
    cardColor: "rgba(143, 90, 255, 0.03)",
    cardBorder: "#8F5AFF",
  },
];

export const shipmentTableData = [
  {
    username: "John Doe",
    email: "johndoe@gmail.com",
    companyName: "Sales",
    totalPOS: 15,
    sku: 15,
    units: 150,
  },
  {
    username: "Sarah Connor",
    email: "sarahconnor@gmail.com",
    companyName: "Sales",
    totalPOS: 20,
    sku: 20,
    units: 200,
  },
  {
    username: "Master Chief",
    email: "master_chief@gmail.com",
    companyName: "Sales",
    totalPOS: 10,
    sku: 10,
    units: 100,
  },
];

export const checkInTableData = [
  {
    poNumber: "ZL1S6M",
    fulfillment: "FBA",
    userData: { userName: "Steven", company: "Sales Express" },
    vendorData: { vendorName: "American Craft", adress: "22 H, Zadmerg St, LA" },
    quantityData: { order: 20, invoice: 30, working: 2, received: 8, remaining: 8, shipped: 5 },
    orderId: "MTL234G8",
    invoiceNumber: "N/A",
    createdDate: { date: "23 Dec, 2022", time: "02:36:06" },
    lastCheckedInData: { date: "23 Dec, 2022", time: "02:36:06" },
    expectedDeliveryDate: "13 Oct 2021",
  },
  {
    poNumber: "ZL5J6M",
    fulfillment: "FBM",
    userData: { userName: "John", company: "Sales Express" },
    vendorData: { vendorName: "American Craft", adress: "22 H, Zadmerg St, LA" },
    quantityData: { order: 20, invoice: 30, working: 2, received: 8, remaining: 8, shipped: 5 },
    orderId: "MTLRK4G",
    invoiceNumber: "N/A",
    createdDate: { date: "23 Dec, 2022", time: "02:36:06" },
    lastCheckedInData: { date: "23 Dec, 2022", time: "02:36:06" },
    expectedDeliveryDate: "13 Oct 2021",
  },
  {
    poNumber: "ZL1S6M",
    fulfillment: "FBA",
    userData: { userName: "Steven", company: "Sales Express" },
    vendorData: { vendorName: "Canadian Craft", adress: "22 H, Zadmerg St, LA" },
    quantityData: { order: 20, invoice: 30, working: 2, received: 8, remaining: 8, shipped: 5 },
    orderId: "MTL234G2",
    invoiceNumber: "N/A",
    createdDate: { date: "23 Dec, 2022", time: "02:36:06" },
    lastCheckedInData: { date: "23 Dec, 2022", time: "02:36:06" },
    expectedDeliveryDate: "13 Oct 2021",
  },
  {
    poNumber: "ZL1S6M",
    fulfillment: "FBA",
    userData: { userName: "Steven", company: "Sales Express" },
    vendorData: { vendorName: "American Craft", adress: "22 H, Zadmerg St, LA" },
    quantityData: { order: 20, invoice: 30, working: 2, received: 8, remaining: 8, shipped: 5 },
    orderId: "MTL234G1",
    invoiceNumber: "N/A",
    createdDate: { date: "23 Dec, 2022", time: "02:36:06" },
    lastCheckedInData: { date: "23 Dec, 2022", time: "02:36:06" },
    expectedDeliveryDate: "13 Oct 2021",
  },
];

export const checkInItemListOfGoods = [
  {
    title: "Nestle Raisinets Milk Chocolate",
    skuData: { sku: "SKU-WM-245668", asin: "SKU-WM-245668" },
    itemStatus: "Non Gated",
    quantityData: { order: 20, invoice: 30, working: 2, received: 8, remaining: 8, shipped: 5 },
  },
  {
    title: "Nestle Raisinets Milk Chocolate Powder",
    skuData: { sku: "SKU-WM-245667", asin: "SKU-WM-245667" },
    itemStatus: "Non Gated",
    quantityData: { order: 20, invoice: 30, working: 2, received: 8, remaining: 8, shipped: 5 },
  },
  {
    title: "Nestle Raisinets Milk Chocolate",
    skuData: { sku: "SKU-WM-245665", asin: "SKU-WM-245665" },
    itemStatus: "Non Gated",
    quantityData: { order: 20, invoice: 30, working: 2, received: 8, remaining: 8, shipped: 5 },
  },
];
