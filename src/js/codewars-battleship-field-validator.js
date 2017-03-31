/*
* created by Sestri4kina on 31.03.2017
*
*
*/
function checkField(field) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if ( (field[i][j+1] === 1 && field[i+1][j] === 1)
      || (field[i][j] === 1 && field[i+1][j+1] === 1) ) return false;
    }
  }
  return true;
}

function findHorizontalLength(i,j,field) {
  let len = 1;
  for (let k = 1; k < 4; k++) {
    if (field[i][j+k] === 1) {
      len++;
      field[i][j+k] = 0;
    }
    else break;
  }
  return len;
}

function findVerticalLength(i,j,field) {
  let len = 1;
  for (let k = 1; k < 4; k++) {
    if (field[i+k][j] === 1) {
      len++;
      field[i+k][j] = 0;
     }
     else break;
  }
  return len;
}

function copy(arr) {
  let newArr = [],
    limit = arr.length;
  for (let i = 0; i < limit; i++) {
    newArr.push(arr[i].slice(0));
  }
  return newArr;
}

function validateBattlefield(inputField) {
  let field = copy(inputField);
  if (!checkField(field)) return false;
  let ships = [
  {len: 1, amount: 4, counter: 0},
  {len: 2, amount: 3, counter: 0},
  {len: 3, amount: 2, counter: 0},
  {len: 4, amount: 1, counter: 0}
  ];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (field[i][j] === 1 && field[i][j+1] === 1) {
        let shipLength = findHorizontalLength(i,j,field),
          ship = ships.find(ship => ship.len === shipLength);
        ship.counter++;
        field[i][j] = 0;
        console.log(`${i} ${j} ${shipLength} H`);
      }
      else if (field[i][j] === 1 && field[i+1][j] === 1) {
        let shipLength = findVerticalLength(i,j,field),
          ship = ships.find(ship => ship.len === shipLength);
        ship.counter++;
        field[i][j] = 0;
        console.log(`${i} ${j} ${shipLength} V`);
      }
      else if (field[i][j] === 1) {
        let oneShip = ships.find(ship => ship.len === 1);
        oneShip.counter++;
        field[i][j] = 0;
        console.log(`${i} ${j} 1`);
        }
    }
  }
  console.log(ships);
  return ships.every(ship => ship.amount === ship.counter);
}

let result = validateBattlefield(
                [[1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                 [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                 [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
                 [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                 [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                 [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
console.log(`Should return: true. Case#1: ${result}`);
