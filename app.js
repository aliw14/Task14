const customers = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    location: { city: "New York", country: "USA" },
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    location: { city: "Paris", country: "France" },
  },
  {
    id: 3,
    name: "Jenifer",
    email: "Jenifer@example.com",
    location: { city: "Roma", country: "Italy" },
  },
  {
    id: 4,
    name: "Gerald",
    email: "Gerald@example.com",
    location: { city: "Lissabon", country: "Portugal" },
  },
  {
    id: 5,
    name: "Ragnar",
    email: "Ragnar@example.com",
    location: { city: "Ankara", country: "Turkey" },
  },
  {
    id: 6,
    name: "Ali",
    email: "Ali@example.com",
    location: { city: "Baku", country: "Azerbaijan" },
  },
];

const orders = [
  { orderId: 101, customerId: 1, product: "Laptop", quantity: 1, price: 1200 },
  {
    orderId: 102,
    customerId: 2,
    product: "Smartphone",
    quantity: 2,
    price: 800,
  },
  {
    orderId: 103,
    customerId: 3,
    product: "Television",
    quantity: 3,
    price: 2000,
  },
  {
    orderId: 104,
    customerId: 4,
    product: "Lightning",
    quantity: 4,
    price: 20,
  },
  {
    orderId: 105,
    customerId: 5,
    product: "Charger",
    quantity: 5,
    price: 50,
  },
  {
    orderId: 106,
    customerId: 6,
    product: "Playstation",
    quantity: 6,
    price: 1000,
  },
];

// destructuring because  it's easier to access the properties of an object because orderId name and price give undefined as output.
const { orderId, price } = orders[0];
const { name } = customers[0];

// use map for access all emails of customers
const allEmails = customers.map((customer) => customer.email);

// use filter for filter which that price  is greater than 1000
const highPriceOrder = orders.filter((order) => order.price > 1000);

// use find for find customerName equal to Jenifer
const findByName = customers.find((customer) => customer.name === "Jenifer");

// use findIndex for find orderId = 105
const findIndex = orders.findIndex((order) => order.orderId === 105);

// use some for find  if any customer has country as USA
const findByCountry = customers.some(
  (customer) => customer.location.country === "USA"
);

// use foreach for get informations of all orders and find summary as mathematical process
let summary = 0;
orders.forEach((order) => {
  summary += order.quantity * order.price;
});

// use sort for sort curtomers sort alphabetically order
const sortByName = customers.sort((a, b) => a.name.localeCompare(b.name));

console.log(sortByName);
console.log(`Order: ${orderId} by ${name}: ${summary} for ${price} each.`);
console.log("FindByCountry: ", findByCountry);
console.log("All emails: ", allEmails);
console.log("High Price Order: ", highPriceOrder);
console.log("FindByName:", findByName);
console.log("FindIndex: ", findIndex);
