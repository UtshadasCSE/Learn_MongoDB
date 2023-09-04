db.inventory.insertOne({
  item: "canvas",
  qty: 100,
  tags: ["cotton"],
  size: { h: 28, w: 25.5, uom: "cm" },
});

db.inventory.insertMany([
  {
    item: "canvas",
    qty: 100,
    tags: ["cotton"],
    size: { h: 28, w: 25.5, uom: "cm" },
  },
  {
    item: "canvas",
    qty: 100,
    tags: ["bottom"],
    size: { h: 29, w: 35.5, uom: "cm" },
  },
  {
    item: "canvas",
    qty: 100,
    tags: ["cottom"],
    size: { h: 30, w: 45.5, uom: "cm" },
  },
]);
