/** */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("es-gt", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";
