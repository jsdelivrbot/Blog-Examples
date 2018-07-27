import Vue from 'vue'
import Vuex from 'vuex'
import Constant from '../constant'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations
});

export default store;
