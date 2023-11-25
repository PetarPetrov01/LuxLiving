# LuxLiving

## Getting started
Navigate to the project directory. Once you are inside the project directory, install the dependencies by running:

```bash
npm install
```

After the installation is complete, you can start the client using:
```bash
npm start
```
Note that the server should also be started for the application to work. To become familiar with the server, you can read its documentation [here](https://github.com/PetarPetrov01/LuxLiving/tree/main/server#readme).

## Dynamic pages

### Home page
The home page of the application serves as the main landing page for users. It provides an interface to browse and access the latest posts. 
Upon accessing the home page, users will immediately see the last three posts displayed prominently. This section offers a snapshot of the most recent real estate properties available.

Users can access detailed information about each post by following these steps:
Hovering over the image, displays the name of the property, its location and a `Details` button.
Clicking on the button navigates to the detailed view of the respective property.


In addition to displaying the latest posts, the home page also offers convenient navigation options for users:
A `Catalog` link is provided on the home page. Users can click on this link to access a comprehensive view of all available posts.

A navigation option to the `Register` page is available If the user is not currently logged in (guest). Otherwise, if the user is already logged in, the home page provides a direct link to navigate to the user's profile page.


#### Visualization of Home page:

![Home page](readme-screenshots/Home%20page.PNG)
