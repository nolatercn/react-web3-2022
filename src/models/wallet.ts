
export default {
  namespace: 'wallet',
  state: {
    address: '0x4e5E4480758D31CDFfDB165244787a2213483005',
    showAddress: '',
    isWalletStatus: true
  },
  reducers: {
    getWalletStatus(state: any) {
      console.log('判断是否连接钱包')
      return { ...state }
    },
    connect(state: any) {
      console.log('连接钱包', state);
      return { ...state }
    },
    handleAddressShow(state) {
      const sliceStr = address.slice(6, address.length - 6);
      return { ...state, showAddress: _.replace(address, sliceStr, '...') }
    }
  },
  effects: {},
  subscriptions: {},
};
