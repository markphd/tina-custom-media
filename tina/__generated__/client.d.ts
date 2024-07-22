import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/194e98fa-7e7e-4482-b480-4f361fdb2039/github/main', token: '38caf5ccff1c7d104560407311d1ceef57cf7c61', queries,  });
export default client;
  