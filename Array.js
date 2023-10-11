const country='bangladesh';
const age=40;
const isTndependent=true;
const student={id:191,class:11,name:'sagor'};
const friends=[12,13,14,15,16,17];
function add(num1,num2){
    return num1+num2;
}


console.log(typeof country);
console.log(typeof age);
console.log(typeof isTndependent);
console.log(typeof student);
//cleck array using Array.isArray
console.log(Array.isArray(friends));
console.log(add);

// ---------------------
console.log(friends.includes(15));
console.log(friends.includes(21));

if(friends.indexOf(32)){

}

//concat
const newFriendAge=[12,39,48,24,12,56];
const allfriend=newFriendAge.concat(friends);

console.log(allfriend);