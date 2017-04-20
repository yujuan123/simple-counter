/**
 * Created by yujuan on 17-4-20.
 */
const handleCounter = (state = {count:0}, action)=> {
  switch(action.type){
    case 'COUNTER_INCRE':
      return Object.assign({}, state, { count: state.count + 1});
    case 'COUNTER_DECRE':
      return Object.assign({}, state, { count: state.count -1});
  }
  return state;
};

export default handleCounter;