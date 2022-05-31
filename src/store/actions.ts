import {ADDCOUNT} from './constants'

const actions = {
    asyncAddStoreCount(store:any, payload:number) { // 第一个参数是vuex固定的参数，不需要手动去传递
      store.commit(ADDCOUNT, payload)
    },
  }
  export { actions }
6