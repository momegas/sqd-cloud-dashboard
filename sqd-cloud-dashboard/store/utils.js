import isBefore from "date-fns/isBefore";
import parseISO from "date-fns/parseISO";

export const sortByCreatedAt = (a: any, b: any) =>
  isBefore(parseISO(a.createdAt), parseISO(b.createdAt)) ? -1 : 1;
