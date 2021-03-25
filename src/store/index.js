import {
    createStore
} from 'vuex';

export default createStore({
    state: {
        num: 123
    },
    mutations: {
        add(state) {
            state.num += 1;
        }
    },
    actions: {
        addNum(ctx) {
            ctx.state.num += 1
        }
    }
});