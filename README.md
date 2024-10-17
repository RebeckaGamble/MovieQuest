MovieQuest
   
   Table of Contents
   * Installation and Running
   * Features Overview
   * Project Requirements
   * Testing
   * SEO Optimization
   

   Installation and Running
   1. Clone the repository - git clone https://github.com/yourusername/moviequest.git
      cd moviequest
   2. Install dependencies - npm install
   3. Run the application - npm run start


  Features Overview
  This application, MovieQuest, is a React-based movie search and favorites management tool. Below are the implemented features:

  Carousel of Movies: A visually appealing carousel displays a selection of movies(image and title) fetched from TMDB.
  Redux Store: The application uses Redux Toolkit with three slices:
   MovieSlice: Fetches movie data from the TMDB API and displays it.
   ReviewSlice: Displays reviews for a selected movie in a modal that opens when clicking "See Reviews".
   SearchSlice: Allows users to search movies by title and genre.
  Favorite Functionality: Users can toggle movies to their favorites.
  React Router: Implements dynamic routing for individual movie pages.
  Search Functionality: A search component enables users to filter movies based on title and genre.
  Sorting Options: Movies can be sorted by title and release date.
  Navigation: Includes a header and a navigation component.
  Not Found Page: Displays a user-friendly message for non-existent routes.
  Cypress Testing: Implements end-to-end testing for key functionalities, including adding to favorites and searching for movies.

  Project Requirements
  The application meets the following project requirements:

  React-based Web Application:
  Built using React for frontend components with a well-structured component architecture.

  Components are reusable, including:
  SearchBar
  MovieCard
  FavoritesList
  NavigationMenu
  Follows best practices in component structure and code organization.

  State Management with Redux Toolkit:
  Implements Redux Toolkit for global state management.
  Contains at least one slice for handling the favorites list.

  API Handling:
  Integrates with TMDB API for fetching movie data and searching for movies.
  Displays detailed information for selected movies.
  Handles asynchronous calls with async/await and includes error handling.

  Technical SEO Optimization:
  Optimized for search engines with relevant meta tags.
  Implemented robots.txt and sitemap.xml.
  Mobile-friendly and responsive design.

  Tracking Codes and Event Tracking:
  Integrated Google Analytics and Google Tag Manager.
  Tracks the event of adding a movie to favorites.

  Advanced Version Control with Git:
  Uses Git for version control, branching, and commits.

  Test-Driven Development (TDD):
  Contains end-to-end tests using Cypress for critical functionalities.


  Testing
  Testing is implemented using Cypress. 
  Key tests include:
  Add to Favorites: Checks if there is an icon with a heart.
  Search Movies: Verifies the presence of a search form with an input having the ID SearchInput.

  To run the tests, use: npx cypress open


  SEO Optimization
  The application includes a robots.txt file for search engine optimization, that allows all web crawlers to access the entire site.
  Additionally, a sitemap.xml file is provided to help search engines understand the structure of the site.