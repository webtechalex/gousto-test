#Gousto Product Search API in React and Redux

##Installation
Clone the repo and ```npm install``` in the working directory to install dependencies.

##Running
Use ```npm run start``` and navigate to [http://localhost:8080/](http://localhost:8080/) in your browser of choice to run the project locally.

Use ```npm run test``` to start the test environment.

Use ```npm run build``` to build for deployment.

##Synopsis
For a project of this small size, I have separated concerns horizontally. That is to say, files are organised by the role they play in the application. Unit tests are kept in a single location. As a commercial application, concerns are better separated vertically: The src contains a module for the categories along with its tests, reducers, actions, components.  This enables large teams to work on different areas of an application while minimising conflicts in version control.

I opted for a very simple Webpack configuration.  This could be extended later on.

The application is separated into three main parts, rendered by the App.js file: ```Categories```, ```ProductSearchInput``` and ```Products```.  State from Redux is injected into the presentational components via Redux container components and asynchronous calls to the Gousto API are handled via redux-thunk and Axios.  Relevant data from the API responses are mapped to state by the reducer. The ```id``` properties of items in the responses are used to provide the unique ```key``` prop required by React for components rendered from arrays.

Functional components have been used wherever possible, to maintain simplicity.  Only the parent presentational components are ES6 classes.  This is so that they can make use of the componentDidMount lifecycle method to call the thunks.

As a nod to the principles of atomic design, I have created React components for all fragments of the application, from the parent ```App``` container down to the ```ProductDescription```.  State, actions and event handlers are passed down to the 'atom' components from the containers in the 'organism'.  The ```Products``` molecule also receives state from ```ProductSearchInput``` and ```Categories```, so that the Product state can be filtered according to input from the user.  The filtering is also aided by helper functions. These helpers simplify the rendering of ```Products``` by abstracting the logic used to determine if a category is selected and/or if a value exists in the input.

I have used the 'short-circuit' behaviour of Javascript's AND logical operator to do some of the conditional rendering. I am aware that the short-circuit AND is discouraged in some dev teams. These cases of conditional rendering can be handled functionally, in a similar way to the product state filtering, where the short-circuit is not part of the team style guide.

Styling has been kept very simple.  For a larger application I take a more modular approach to styling, usually opting for SCSS preprocessing and vertical separation of concerns.  I did not think it necessary to use a preprocessor for a project of this size.