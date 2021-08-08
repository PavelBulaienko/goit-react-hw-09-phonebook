const getIsAuthenticated = (state) => state.authReducer.isAuthenticated;

const getUserName = (state) => state.authReducer.user.name;

const authSelectors = { getIsAuthenticated, getUserName };

export default authSelectors;
