import { makeAutoObservable } from 'mobx';

export class Wallet {
  address = '';
  isWalletStatus = true

  constructor() {
    makeAutoObservable(this);
  }
  getUserAddress() { }
}

export default new Wallet();
