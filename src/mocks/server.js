import { setupServer } from "msw/node";
import { classes } from "./handlers/classes";

export const server = setupServer(classes);