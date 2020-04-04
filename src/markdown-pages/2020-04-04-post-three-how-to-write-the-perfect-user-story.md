---
path: "/blog/how-to-write-the-perfect-user-story"
date: "2020-04-04"
title: "How To Write The Perfect User Story"
author: "Nathaniel Mantell"
---

The basic structure

User Stories:
As a... user
I want...
So that...

Acceptance Criteria:
1.) Criterion 1
a.) Criterion 1.a
i.) Criterion 1.a.i
b.) Criterion 1.b
2.) Criterion 2

Relevant Wireframes:

Background:

Depending on the arrangement you have with your team, and the time you have to write the stories, you may go further to use the BDD technique of Given.. Then.. When..
What you will want to do is to replace each Acceptance Criterion with a Given.. Then.. When.. statement.
This is a very powerful technique because, if written properly using the Gherkin language syntax for example, each acceptance criterion you write can be translated directly into an automated test.
This is the best practice for modern software development

So, here is what that structure looks like for the Acceptance Criteria section:
Acceptance Criteria:
1.) Criterion 1
a.) Criterion 1.a
i.) Given.. Then.. When..
b.) Given.. Then.. When..
2.) Criterion 2
a.) Given.. Then.. When..

As you can see it is usually best to use the Given.. Then.. When.. structure at the bottom level of each Acceptance Criterion, with the upper levels being to describe the general need that the criterion defines

So, here is an example from a real project I worked on, written without, and then with the BDD syntax

User Stories:

As a Client
I want to see contact information for an Agent
So I can learn more about a Property and what is involved with Applying for and Leasing it

Acceptance Criteria:

1.) The Property Photos must display most prominently at the top
1.) The Property Title must display prominently
1.) The Monthly Rent value must display prominently as a US Dollar value with the words “per month” after it
1.) The Borough and Neighborhood must display prominently as follows
<Borough> - <Neighborhood>
1.) The number of Bedrooms should display next to the bedrooms icon as follows
1.) The number of bedrooms a Property has will simply be determined by the number in its Bedrooms field
a.) If the value in the Bedrooms field is 0, then display “Studio”
b.) If the value in the Bedrooms field is greater than or equal to 1, (>= 1), then display the value with the word “Beds” next to it
1.) The number of Bathrooms should display next to the Bathrooms icon with the word “Baths” next to it
1.) Display the text in the Description field with the header “Description:” above it
1.) Display the Agent details as follows with the header “Contact me for viewings!”
a.) If there is an Agent assigned to the Property, display the following:
i.) The Agent’s Profile pic
ii.) The Agent’s Name
iii.) The Agent’s Phone Number
iv.) The Agent’s Email Address
b.) If there is no Agent assigned to the Property, display the following
i.) The Company Logo
ii.) The Company Phone Number
iii.) The Company Email Address

Relevant Wireframes:

“Property Details” - “Milestone 1 Version” alternate version,
“Property Details - Mobile Version” - “Milestone 1 Version” alternate version,
“Agent Portal - Create/Edit Property” in Balsamiq

Background:

See Property Details Page Epic https://company.atlassian.net/browse/WEB-6

Now, here is the same acceptance criteria, but with the BDD syntax

Acceptance Criteria:

1.) The Property Photos must display most prominently at the top
a.) Given
1.) The Property Title must display prominently
1.) The Monthly Rent value must display prominently as a US Dollar value with the words “per month” after it
1.) The Borough and Neighborhood must display prominently as follows
<Borough> - <Neighborhood>
1.) The number of Bedrooms should display next to the bedrooms icon as follows
1.) The number of bedrooms a Property has will simply be determined by the number in its Bedrooms field
a.) If the value in the Bedrooms field is 0, then display “Studio”
b.) If the value in the Bedrooms field is greater than or equal to 1, (>= 1), then display the value with the word “Beds” next to it
1.) The number of Bathrooms should display next to the Bathrooms icon with the word “Baths” next to it
1.) Display the text in the Description field with the header “Description:” above it
1.) Display the Agent details as follows with the header “Contact me for viewings!”
a.) If there is an Agent assigned to the Property, display the following:
i.) The Agent’s Profile pic
ii.) The Agent’s Name
iii.) The Agent’s Phone Number
iv.) The Agent’s Email Address
b.) If there is no Agent assigned to the Property, display the following
i.) The Company Logo
ii.) The Company Phone Number
iii.) The Company Email Address

How to define the "User"

The "User" will be whoever is going to be using the product. There will be different users, In UML you create "roles" to define the different types of users. According to Agile you should create Personas, a few for each role, which give your roles character that the busines can understand and give you insight as to market dynamics and how to wrangle up users from the real world who may actually use your product. Collectively this will become what I would call your "User Model", which you will work off of as you write your user stories. I will create another article dedicate to this.
Anyway, the user could be a customer who will interact with your website and sign up as a member, or they could be an admin who will be using the admin tool to moderate a site or upload content, they could be a business client in the case of a B2B product. So literally, whoever is going to be using your product you will have to create user stories for.
Here are some examples of how the user stories might look:
As a site member
I want to view the different subscription levels
So that I can decide whether or not to upgrade my subscription
As a top level admin
I want to change permissions for the lower level admins
So that I can get fine grained control over what each admin can do
As a drop ship store owner
I want to leave a note for the supplier
So that I can define special delivery options for them to fulfill
As a supplier
I want to view the drop ship store owner who sold each product
So that I can put their name on the package when I ship the product to the customer

The art of writing a User Story

Experience is a key factor in writing user stories. There is no way around it, but you need to be experienced working in the field to get a feel for writing these things.
One aspect of the art is producing actionable work. This is where the boundary between user stories and actionable "tickets" get merged a little bit.
Typically people will use the term "User Story" when they actually mean "Ticket"
A pure user story is not always that actionable, but a ticket with relevant user stories and acceptance criteria must be actionable. Tickets are what you will deliver to developers and what they will work off of and notate as they go.
Sometimes there are multiple users that factor into a ticket. Typically when I write this stuff I will create a repository of User Stories and include them in a section of each ticket. Some user stories get used multiple times in various tickets. The tickets ask the developers through acceptance criteria to build something that satisfies the relevant user stories, or aspects thereof, because sometimes you can't satisfy a user story all at once.
As you gain experience, you will find the most effective ways with the precious little time you have to produce actionable tickets based on your user stories. Really its a team effort to create a ticket so what I should say is you will find effective ways to particpate in the production of actionable tickets that your team can work off of.

How to make your User Story "perfect"

To make stories perfect you need to understand the ideal best practice for writing the stories, which takes research and staying up to date on product management techniques. But on top of that, you need to adapt your style to your team. Software teams will have varying degrees of expertise and different preferences. The Agile manifesto and subsequent philosophy espouses "people over process" as one of its core tennets, and this is one of the ways in which that tennet manifests itself in a real project. Its good to educate people over time as to the best practice, but ultimately you will want to move at the pace of your team and operate within their comfort level. Provide the with user stories, software requirements, etc. that they can understand and work off of. If they seem frustrated with you then do a meeting just to focus on how they want to see the story. Whether it be businesss stakeholders or developers having trouble with your stories, get them all together to each write one for you as they want it and work from there to give them what they need to work. And, wireframes and prototypes go a really long way, a picture says a thousand words.
Get stories from actual users. I will have to write another article dedicated to this, but Agile methodologies like XP and SCRUM recommend the "customer in the room" so that the Product Manager or Business Analyst always comes up with features that the customers actually need, not just what they tihink a hypothetical customer would need. If your user is a business client you already have repertoire with or you are writing for an admin user who works at your business then its easy, but sometimes it is hard to get time with a real application user. It really really makes a difference, so you should make the investment of time and money or whatever you have to do to make this happen.
communication between team, back and forth. Over the course of writing user stories, you will typically go in a flow of inception, prioritization, refinement, and then planning for each sprint or feature set, what have you. The refinement part should involve you systematically going back and forth between a real user (if you have one or your models of the user, like Personas) and the business stakeholders, and the developers to negotiate on the user story until it is built up and subsequently broken down enough to evolve into the perfect user story that will deliver real value and is easy for your team to produce a solution for.
don't define what or how to build, but specify the needs of the user that must be satisfied. This manifests in each of your acceptance criteria. These are analogous to "business requirements" and define what business needs the solution that is produced from this user story absolutely needs to satisfy. Don't tell your devs how to build it, tell them what business needs and need of the user that they need to satisfy in order for you to consider the product they produce to be complete.
be flexible and do what your developers ask, ultimately they have to dev it, and you want them to feel comfortable (if they are asking for unreasonable things then you have to provide that feedback to the appropriate channels and consider going with different developers)
work with what you got. sometimes it is not necessary or not possible to refine the details of each acceptance criterion to the point of using the BDD Given... Then... When... structure. Many teams work with a product manager and business analyst(s) who can refine the user stories to the greatest level of detail. If its just you and/or you are wearing multiple hats within the company, then you might not have enough time to go into full detail for each user story. You should use BDD practices when you are able but that level of detail can be sacrificed if necessary.
be a developer yourself. this will put you in their shoes and you will get a feel for what is "small enough to estimate" yet still large enough to allow the developers to build a cohesive product. They have to create a system which functions together and there will always have to be some degree of coupling between units in the system so they have to see enough stuff in your story to understand how the important parts interact together to produce work that will actually satisfy the user in the scenario described by the story.
break it down further during sprint planning. this is where the structure of acceptance criteria as I wrote above and a good tool like Jira comes in handy. I used to cut and paste the text of acceptance criteria out of one ticket that was too large to fit into a sprint and put it into a separate one on the fly during planning until we came up with a sprint plan that was deliverable for our time box. Sometimes you have to do stuff like that when you are working on fast paced projects like in a startup.
