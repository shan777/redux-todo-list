export default (store) => (next) => (action) => {
    
    if(!action.payload || !action.payload.then) {
        return next(action); //move along.. no promise here so keep doing what you were doing
    }

    action.payload.then((resp) => {
        const newAction = {
            ...action, //...action is desconstrucing old action
            payload: resp
        };

        store.dispatch(newAction);
    });
}

// line 1 does same as below nested functions
// function(store) {
//     return function (next) {
//         return function(action) {
//             //code here
//         }
//     }
// }

