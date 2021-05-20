## 🚀 Using the CMS

1. You reach your CMS frontend via <DOMAIN>/admin. There you have to authenticate against GitHub (using your GitHub account credentials). Afterwards you'll be presented a list of all available collections.

One of them is `Pages` which currently comprises only the about page. Normally you would not add another page as of now it won't be displayed anyway.

The other collection is called `Project categories`. You can add as many project categories as you wish. Each project category has as attributes...
* `Name`
* `Order`, which represents the position of the respective category in the line of all categories to be chosen from randomly when users land on your page.

Each project category has as many `projects` associated with it as you wish. If one project shall be associated with more categories you will have to create it under the other category as a new project.

Each `project` consists of...

* An `image`, which you either upload, choose from existing images or from remote URL. Images can be GIFs as well!
* A `caption`, which will be displayed underneath the image
* An `image width` factor, which describes how wide in percent the image will be displayed
* A `last project` flag representing whether the image will be displayed at the end. You can flag multiple images `last_project` (or none!). Those will be displayed in random order at the end of the entire image cycle
* A `Project URL`, which is not used at the moment :D

2. Publishing changes
After editing your changes you save it via clicking the `Publish` button in the top right corner. After publishing a so called 'pipeline' is being triggered by the changes you commited which takes about a minute or two. After the pipeline has finished your changes are visible online, hurray!

## 🚀 Technical Details
#### Tech-Stack
In order to make this site work we're using netlify-cms + Gatsby. The site is currently hosted by Netlify.

#### Development
1.  **Starting the development server**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.
