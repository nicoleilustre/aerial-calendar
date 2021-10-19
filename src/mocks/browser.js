import { setupWorker } from "msw";
import { classes } from "./handlers/classes";

export const worker = setupWorker(classes);