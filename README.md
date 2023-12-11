# campspot-take-home

At the time I created the project, the development site was not responsive. I sued the real site in comparision. 



For this take home project, I used Visual Studio and saved to Github.
I decided to use Cypress and JS in this project, simply because it is the framework and toolset I used last, and is the most up to date in my repertoire.

Github repository: https://github.com/duskdavis/campspot-take-home/

Here I will address the projet requirements, Feature Story which is being addressed, and process and methodology I took.

Requirements:
1. Navigate to https://development-9-prototype.campspot.com/
2. Develop a test strategy and test cases based on the acceptance criteria found in a story for this feature.
    * Acceptance Criteria:
        Location is optional and contains a placeholder with grey-colored text, “Where do you want to go?”.
        Location field will autocomplete the City, State, or Campground Name.
        When I do not enter a location, I expect it to use my current location as determined by my browser.
        Dates is optional and contains a placeholder with grey-colored text, “Check In → Check Out”.
        When the Dates field is selected, a calendar should display the current and next month. I can scroll to previous and future months.
        When entering check in and check out dates, I expect search results to filter availability by date.
        Guests is required and is defaulted to “2 Adults”.
        When Guests is selected, options should display allowing me to update the number of Adults, Children, and Pets.
        Search starts when I click “Search”.
        Search results should display available campgrounds that match the criteria entered.
3. Choose a framework, and automate 2-3 of the most important cases.


Feature Story:
As a potential Campspot user, I expect to be able to search for campgrounds based on the following inputs: Location, Dates and Guests.


Process/Methodology:
From the start, I read through the project requirements. I went through and created a repo in Github and uploaded Cypress. I then read through the Acceptance Criteria and decided upon the two to three test cases that would cover the most crucial flows from a business standpoint, and user experience. Since I have no other place to concentrate my findings, I created this Readme to contain my process and thoughts. 

From here, I created a Cypress folder and nested a 'pages' folder for the classes I would need, and a 'e2e' folder which would house the cases themselves. In this abbreviated scenario, I will put all methods and all e2e tests for this take home assignment on the same sub-folders - but in a real life scenario and depending on the breadth of the project, these pages and tests would be much more broad for streamline and ease of use. 

I added crucial notes in the crucial workflow to the difference and the updates I would make if given more time.


----------------------------------------------------------

My Manual Test Strategy:
1. On initial load of the home - search- page:
    - Notice what fields are available
    - what fields are highlighted
    - what fields highlight when other fields are entered
    - is the search feild able to be used when nothing is entered
    - open dev tools and attempt to search with blank fields
        - nothing is registered

2. as a user, I am interested in finding a spot without dates:
    - Om desktop, I enter an area location (Florida Keys), and see no viable results return < sad > (for the vagabond)
    - I enter a more specific result, Key West, FL, See results
    - View Map on desktop, which gives me a better view with results

3. As a User, click on a site with selected entry date (no exit date)
    - see if results still populate

4. As a User, view Park Map
    - see if site map still populates, and sub-filters populate accordingly (pet-friendly?)

5. As a user, filter sites by viable dates and see if availablity accords to needs <tent site>
    - I'm really excited... sites are there!

6. As a user, going to home search page and searching broad regiom, because as a user, I have no idea where I might end up in a few days --> <Searching Florida shows the whole map! Awesome!>

7. On desktop, zooming in on a specialaized location shows a lot of speicialised locations

8. When an location is selected, changing dates shows updated dates

9. On the home search page, showing updated search criteria <more pets> updates the search results

10. Removing location on desktop, apparently shows "local" location when searching

11. Saving/Hearting a camp spot requires a non-logged in user to log in

12. Signing in with Google signs the user in correctly

13. Clicking on cart shows current in-process activity

14. Clicking 'Campspot' logo takes user to home/search page

15. User's saved locations appear on their account

16. Typing in all CAPS brings up same results

17. Mobile searches are relaveant to desktop searches

18. Specified results <Key West, FL> bring up results. Some icons aren't clickable
https://www.campspot.com/search/map?location=Key%20West,%20Florida&latitude=24.562557&longitude=-81.772437&checkin=2023-12-20&checkout=2023-12-26&adults=2&children=0&pets=2

19. Choose a site and checkout. Checkout flow

20. No availability sites - navagativing when sites might ne available. 