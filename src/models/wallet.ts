
export default {
  namespace: 'wallet',
  state: {
    address: ''
  },
  reducers: {
    connect(state) {
      console.log('连接钱包', state);
    }
  },
  effects: {},
  subscriptions: {},
};
