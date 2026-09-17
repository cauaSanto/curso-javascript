//3 filter

const arr= [1,2,3,4,5]

console.log(arr)

const highNumber= arr.filter((n)=>{
    if(n>=3){
        return n
    }
})

console.log(highNumber);

const users=[{name: "Matheus",avilable:true},{name: "Pedro",avilable:false},{name: "João",avilable:false},{name: "Marcos",avilable:true}];

const availableusers= users.filter((user)=>user.avilable);
const notavailableusers= users.filter((user)=>!user.avilable);

console.log(availableusers);
console.log(notavailableusers);