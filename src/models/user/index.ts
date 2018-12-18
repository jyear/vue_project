import http from "../../util/ajax";
interface State {
    name: string;
    age?: number;
    info?: Info;
}
interface Info {
    weight: number;
}
export const state: State = {
    name: "张三",
    age: 15,
    info: {
        weight: 200
    }
};
export const getter = {
    getName: (state: State) => {
        return state.name;
    }
};

export const mutations = {
    changeName: (state: State, payload: any) => {
        state.name = state.name + payload;
        state.age = state.age + 1;
    }
};
export const actions = {
    changeName: async (context: any) => {
        let s = await http.get({
            url: ""
        });
        context.commit("changeName", 10);
    }
};
const userState = {
    state,
    mutations,
    actions
};
export default userState;
