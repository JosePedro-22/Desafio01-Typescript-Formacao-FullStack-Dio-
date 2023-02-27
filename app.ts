import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "José Pedro", 25);
//console.log(peopleAccount);
peopleAccount.deposit(2500);
peopleAccount.withdraw(3000);
const companyAccount: CompanyAccount = new CompanyAccount(
  "DIO.FormacaoTypescript",
  20
);
companyAccount.deposit(500);
//console.log(companyAccount);
