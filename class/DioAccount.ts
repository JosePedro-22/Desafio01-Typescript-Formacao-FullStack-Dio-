export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;
  private valorDeposito: number = 0;
  private valorSaque: number = 0;
  private saldo: number = 0;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (valorDeposito: number): void => {
    if (this.validateStatus()) {
      this.saldo = valorDeposito;
      console.log("Voce depositou e seu saldo em conta é: " + this.saldo);
    }
  };

  withdraw = (valorSaque: number): void => {
    if (this.validateStatus() && this.saldo >= valorSaque) {
      this.saldo -= valorSaque;
      console.log("Operacao realizada com sucesso!");
    } else console.log("Desculpe voce não realizar esta operacao!");
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
