import { makeAutoObservable } from 'mobx';
import { isMetaMask } from '@/decorator';
import { ethers } from 'ethers';
import { message } from 'antd';
export class Wallet {
  address = '';
  currentNetwork = '';
  isWalletStatus = true;
  isMetaMask = false;
  ethBalance = '';
  constructor() {
    makeAutoObservable(this);
    if (!window.ethereum) {
      message.destroy();
      message.error(' metamask not exist', 5);
    }
    this.isMetaMask = !!window.ethereum;
  }
  async getUserAddress() {
    if (this.isMetaMask) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const [address] = await provider.send('eth_requestAccounts', []);

      this.address = address;

      this.ethBalance = ethers.utils.formatEther(
        await provider.getBalance(address)
      );

      this.currentNetwork = await provider.getNetwork();
    }
  }
}

export default new Wallet();
