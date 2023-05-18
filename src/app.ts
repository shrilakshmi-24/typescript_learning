// let sales:number=123_345_567;
// let course:string="typescript";
// let is_published:boolean=true;

//arrays
let numbers:number[]=[1,2,3]

//tuple
let user:[number,string]=[1,'shree']
user.push(3)
console.log(user)

//enums
// const small=1
// const medium=2
// const large=3

const enum Size {Small=1,Medium,Large}
let mySize:Size=Size.Medium
console.log(mySize)

//functions
function calulate(income:number,taxYear?:number):number{
    if(taxYear||2024>2023){
        return 1.3*income+income
    }
    return 0
}
calulate(3000)


//type alias
type Employee={
    readonly id:number,
    name:string

}

//objects
let employee:Employee={
    id:1,
    name:"shree"

}
// employee.id=0    //error bcz readonly cannot be modified

//unions
function kgToLbs(weight:number|string):number{
    if(typeof weight === 'number'){
        return weight * 2.2
    }
    return parseInt(weight)*2.2
}
const ans:number=kgToLbs('55kg')
console.log(ans)

//literals
type Quantity=50|100
let quantity:Quantity=100
type metric='cm'|'m'

//nullable

function greet(name:string|undefined|null){
    if(name)
       { console.log(name.toUpperCase())}
    else{
        console.log('hola')
    }
}
greet(null)

//optional chaining

type Customer={
    birthday:Date
}
function getCustomer(id:number):Customer|null{
    return id===0?null:{birthday:new Date()}
}
let customer=getCustomer(0)
//? is optional property access operator
console.log(customer?.birthday)


//classes
class Invoice{
    client:string
    details:string
    amount:number
    constructor(c:string,d:string,a:number){
        this.client=c,
        this.details=d,
        this.amount=a
    }
    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const inOne=new Invoice('shree','work on website',230)
console.log(inOne.format())




