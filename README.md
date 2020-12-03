# Cube Frontend Challenge

## Requirements

This simple eCommerce site is almost complete! There are a few UX issues and bugs that you need to address to get us to the finish line. You can ask any question beforehand and during about requirements, expectations, unclear goals or anything else that isn't clear; as with any client project: [Ask Us](mailto:keith@cubesoftware.com?&cc=ash@cubesoftware.com&cc=alejandro@cubesoftware.com&subject=Question%20about%20code%20challenge).
Someone should get back to you soon, any time, any day. Don't worry about bothering us; just focus on completing the job to the best of your ability and making your client happy.

This should only take an hour or two, but take as long as you need. We expect you to do this on your own without help from anyone else. Answers are not found online. We expect you to fork this repo and treat it like a real client project, not as a test. We're expecting the same level of care, good code, good commits, good questions, communication and to answer the questions bellow when you turn in your project. You'll be questioned about choices you made for solving the tasks.

Other than that, you can get it done however you see fit. Show off as much or as little as you want. We'll talk soon! Good luck.

### Catalog

- Add a text input to filter the products by name. Below the input include a text that shows the count of the products filtered. For example: `10 products found`.
- Show products as `Out of Stock` when the inventory count is 0.
- When products are `Out of Stock`
  - Desaturate the photo of the product
  - Hide the `Add to Cart` button

### Cart

- The cart should only list products once.
  - Add a number input that allows users to update their quantity or reflects the amount of times `Add to Cart` was clicked on the product. The quantity cannot be more than the **inventory** count.
  - Calculate price accordingly
  - Remove the product from cart with a `Remove` button
- There should be a count next to the `Cart` heading that lists the number of unique products added to cart. For example: `Cart (3)`.
- A `Total` section with the checkout amount for the cart.

### Follow Up Email (when you're finished)

- Explain the flow of data from the store to the UI and back as simply as you can.
- How else can we improve the experience of the site? What suggestions can you make to the product team and the development team?
- What recommendations can you make to the development team for scalability?
- What knowledge up front could have helped this go smoother or faster?
- How was it working around these libraries? Anything trip you up?

## Submit Your Answers

When you're done, push your code to a private GitHub repository under your username
(e.g. github.com/your-username/frontend-challenge). Give access permissions for the repo to @jasonbellamy, @kilokeith, @avarona, and @ashiq-r31.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template. -- **Don't worry about building, testing or hosting. We'll pull down your code and evaluate it locally. Targeting latest Chrome on latest MacOS.**

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More About CRA

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
