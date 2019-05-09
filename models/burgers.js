//import our connection
const connection = require('./connection');


// create a function that reads from the burgerz table
// SELECT * FROM burgerz
const findAll = () => {
  // create a new Promise
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgerz', function(err, dbBurgerData) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(dbBurgerData);
    });
  });
};

// find a burger by id
// SELECT * FROM burgerz WHERE id = ?
const findById = burgerId => {
  // create a new Promise
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgerz WHERE id = ?', [burgerId], function(err, dbBurgerData) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(dbBurgerData);
    });
  });
};

// CREATE/INSERT
// INSERT INTO burgerz SET ? ({name: "name"})
const create = burgerDataObj => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO burgerz SET ?', [burgerDataObj], function(err, dbBurgerData) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(dbBurgerData);
    });
  });
};

// UPDATE burgerz (set value of "devoured" to true or false)
// UPDATE burgerz SET devoured = ? WHERE id = ? ([true, 2])
const update = (devouredValue, burgerId) => {
  return new Promise((resolve, reject) => {

    // set devouredValue to boolean true/false
    devouredValue = (devouredValue === "true") 
      ? true : false;

    connection.query("UPDATE burgerz SET devoured = ? WHERE id = ?", [devouredValue, burgerId], function(err, dbBurgerData) {

      if (err) {
        return reject(err);
      }
      else if (dbBurgerData.changedRows === 0) {
        return reject({message: "You probably ate the wrong burger"});
      }
      else {
        return resolve(dbBurgerData);
      }
    })
  })
}


// export all of our new functions as methods of an object
module.exports = {
  findAll,
  findById,
  create,
  update,
};
