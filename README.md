<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=100px src="https://www.cubesoftware.com/images/logo.svg" alt="Project logo"></a>
</p>

# Frontend Challenge

## Get Started

Fork and clone this repo

```
> cd frontend-challenge
> npm install
> npm start
```

Install [docker](https://docs.docker.com/compose/install/) and run our web api

```
> docker-compose up
```

## Overview

We need help getting this eCommerce site up and running! A lot of the components are built out already, but we need to implement a few features and address some UX and code quality issues.

The assignment should only take a few of hours, but take as long as you need. We expect you to do this on your own and treat it like a real client project with the same level of care, quality code and good commits. Feel free to edit any of the existing code. After completing the assignment, please also commit your answers to the questions [below](#follow-up-questions).

Questions are encouraged, [Ask us](mailto:engineering-candidates-fe@cubesoftware.com&subject=Questions%20about%20code%20challenge) about requirements, expectations, and unclear goals. Someone will get back to you as soon as possible.

Have fun, and good luck!

## Assignment

### Catalog

- Show all products in catalog
  - `GET http://localhost:3001/products`
- Filter products by search words
  - Create search bar at the top of the page
  - Show search result count below the input (ie. `10 products found`)
- Mark products as `Out of Stock`
  - Should happen when product inventory count is 0
  - Adjust product badge accordingly
  - Desaturate the product image
  - Disable the `Add to Cart` button

### Cart

- Add product to cart
  - Should happen when `Add to Cart` button is clicked
  - Clicking `Add to Cart` should update existing cart item
  - Cart should only have unique items
- Update product from cart
  - Create a number input field to edit quantity for each item
  - Quantity should not exceed product inventory
  - Quantity should not be below 1 item
  - Updating quantity should update catalog if product is out of stock
- Remove product from cart
  - Create delete button to remove product from cart
- Checkout cost
  - Show total cost due at checkout
  - Should be the sum of each cart item and their quantities
- Count of unique items in cart
  - Append the the count to the heading, ie. `Cart (3)`

Finished?

Double check that the application runs smoothly, and you are comfortable deploying this to production. Will your client and other engineers be happy with your work? Have you thought about possible edge cases or improvements? Make final adjustments as needed.

<h2 id="follow-up-questions">Follow Up Questions</h2>

**1.** Explain the flow of data from the store to the UI and back as simply as you can.

**2.** How else can we improve the experience of the site? What suggestions can you make to the product team and the development team?

**3.** What recommendations can you make to the development team for scalability?

**4.** What knowledge up front could have helped this go smoother or faster?

**5.** How was it working around these libraries? Anything trip you up?

## Submit

Send us a pull request of your forked repo. We'll review it and get back you as soon as possible.

Thanks for taking the time to complete the assignment!
