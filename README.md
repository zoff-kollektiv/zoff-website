# Zoff-Website
Build using Gatsby static page generator and netlify-cms.

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
*  **Install dependencies**: `yarn install`
*  **Starting the development server**: `yarn start`
*  **Start a local netlify-cms backend**: `yarn cms-proxy`

    
*  **View page at**: `http://localhost:8000`
*  **View cms at**: `http://localhost:8000/admin`
*  **View graphql interface**: `http://localhost:8000/___graphql`
1.  **Open the source code and start editing!**


