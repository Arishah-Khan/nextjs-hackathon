// schemas/user.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule) => Rule.required().email(), // Validation directly inside defineField
    }),
    defineField({
      name: 'password',
      type: 'string',
      title: 'Password',
      validation: (Rule) => Rule.required().min(6),  // Password should be at least 6 characters
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),  // Name is required
    }),
  ],
});
