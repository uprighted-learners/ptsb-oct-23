# Node Projects

Node is a server side version of Javascript. NPM, Node Package Manager, allows us to pull in useful frameworks, libraries, utilities, etc. that can support the functionality we need to build.

Two examples we used are Express (Node web framework) and nodemon (utility to run and automatically restart our Node server).

---

### Starting a Project

If Node/NPM are installed on your computer you can start a new project using `npm init` from the location of where your application is located. It will ask several questions about your project. Typically you would fill in the relevant ones. You can also just hit enter and it will set defaults.

Completing `npm init` creates a `package.json` file which acts as the instructions and blueprint to build/run the project.

---

### Adding Dependencies

Dependencies are required packages to build or run the application. Use `npm install {packageName}` to install a specific dependency. This lesson used `npm install express` and `npm install nodemon --save-dev`.

Installing pulls the packages from [NPM](https://www.npmjs.com) and add them to your project. A `node_modules` folder is created or added to with the code for each installed package.

**IMPORTANT**: You will need to to run applications in Node that are provided to you by your job. The first step after cloning from Github is install all dependencies using `npm install`. `node_modules` is not stored in version control and you only do this locally.

Why did we add `--save-dev` when installing nodemon?

Nodemon in particular is only needed for local development. There could be any number of local only dependencies. Look in the `package.json` file and you'll find it is listed under `devDependencies` instead of `dependencies`.

We can separate these types of dependencies and know which are needed and others are just for our local machines.

---

### package.json / Scripts

With a `package.json` one section's key is `scripts`. This is where you can do custom scripts and overwrite _some_ of the built in ones like `npm start`. The start command is available to be run by default but you may need to do special things on startup.

Our lesson showed how we can use the `nodemon` package when starting to run our server and restart it on save/changes to files.

Other common ones you might see are `test` (built in) or `build` (example of a custom). Custom commands have to be prefixed with run. If there was the build command example, you would do something like `npm run build`.

What is `package-lock.json` for?

This file is generated on install that ensures each dependency is installed consistently across all environments from your local to production. You will never directly change this fle (or something in the `node_modules` folder).

More info on NPM commands/CLI: [https://docs.npmjs.com/cli/v6/commands](https://docs.npmjs.com/cli/v6/commands)

---

### Common Issues

Over the years I've consistently run into times where the dependencies have some kind of issue. The simplest way to typically attempt to solve those issues is by deleting `node_modules` and re-running `npm install`.
