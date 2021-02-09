# SpaceX Last Launches

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installing the app

just run `npm install` or `yarn install`


## Running the app

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Stack choices

Besides the required tech (React, GraphQL, Apollo client, etc), the rest of the stack is comprised by very standard libraries that are part of the React ecosystem. And that is mainly why I chose them, besides the fact they make me more productive because I have experience with them. The are, more or less, the following:

- Styled components: my preferred flavour of css-in-js, as with this library you are actually righting css and not weird camel case  properties. Also, I really like the compositional HOC pattern

- Material-ui: Great way to get used to working with a design system and a shared components library. 

- Date-fns: great library to work with dates. So far, the best one I've used, and far better than having to parse the date object "by hand"


## With a bit more time

- First I think I might try to add more tests. The ones in the application now are a bit basic and it could definitely use some that test more complex interactions and edge cases. It would also be great to add some end-to-end testing for those interactions. I really enjoy working with Cypress

- I would learn more about GraphQL to be more confident in the patterns I used to handle the data

- Review more thoroughly the code to see if I've abstracted everything I can into common components or utility functions,to make the code as DRY as possible

