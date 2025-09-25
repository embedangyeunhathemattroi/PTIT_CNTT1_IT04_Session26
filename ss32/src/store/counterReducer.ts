const initialState = 0;

type ActionTypes = 
  | { type: "random"; payload: number }
  | { type: "reset" }; // action 

export const counterReducer = ( state: number = initialState, action: ActionTypes): number => {
  switch (action.type) {
    case "random":
      return action.payload; // trả về số random
    case "reset":
      return initialState;
    default:
      return state; // luôn trả về state hiện tại nếu không khớp
  }
};
