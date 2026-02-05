import { createContext } from "react";
import type { Data } from "../Interfaces/data.interface";

export const dataContext = createContext<Data | undefined>(undefined);
