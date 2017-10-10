db.parts.aggregate([
   {
      $project: {
         cars: {
            $filter: {
               input: "$cars",
               as: "car",
               cond: { $in: [ "59d53cf0237f82566f3cbbb7", "$cars"  ] }
            }
         }
      }
   }
])


{
    "_id": "59dd230a7fa10cc685296c3b",
    "category": "body",
    "qty": 10,
    "name": "Daystar Dash Panel",
    "cars": [
    "59d53cf0237f82566f3cbbb7"
    ],
    "subCategory": [
    "interior",
    "accessories"
    ]
},







db.parts.aggregate([
  {
    $project: {
      "main category" : "$category",
      "has car" : {
        $in: [ "59d53cf0237f82566f3cbbb7", "$cars" ]
      }
    }
  }
])
