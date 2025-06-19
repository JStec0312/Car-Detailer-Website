import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "oroyxwtt", // upewnij się, że się zgadza z panelem
  dataset: "production",
  apiVersion: "2024-06-19", // może być dowolna, byle nie przyszła
  useCdn: true,
});
