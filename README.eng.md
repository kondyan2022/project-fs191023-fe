# Power Pulse

# Frontend Documentation

This documentation provides information about the frontend part of the project
and its functionality.

# General Information

The layout is responsive for various device sizes:

Mobile: from 320px (flexible) and from 375px (adaptive). Tablet: from 768px.
Desktop: from 1440px. Main Layout "/" (Main Layout) This layout includes the
Header and the information block StatisticsInfo. Images are used as background.

The Header has the following links:

/diary - redirects to the Diary page. /products - redirects to the Products
page. /exercises - redirects to the Exercises page. The active page is
highlighted in UserNav. On mobile devices, UserNav appears as a burger menu with
a LogOutBtn button.

# Welcome Page "/welcome" (Non-Authenticated User)

This page features the SignUpForm and links to the SignIn page.

SignUpForm includes the following fields:

Name. Email. Password. "Sign Up" button. This form is validated using the Formik
and Yup libraries.

# SignIn Page "/signin" (Non-Authenticated User)

This page contains the SignInForm and links to the SignUp page.

SignInForm includes the following fields:

Email. Password. "Sign In" button. This form is also validated using the Formik
and Yup libraries.

If incorrect data is entered, an error message is displayed to the user. If all
data is valid, it is sent to the server. If the request is successful and a
token is issued to the user, they are authenticated and redirected to the
appropriate page.

# Profile Page "/profile" (Authenticated User)

The Profile page includes a title and is a universal component that can be used
on other pages.

# Products Page "/products" (Authenticated User)

On this page, ProductsItems are implemented, which contain information about
products, including the name, the number of calories, category, quantity of the
product (in grams), and a recommendation for usage. There is also an "Add"
button that opens a BasicModalWindow with an AddProductForm.

Additionally, AddProductForm includes fields for entering the product's name and
the quantity consumed (in grams). The number of calories is dynamically
calculated based on the entered quantity of the product.

The "Back" button returns the user to the previous page with a modified title
and hides the "Back" button.

# Exercises Page "/exercises" (Authenticated User)

This page contains the following components:

ExercisesSubcategoriesList with a list of ExercisesSubcategoriesItems.

ExercisesList with a list of ExercisesItems obtained from the server for the
respective subcategory.

ExercisesItem with information about the exercise, including the name, the
number of calories, the body part engaged, and the muscles improved. It also
includes a "Start" button that opens a BasicModalWindow with an AddExerciseForm.

Additionally, if the authentication functionality is implemented on the server,
a request to the server for user information is made when the page is loaded,
and this information is stored in the Redux Store.

# How to Run

1. Clone the repository to your computer.
2. Install dependencies using the `npm install` command.
3. Start the project with the `npm run dev` command.

More information and instructions can be found in the project repository.

Thank you for using our product!
