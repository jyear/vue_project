export interface State {
    name: string;
}
export const state: State = {
    name: "张三"
};
export const getter = {
    getName: (state: any) => {
        return state.name;
    }
};
export const mutations = {
    changeName: (state: any) => {
        state.name = state.name + 1;
    }
};
export const actions = {
    changeName: (context: any) => {
        context.commit("changeName");
    }
};
const userState = {
    state,
    mutations,
    actions
};
export default userState;
