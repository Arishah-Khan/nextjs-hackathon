import { defineType, defineField } from "sanity";

export default defineType({
  name: "user",
  type: "document",
  title: "Users",
  fields: [
    defineField({ name: "name", type: "string", title: "Name" }),
    defineField({ name: "email", type: "string", title: "Email" }),
    defineField({ name: "role", type: "string", title: "Role" }), 
    defineField({ name: "createdAt", type: "datetime", title: "Created At" }),
  ],
});
