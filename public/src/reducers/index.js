/**
 * Created by yujuan on 17-4-24.
 */
import handleCounter from './handle-counter';

function combineReducers(reducers) {
  return (state = {}, action)=> {
    return Object.keys(reducers).reduce((nextState, key)=> {
      nextState = reducers[key](state[key],action);
      console.log(nextState);
      return nextState;
    }, {})
  }
}

const  reducers = combineReducers({
  handleCounter
});

export default reducers;