import { type ReactNode } from "react";
import dataJson from "../../data.json";
import type { Data } from "../Interfaces/data.interface";
import { dataContext } from "./dataContext";
export default function DataContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const data = dataJson as Data;
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}
