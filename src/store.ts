// store.js
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import {
    State as UserState,
    state as user,
    getter,
    mutations as UserMutations,
    actions as UserAction
} from "./models/user/";

export interface State {
    User: UserState;
}
const store = new Vuex.Store({
    // 定义状态
    state: {
        ss: 1,
        user
    },
    getters: {
        ...getter
    },
    mutations: {
        ...UserMutations
    },
    actions: {
        ...UserAction
    }
});

export default store;
