This a project from Rocketseat course, with a few additional changes like storybook

## Getting Started

Install de dependencies:

```bash
yarn
```

Then, run next server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

Or, storybook server

```bash
yarn storybook
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see StoryBook.

Both next and storybook are configured to run in the same port because I'm figuring out how to "override" specific `.env` for API_URL (axios setup to consume miragejs api), or find a better solution to provide data for each screen. In other words, running one server at a time.

> If you get blank screen, try `yarn storybook --no-manager-cache`
