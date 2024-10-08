import { setupWorker } from "msw/browser";
import { sampleRequest } from "./sampleRequest";
import { postRequest } from "./postRequest";
import { postStoreRequest } from "./postStoreRequest";

export const buildMswWorker = () => {
  return setupWorker(
    ...sampleRequest(),
    ...postRequest(),
    ...postStoreRequest(),
  );
};
