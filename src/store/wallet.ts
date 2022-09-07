import { makeAutoObservable } from 'mobx';

export class Wallet {
  address = '';

  constructor() {
    makeAutoObservable(this);
  }
  getUserAddress() {}
}

export default new Wallet();
