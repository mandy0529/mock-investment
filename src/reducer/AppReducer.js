export const initialState = {};

const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      throw new Error(`not matched any ${action.type}`);
  }
};

export default AppReducer;
