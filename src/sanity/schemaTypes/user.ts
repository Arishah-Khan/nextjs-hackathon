import { defineType, defineField } from "sanity";

export default defineType({
  name: "user",
  type: "document",
  title: "Users",
  fields: [
    defineField({ name: "name", type: "string", title: "Name" }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "role",
      type: "string",
      title: "Role",
      options: {
        list: [
          { title: "Admin", value: "admin" },
          { title: "Customer", value: "customer" },
        ],
      },
    }),
    defineField({
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      options: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm" },
    }),
  ],
});
