<p align="center">
    <img src="https://i.ibb.co/SxCYSRZ/Nextjs-logo-svg.png" alt="Nextjs-logo-svg"width="300" height="82">
    <br/>
</p>

# Nextjs + Prisma + Postgre + Typescript

Project built with ❤️ using :
[ReactJs](https://reactjs.org/) |
[Nextjs](https://nextjs.org/) |
[Typescript](https://www.typescript.org/) |

## 🥇 Must-read guides 🥇

This repository contains all the sources and the packages needed to run this Nextjs Web Application.

## Architecture

All the main source code of the application is contained under **app/**.

- **private** - `app/(pages)/private` :
  _Contains all the non accessible pages_

- **public** - `app/(pages)/public` :
  _Contains all the accessible pages without being authenticated_

- **actions** - `app/actions` :
  _Contains all the server actions_

- **api** - `app/api` :
  _Contains all the web app apis_

- **components** - `app/components` :
  _List of React components needed to build the app_

- **constants** - `app/constants` :
  _Contains files that define constants or configuration_

- **contexts** - `app/contexts` :
  _Contains all the shared states between the components_

- **lib** - `app/lib` :
  _Contains reusable modules across the application_

- **services** - `app/services` :
  _Where we interact with our database_

- **styles** - `app/styles` :
  _Contains global styling_

- **utils** - `app/utils` :
  _All shared values and function_

## Quickstart

The main target of this section is to provide a quick start using Node.

### Before starting

To be able to run this project, you'll need to install the following tools :

- [Node.js®](https://nodejs.org/en/download/) >= `v20.0.0`

### Run the stack

- [Yarn] is used as package manager for node modules.

To install Yarn all you have to do is :

```sh
npm install --global yarn
```

Once Yarn is installed, run the following command in the directory containing the project:

```sh
yarn install
```

After all packages installation is finished launch the development server:

```sh
yarn dev
```

Finally go to : `http://localhost:3000`, and you will be able to check the projet there 🥳!
