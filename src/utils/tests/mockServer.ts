import { setupServer } from "msw/node";
import { handlers } from "./handlers";

/*export const mockServer = () => {
    const server = setupServer(...handlers);

    return { server, state };
};*/
export const server = setupServer(...handlers);
