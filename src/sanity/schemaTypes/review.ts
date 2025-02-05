import { defineType, defineField } from "sanity";

export default defineType({
  name: "review",
  type: "document",
  title: "Reviews",
  fields: [
    defineField({ name: "name", type: "string", title: "User Name" }),
    defineField({ name: "email", type: "string", title: "Email" }),
    defineField({ name: "comment", type: "text", title: "Comment" }),
    defineField({
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      options: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm" },
    }),
  ],
});
