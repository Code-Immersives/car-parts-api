// mimic a database array of car objects
// cars table
// id | make | model | year // columns
// ------------------------
// 1 | ford | explorer | 2005   //rows

module.exports = [  // array of objects is called a collection
  {                 // the object is known as a document
                    // the keys in objects are known as properties
    'make': 'ford',
    'model': 'explorer',
    'year': 2005,
    'id': 17
  },
  {
    'make': 'honda',
    'model': 'civic',
    'year': 2017,
    'id': 11
  },
  {
    'make': 'bmw',
    'model': '328i',
    'year': 1997,
    'id': 1
  }
]
