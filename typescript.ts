function debug(message: any): void {
  // console.log(message) //comment / uncomment to watch changes
}

// debug("Hello World")

let firstName: string = "Tyler"
let age: number = 22
let good: boolean = true

// firstName = 1 // gives error due to number/string differences,
                // JS would ignore and change variable to a number.

let fruits: string[] = [
  "Pineapple",
  " Raspberry",
  " Mango"
]

// debug(
// `My name is ${firstName}
// My age is ${age}.
// My favorite fruits are ${fruits}
//   `)
  
  enum taxForm {
    standard = "1040",
    childCredit = "1065",
    SCorp = "1120s",
    independentContractor = "1099"
  }
  
// debug(`You need form ${taxForm.independentContractor}`)
  
  // let fruits: string[] = [
  //   "Pineapple",
  //   "Raspberry",
  //   "Mango"
  // ]
function getFruit(index: number): string {
  return fruits[index]
}
// debug(`You chose a ${getFruit(0)}`)

// debug('OMG No Return')



interface teacher {
  name: string,
  yearsExperience: number,
  subjectsTaught: string[],
  age: number
}

let Damian: teacher = {
  name: "Damian",
  yearsExperience: 20,
  subjectsTaught: ["JavaScript", "TypeScript"],
  age: 49
}

console.log(Damian)