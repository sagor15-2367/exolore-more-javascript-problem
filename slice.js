const friends=[12,45,32,53,23,62,69];
// const partial=friends.slice(2,5);


// console.log(partial);
// console.log(friends.slice(2,6));

// console.log(friends);

//remove element from an array
//and .if necessary,inserts new element in their place,
//will change the orginal array

const partial=friends.splice(2,3,33,33,44,77);
console.log(partial);
//remove array
console.log(friends);
