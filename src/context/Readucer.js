export const reducer = (state, action) => {
    switch (action.type) {
      case "USER_SIGNUP": {
        return { isSiginup: true , user: action.payload }
      }
      case "USER_LOGINUP": {
        return { isLoginup: false , user: {} }
      }
      default: {
        return state
      }
    }
  }