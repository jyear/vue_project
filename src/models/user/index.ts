export interface State {
    name: string;
}
export const state: State = {
    name: "张三"
};
export const getter = {
    getName: ({ user }: any) => {
        return user.name;
    }
};
export const mutations = {
    changeName: ({ user }: any) => {
        user.name = user.name + 1;
    }
};
export const actions = {
    changeName: (context: any) => {
        context.commit("changeName");
    }
};
