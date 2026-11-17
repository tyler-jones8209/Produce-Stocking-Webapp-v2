# Main Goal

My main goal for this webapp is something that anyone in our produce department can use to do the following:
- Create an intuitive and easy to use "to stock" list
- Get detailed crisping instructions on all produce that requires it
- Detailed information on each produce item that will live in the articles section:
    - Name(s)
    - Origin/Brands we use
    - Organic or no
    - Frequent locations we stock it
    - Whether or not it requires crisping
    - What season(s) we stock it
    - How quickly it starts to go bad
    - PLU/that long number it has in catapult
- Opening and closing procedures
- General rules blank and blank want you to follow if you're a bitch

I think a lot of the information heavy areas can be condensed into "articles" which could be its own tab

## Customizability
An important requirement I want for this webapp is the ability to customize as much as realistically possible. Things I want to make changeable are:
- Default screen the webapp loads upon opening
- Pictures and names for produce in the to stock section
- Information in the articles

Of course these changes would only apply to that specific persons version

# Home Page with Navigation
Currently the "home page" is just the stocking page.

## Navigation Bar with Page Links
- [x] Functioning seperate links
- [x] Hover effect over text
- [ ] Clean, clearly seperate buttons

# Articles Setup
Since the "articles" on produce (e.g., Bartlett Pears, Lacinto Kale, EBF Baby Spinach) will all follow the same formula, I should figure out how to make some sort of reusable/importable templet so I don't have to create 100+ individual html files. I should get the template set up sooner than later so I can figure out exactly what information I'll need to get through someone with more clearance

# "To Stock" Feature
I'm thinking the default tab is the "to stock" feature porque si la gente are trying to stock efficiently it's easier to just open the webapp and boom start choosing what you need. Though with all the bullshit about phones lately it doesn't seem likely that we could even use them for this anyway. But I could also make it to where you choose which page it automatically loads on. 

## Different Methods for Sorting Stock Items
- [ ] Dropdown menu somewhere for selecting different methods of sorting
- [ ] Sub-headers for the specific categories of the sorted stock (e.g, Apples, Pears, Potatoes, etc)

## Circle Navigation to and from Stock Queue
- [ ] Clickable circle that takes you to stock page
- [ ] Circle is sticky to the screen and stays in position even when you scroll
- [ ] Circle has icon of notepad and pencil 
- [ ] Circle (when on stock queue page) takes you back to stocking page

## Stock Queue Page
I know a whole seperate page you have to navigate to just to see whats in the queue is super dumb but im gonna do it first and change it later.

Actually sike hard pivot to in page viewing because switchign to a new page is so dumb
- [x] Display list created from stocking page sent over from sessionStorage
- [ ] Each item can be swiped left to delete all of the item(s) as a whole
- [ ] Each item can be swiped right to delete only one 
- [ ] Button located somewhere to clear entire list