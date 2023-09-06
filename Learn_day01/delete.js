db.inventory.deleteMany({ status : "A" })

// db.collection.deleteOne(
//     <filter>,
//     {
//        writeConcern: <document>,
//        collation: <document>,
//        hint: <document|string>        // Available starting in MongoDB 4.4
//     }
//  )