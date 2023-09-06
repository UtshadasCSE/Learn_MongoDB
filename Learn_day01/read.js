// db.inventory.find()-fetch all documents

db.inventory.find({ qty: 90 });

db.inventory.find({ $or: [{ status: "A" }, { qty: "B" }] });
