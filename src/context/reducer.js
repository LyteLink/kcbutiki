export const ACTION_TYPES = {
  openSidebar: "OPEN_SIDEBAR",
  closeSidebar: "CLOSE_SIDEBAR",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.openSidebar:
      return { ...state, isSidebarOpen: true };
      break;
    case ACTION_TYPES.closeSidebar:
      return { ...state, isSidebarOpen: false };
      break;

    default:
      return state;
  }
};
