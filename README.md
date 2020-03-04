

# [Create a Non-Alcoholic Cocktail by the Glass](https://tracyjohnson213.github.io/cocktails/)



Every long weekend can be extended by a great cocktail.  Use this site to find the perfect recipe to share with your friends ~ and skip the alcohol!

[Live website is here!](https://tracyjohnson213.github.io/cocktails/)

 
## UX
Color Scheme:
 - #D6D0C2 ~ light yellow
 - #E3E3DB ~ yellow green
 - #F1F3F0 ~ light green
 - #79125E ~ dark magenta
 - #C39E8B ~ light orange

### User Stories
- As a site owner, I want to retrieve data and images from an external API to display.
- As a site owner, I want to display data and images of non-alcoholic cocktails.

## To do items
- As a site user, I want to select a glass type and view a list of all cocktails that can be made with it.
- As a site user, I want to select a cocktail and view an image and the recipe.
- As a site user, I want to input the name of a cocktail and view the resulting image and recipe. 
- As a site user, I want to contact the company via a contact form or phone number.
- As a site user, I want to view the website on both my computer and mobile deveice.
- As a site user, I want to suggest a drink to add.
- As a site owner, I want to display data and images of glass types used to make cocktails.
- As a site owner, I want to use pagination to only display 10 items per page.
- As a site owner, I want to display information about my company.

### Acceptance Criteria
A site user is able to click images of glass types before viewing all cocktails available in the criteria. 
A site user is able to click images of cocktails to see  details, including ingredients and recipe.
A site user is able to submit information to the site owner.

#### Strategy
My intent is to present a simple design displaying the images and recipes of cocktails.
#### Scope
My intent is to use data and images available via [https://www.thecocktaildb.com/](https://www.thecocktaildb.com/).
- [API](https://www.thecocktaildb.com/api.php)
#### Structure
#### Skeleton
- [About Wireframe](https://github.com/tracyjohnson213/cocktails/wireframes/about.pdf)
- [Contact Wireframe](https://github.com/tracyjohnson213/cocktails/wireframes/contact.pdf)
- [(HomePage)CocktailsByGlasses Wireframe](https://github.com/tracyjohnson213/cocktails/wireframes/glasstypes.pdf)
- [CocktailList](https://github.com/tracyjohnson213/cocktails/wireframes/list.pdf)
- [CocktailRecipe Wireframe](https://github.com/tracyjohnson213/cocktails/wireframes/recipe.pdf)
- [Search Wireframe]
#### Surface
- [Color Scheme](https://www.schemecolor.com/white-orchids-for-spring.php)

## Features

### Existing Features
- JavaScript will be used to retrieve data from API.
- Website will display images and recipies in card format.

### Features Left to Implement


## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- HTML ~ main Language used to structure the individual pages of the website.
- CSS ~ styling language used to format and visually build upon the accompanying HTML.
- [Bootstrap Framework](https://getbootstrap.com/) ~ Used as the core structuring layout building blocks of the website, ensuring mobile-first design and responsive size display.
- [CodeTasty IDE](https://codetasty.com/) ~ A powerful online code editor in the cloud. It supports over 40 languages, including PHP, Node.JS, Python, Java, Ruby, C.
- [Visual Studio 2019](https://visualstudio.microsoft.com/vs/) ~ Full-featured integrated development environment (IDE) for Android, iOS, Windows, web, and cloud.
- [Balsamiq Mockups 3](https://balsamiq.com/) ~ Wireframing tool.
- [https://www.schemecolor.com/](https://www.schemecolor.com/) ~ Website to download, create and share thousands of beautiful color combinations
- Google Chrome Developer Tools ~ Used as the core test phase throughout the project build life, testing the responsiveness of elements and CSS visuals.
- [StackEdit](https://stackedit.io/) ~ In-browser Markdown editor.
- [Favicon.cc](https://www.favicon.cc/?) ~ Favicon generator.
- [Autoprefixer CSS online](https://autoprefixer.github.io/) ~ Autoprefixer is a PostCSS plugin which parses your CSS and adds vendor prefixes.
- [W3.CSS Validation](https://www.w3schools.com/w3css/w3css_validation.asp) ~ The W3C CSS Validation Service can be used to check the correctness (validity) of W3.CSS.
- [W3C Markup Validation](https://validator.w3.org/) ~ This validator checks the markup validity of Web documents in HTML.
- [CodeBeautify](https://codebeautify.org/cssvalidate) ~ Online Tools like Beautifiers, Editors, Viewers, Minifier, Validators, Converters for Developers: XML, JSON, CSS, JavaScript, Java, C#, MXML, SQL, CSV, Excel.
- [Tidy Gherkin](https://chrome.google.com/webstore/detail/tidy-gherkin/nobemmencanophcnicjhfhnjiimegjeo?hl=en-GB) ~ Chrome app for writing feature files.
- [Small SEO Tools](https://smallseotools.com/plagiarism-checker/) ~ Plagiarism and Grammar Checker.
- [BrowserStack](https://www.browserstack.com/screenshots) ~ App & Cross Browser Testing Platform.
- [TypoSaurus](https://typosaur.us/) ~ Website spell checker.

## Testing

[https://jasmine.github.io/](https://jasmine.github.io/) ~ open source behavior-driven development framework for testing JavaScript code.

In addition screenshots created with [BrowserStack](https://www.browserstack.com/screenshots) 

Manual testing was performed on:
- Extra large monitor with resolution > 1200px
- Apple Ipad mini 4 and  laptop with resolution > 992px
- Moto e4 with resolution > 768px

## Deployment

This site is hosted using GitHub pages, deployed directly from the master branch. 
The deployed site will update automatically upon new commits to the master branch. 
In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.

To run locally, you can clone this repository directly into the editor of your choice by pasting 
git clone https://github.com/tracyjohnson213/cocktails.git into your terminal. 
To cut ties with this GitHub repository, type git remote rm origin into the terminal.

## Credits

### Content & Media
- The images, summaries, and recipes are supplied by [www.thecocktaildb.com](https://www.thecocktaildb.com/api.php)

### Acknowledgements

- I received inspiration for this project from [https://www.liquor.com/cocktail-and-other-recipes-4779343](https://www.liquor.com/cocktail-and-other-recipes-4779343)
- I also received inspiration for this project from the project example presented by [https://github.com/Code-Institute-Solutions/StudentExampleProjectGradeFive/edit/master/README.md](https://github.com/Code-Institute-Solutions/StudentExampleProjectGradeFive/edit/master/README.md) Haley Schafer and my User Centric Frontend Development Lead, Anthony O' Brien [User Centric Resource Pack](https://auxfuse.github.io/userCentricResourcePack/)
To Code Institute for offering the learning opportunity as a Full Stack Development Student.  Thanks to my User Centric Frontend Development Lead, Anthony O' Brien, 
my mentor Sindhu Kolli for project guidance and support.

### Disclaimer

This project was created for **educational purposes** to meet the requirements of the Interactive Frontend Development Milestone Project 2 to demonstrate competency in basic knowledge of:
- HTML/HTML5
- CSS/CSS3
- external APIs
- Responsive Web Design
- User experience design
- Bootstrap 4
- Git/GitHub
- Wireframing
- README file

Copyright © Tracy Johnson & Code Institute 2020