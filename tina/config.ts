import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || "main";

export default defineConfig({
  branch,
  clientId: "d8b9ac24-04f4-44b3-9b22-b2656021ef56", // Get this from tina.io
  token: "420469731709251b1403eaff301d7943c7abd518", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "boolean",
            name: "dropCap",
            label: "Drop Cap",
            required: false,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: false,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft Post",
            required: false,
          },
          {
            type: "boolean",
            name: "pageScopedStyles",
            label: "Page Scoped Styles",
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
