export default (state, action) => {
  switch (action.type) {
    case "ADD_NEW_ADDRESS":
      return {
        ...state,
        address: [action.payload, ...state.address],
      };
    case "REMOVE_ADDRESS":
      return {
        ...state,
        address: state.address.filter(
          (address) => address.id !== action.payload
        ),
      };
  }
};
