export interface userType {
  name: string,
  address: string
}

export default {
  namespace: '',
  state: {
    name: '章三',
    address: '0xx'
  },
  reducers: {
    connectMask(state: userType, action: { paylod: any }) {
      return { ...state, ...action.paylod }

    }
  }
}