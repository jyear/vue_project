import http from "../../util/ajax";
interface State {
    name: string;
    age?: number;
    info?: Info;
}
interface Info {
    weight: number;
}

const state: State = {
    name: "张三",
    age: 15,
    info: {
        weight: 200
    }
};
const getters: any = {
    getName: (state: State) => {
        return state.name;
    }
};
const mutations: any = {
    changeName: (state: State, payload: any) => {
        state.name = state.name + payload;
        state.age = state.age + 1;
    }
};
const actions: any = {
    changeName: async (context: any) => {
        context.commit("changeName", 10);
    }
};
const userState = {
    state,
    getters,
    mutations,
    actions
};
export default userState;
