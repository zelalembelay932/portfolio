# Technology Stack

This project uses the following technology stack:

- Vite

- TypeScript

- React

- shadcn-ui

- Tailwind CSS

# Development Process

1. Adjust the theme style of src/index.css and tailwind.config.ts based on user requirements.

2. Divide the pages to be implemented according to user requirements.

3. Organize the functions to be implemented for each page, and create corresponding folders and their entry points Index.tsx under pages.

4. Create route configuration in App.tsx, and import the various entry files Index.tsx.

5. Based on the requirements just organized, if the requirements are simple, all the work for the page can be completed directly in Index.tsx.

6. If the requirements are complex, the page can be split into several components, with the following directory structure:

- Index.tsx entry point

- /components/ components

- /hooks/ hooks

- /stores/ For complex interactive communication, zustand can be used for communication.

7. After completing the requirements, you need to install dependencies using `pnpm i` and then use `npm run lint & npx tsc --noEmit -p tsconfig.app.json --strict` to check and fix any issues.

# Integrating Backend APIs

- When adding new APIs or operating on Supabase, you need to first add the corresponding `api` file to `src/api` and export the corresponding data types. Refer to the `src/demo.ts` file. If it's Supabase, you also need to implement it correctly.

- When implementing on the frontend and Supabase, both need to strictly adhere to the data types. Avoid modifying predefined data types as much as possible. If modifications are necessary, check all files referencing that type.