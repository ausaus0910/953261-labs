// 953261 Lab 2 — Kad Café daily report
// Run:  npm start
import { menu } from "./data/menu.js";
import { orders } from "./data/orders.js";
import { menuLine, orderTotal, averageOrder, availableItems, findItem } from "./src/cafe.js";

console.log("=== Kad Café menu ===");
// menu.forEach((item) => console.log(menuLine(item)));

console.log("\n=== Today's orders ===");
// TODO (Part D): print one line per order, e.g.  "A001 Mint — 160 THB"
orders.forEach((order) => {
    const total = orderTotal(order, menu);
    console.log(
        `${order.id} ${order.customer} — ${total}THB`    
    );
});

console.log("\n=== Summary ===");
// TODO (Part D): print the number of orders, the total sales and the average order.
const totalSales = orders
    .map((order) => orderTotal(order, menu))
    .reduce((sum, orderTotal) => sum + orderTotal, 0);
const avgOrder = averageOrder(orders, menu);

console.log(`Orders: ${orders.length}`);
console.log(`Total sales: ${totalSales} THB`)
console.log(`Average order: ${avgOrder} THB`)

// TODO (Part D): print the result of your own function (see the lab sheet).
