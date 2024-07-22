import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '38caf5ccff1c7d104560407311d1ceef57cf7c61', queries,  });
export default client;
  