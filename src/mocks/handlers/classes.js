import { rest } from "msw";
import { class_schedule } from "./classes.json";

export const classes = rest.get("/classes", (req, res, ctx) => {
  return res(ctx.json(class_schedule));
});
