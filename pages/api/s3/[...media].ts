import {
  mediaHandlerConfig,
  createMediaHandler,
} from "next-tinacms-s3/dist/handlers";

import { isAuthorized } from "@tinacms/auth";

export const config = mediaHandlerConfig;

export default createMediaHandler(
  {
    config: {
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY || "",
        secretAccessKey: process.env.S3_SECRET_KEY || "",
      },
      endpoint: process.env.S3_ENDPOINT,
      region: process.env.S3_REGION,
    },
    bucket: process.env.S3_BUCKET || "",
    authorized: async (req, _res) => {
      if (process.env.NODE_ENV === "development") {
        return true;
      }
      try {
        const user = await isAuthorized(req);

        return user && user.verified;
      } catch (e) {
        console.error(e);
        return false;
      }
    },
  },
  {
    cdnUrl: "https://link.storjshare.io/raw/jujjtfmneqrmutttzvxupz655lba/www",
  }
);