export const statusColor = (value) => {
  switch (value) {
    case 1:
      return { color: "#4caf50", text: "نو" };
    case 2:
      return { color: "#c0ca33", text: "در حد نو" };
    case 3:
      return { color: "#fbc02d", text: "کارکرده" };
    default:
      return null;
  }
};
