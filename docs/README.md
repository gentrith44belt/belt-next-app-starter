# Belt Software

## Chapters

- [Setup](#setup)
- [Scripts](#scripts)
- [Build and deploy](#build-and-deploy)
- [Git Workflow](#git-workflow)
- [Project structure template](#project-structure-template)
- Shared functionalities
  - [API queries and mutations generation](#api-queries-and-mutations-generation)
  - [Styling](#styling)
  - [Error handling](#error-handling)

# Setup

Install packages

```bash
yarn
```

Start the project

```bash
yarn dev
```

# Scripts

- `dev` - start development server
- `prettier` - check if code is not formatted.
- `prettier:fix` - format all `src/` files with prettier.
- `lint` - check for warnings and errors.
- `lint:fix` - try to fix warnings and errors with eslint.
- `generate:api` - generate all API types and hooks automatically from API schema.


# Build and deploy

#### TODO...


# Git workflow

Default branch is `dev`.

Branching (checkout from `dev`). The feature branch would be named after the Jira ticket #.

- `feature/BE-[ticket-number]`
- `hotfix/BE-[ticket-number]`

After you finish your task, create a PR `dev <- your-branch`


For more details [read here](https://beltio.atlassian.net/wiki/spaces/ENGR/pages/19431435/Code+Branching+and+Merging+Strategy).


# Project structure template

- `.husky` - contains husky and lint-staged setup
- `docs` - contains general documents and readme files for the project 
- `src`- contains main source code
  - `app` - main Next 13 app directory, contains the main app modules with their respective components
  - [locale] Next 13 route setup for locales
      - module_name
          - (pages) - contains routing pages/components
          - components - contains components that are specific for this module
          - lib
              - helpers - contains specific helpers for this module
              - hooks - contains specific hooks for this module
              - slices - contains redux store slices
  - `components` contains all specific components that are general/shared for this app.
  - `lib` contains different functionalities/building blocks of the app
      - `api` - contains all api related functions and configurations. See [API code generation](#api-queries-and-mutations-generation) for
        more details.
      - `hooks` - general helper hooks
      - `i18n` - i18n setup
      - `redux` - main redux store setup
      - `theme` - restyle theme setup
      - `types` - contains files with general Typescript types
      - `utils` - general helper functions
- `.eslintignore` - eslint ignored folders/files
- `.eslintrc.json` - eslint rules
- `.lintstagedrc.json` - lint-staged init
- `.prettierignore` - prettier ignored folders/files
- `next.config.js` - next default config
- `package.json` 
- `tsconfig.json`



## Styling

We use Material UI with custom theme. Everything regarding styling can be found
inside `src/theme`. If you need to modify something or add new components please add those as shared components
or create respective variants in the theme, don't add custom StyleSheet styles (we use that in very specific cases).

# Shared functionalities


## API queries and mutations generation

We use `@rtk-query/codegen-openapi` to generate all API calls, types and necessary hooks automatically.
To do that you just need to run `yarn generate:api` and it will generate the data for you under `src/lib/api/generated/index.ts`

**_IMPORTANT:_** Please do not modify `src/lib/api/generated/index.ts` file manually.

## Error handling
#### TODO...

## Forms

To manage forms we use [react-hook-form](https://www.react-hook-form.com/). When you are creating new forms, create a
custom hook for that specific form and store it inside `hooks/form-hooks` inside the module that you are working on.
Make sure to add validations using existing [validation functions](../src/lib/utils/yupValidations.ts).
