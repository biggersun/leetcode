export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment() {
    return {
        type: INCREMENT_COUNTER
    };
}

export function decrement() {
    var a = typeof "asdasd";
    console.log(typeof a);
    return {
        type: DECREMENT_COUNTER
    };
}

export function incrementIfOdd() {
    return (dispatch, getState) => {
        const {
            counter
        } = getState();

        if (counter % 2 === 0) {
            return;
        }
        dispatch(increment());
    };
}

export function incrementAsync(delay = 1000) {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment());
        }, delay);
    };
}
//一个最简单的action creator，作用是把事件转化成有语义的action
//像这里的，如果一个事件调用了change这个函数，就会返回一个action
//每个action都是一个对象，都有一个type的键
//我们在reducer中根据action的type来执行相应的操作