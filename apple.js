// let num1: number = '1';
// function calculate(num1, num2) {
//     return num1 + num2;
// }
// console.log(calculate(num1, 3));
// function getTotal(numbers) {
//     return numbers.reduce(function (acc, item) {
//         return acc + item;
//     }, 0);
// }
// console.log(getTotal([3, 2, 1]));
// const User = {
//     firstName: 'John',
//     lastName: 'Doe',
//     role: 'professor',
//  }
//  console.log(User);
// type alias
// type User = {
//     name: string;
//     age: number;
//     address?: string;
// }
// const user: User = {
//     name: 'Naseem M',
//     age: 21,
//     address: 'main street'
// }
// function login(userData: user): User {
//     return userData;
// }
// console.log(login(user));
// type ID = number | string;
// const UserId: ID = 123;
// Interfaces
// interface Trasaction {
//     payerAccountNumber: number;
//     payeeAccountNumber: number;
// }
// interface BankAccount {
//     accountNumber: number;
//     accountHolder: string;
//     blance: boolean;
//     transactions: Trasaction[]
// }
// const transaction1: Trasaction ={
//     payerAccountNumber: 123,
//     payeeAccountNumber: 455
// }
// const transaction2: Trasaction = {
//     payerAccountNumber: 123,
//     payeeAccountNumber: 456,
// }
// const bankAccount: BankAccount = {
//     accountNumber: 123,
//     accountHolder: 'john Doe',
//     balance: 4000,
//     isActive: true,
//     transactions: [transaction1, transaction2],
// };
// Extend
// interface Book {
//     name: string;
//     price: number;
// }
// interface Ebook extends Book {
//     name: string;
//     price: number;
//     filesize: number;
//     format: string;
// }
// interface AudioBook extends EBook {
//     name: string;
//     price: number;
//     filesize: number;
//     format: string;
//     duration: number;
// }
// const book: AudioBook = {
//     name: 'Atomic habits',
//     price: 1200,
//     filesize: 300,
//     format: 'pdf',
//     duration: 4,
// };
// interface Book {
//     name: string;
//     price: number;
// }
// interface Book {
//     size: number;
// }
// const book: Book = {
//     name: 'Atomic habits',
//     price: 1200,
//     size: 45,
// };
// type Book = {
//     name: string;
//     price: number;
// }
// type Book = {
//     size: number;
// }
// type SanitizedString = string;
// type EvenNumber = number;
// interface SanitizedString extends string {
// }
// Unions
// type ID = number | string;
// function printId(id: ID) {
//     if (typeof id === 'string') {
//         console.log(id.toUpperCase());
//     } else {
//         console.log(id);
//     }
// }
// printId('1');
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree('Hello'));
