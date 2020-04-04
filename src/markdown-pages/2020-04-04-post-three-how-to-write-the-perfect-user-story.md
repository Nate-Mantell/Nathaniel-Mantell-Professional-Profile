---

path: "/blog/how-to-write-the-perfect-user-story"

date: "2020-04-04"

title: "How To Write The Perfect User Story"

author: "Nathaniel Mantell"
---## The basic structure of a User Story

There are different opinions on what exactly is meant by the term "user story", but this the structure of a user story in its purest form:

As a... (type of user)  
I want... (to do something)  
So that... (I can achieve some result)

## How to make an actionable ticket out of User Stories

There are many ways to create actionable tickets, but below is a format I have used with success on multiple projects

**Feature or Ticket Name**

**User Stories:**

As a...  
I want...  
So that...

**Acceptance Criteria:**

1. Criterion 1  
   &nbsp;&nbsp;&nbsp;a. Criterion 1.a  
   &nbsp;&nbsp;&nbsp;b. Criterion 1.b  
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i. Criterion 1.b.i
2. Criterion 2

**Relevant Assets:**  
wireframe 1  
wireframe 2  
prototype 1  
graphics file 1

**Background:**  
Some background info to give context about what has already been developed, what the future might look like, relevant events that may relate to the work that is to be performed, and relevant user concerns, business concerns, and technical concerns which aren't actually requirements for acceptance criteria

## Using the BDD Given.. Then.. When.. form in your User Story

Depending on the arrangement you have with your team, and the time you have to write the stories, you may go further to use the "Behavioral Driven Development" technique of Given.. Then.. When..

What you will essentially want to do is to replace each Acceptance Criterion with a Given.. Then.. When.. statement

This is a very powerful technique because, if written properly using the Gherkin language syntax for example, each acceptance criterion you write can be translated directly into an automated test

That makes it the best practice for modern software development

So, here is what that structure looks like for the BDD Acceptance Criteria:

**Feature:** Feature Name  
As a...  
I want...  
So that...

**Background:**  
background info  
relevant assets

**Scenario:** Scenario 1 name  
**Given..**  
**Then..**  
**When..**

**Scenario:** Scenario 2 name  
**Given..**  
**Then..**  
**When..**

Instead of creating an Acceptance Criteria section with a bulleted list of criteria, you use multiple Scenario statements each with Given, Then, When conditions, which can be extended with special syntax like And, and But...

## Real world example User Story

Here is an example from a real project I worked on, written without, and then with the BDD syntax

**Property Details Page**

**User Stories:**

As a Client  
I want to see information about a Property  
So I can learn about the Property and determine if I want to Apply for a Lease on it

As a Client  
I want to see contact information for an Agent  
So I can learn more about a Property and what is involved with Applying for and Leasing it

**Acceptance Criteria:**

1. The Property Photos must display most prominently at the top of the page
2. The Property Title must display prominently
3. The Monthly Rent value must display prominently as a US Dollar value with the words “per month” after it
4. The number of Bedrooms should display next to a Bedrooms Icon
5. The number of bedrooms a Property has will simply be determined by the number in its Bedrooms field  
   &nbsp;&nbsp;&nbsp;a. If the value in the Bedrooms field is 0, then display “Studio”  
   &nbsp;&nbsp;&nbsp;b. If the value in the Bedrooms field is greater than or equal to 1, (>= 1), then display the value with the word “Beds” next to it
6. The number of Bathrooms should display next to the Bathrooms icon with the word “Baths” next to it
7. Display the text in the Description field with the header “Description:” above it
8. Display the Agent details as follows  
   &nbsp;&nbsp;&nbsp;a. If there is an Agent assigned to the Property, display the following:  
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i. The Agent’s Profile pic  
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii. The Agent’s Name  
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii. The Agent’s Phone Number  
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iv. The Agent’s Email Address  
   &nbsp;&nbsp;&nbsp;b. If there is no Agent assigned to the Property, display the following  
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i. The Company Logo  
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii. The Company Phone Number  
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii. The Company Email Address

**Relevant Wireframes:**  
“Property Details - Milestone 1 - Desktop Version”  
“Property Details - Milestone 1 - Mobile Version”  
“Agent Portal - Create/Edit Property”

**Background:**  
See Property Details Epic

## Example User Story with BDD syntax

Now, here is the same ticket, user story and acceptance criteria, but written using BDD syntax

**Feature:** Property Details Page

As a Client  
I want to see information about a Property  
So I can learn about the Property and determine if I want to Apply for a Lease on it

As a Client  
I want to see contact information for an Agent  
So I can learn more about a Property and what is involved with Applying for and Leasing it

**Background:**  
See Property Details Epic  
Relevant wireframes are as follows  
“Property Details - Milestone 1 - Desktop Version”  
“Property Details - Milestone 1 - Mobile Version”  
“Agent Portal - Create/Edit Property”

**Given** the "client-user" navigates to page "property-details-page"

**Scenario:** Client views the Property Details Page  
When the "client-user" views the page  
Then the Property Photos must display prominently at the top of the page  
And the Property Title must display prominently  
And the Monthly Rent value must display prominently as a US Dollar value  
And the words "per month" must display to the right of the Monthly Rent value  
And the value representing the number of Bedrooms must display on the page  
And a Bedrooms icon must display next to the value representing the number of Bedrooms  
And the number of Bathrooms must display on the page  
And the Bathrooms icon should display next to the number of Bathrooms  
And the word “Baths” should display to the right of the number of Bathrooms  
And the Property description text must display on the page  
And the word "Description" must display above the description text  
And the Agent Details Section must display on the page

**Scenario:** Client views a Property Details Page for a Studio Apartment  
When the value in the Bedrooms field is 0  
Then display “Studio” instead of a number for the value representing the number of Bedrooms

**Scenario:** Client views a Property Details Page for an Apartment with Multiple Rooms  
When the value in the Bedrooms field is greater than or equal to 1, (>= 1)  
Then display then display the numeric value for the value representing the number of Bedrooms  
And display the word “Beds” next to the numeric value

**Scenario:** Client views a Property Details Page for an Apartment with an Agent assigned to it  
When the Property has an Agent assigned to it  
Then display the Agent’s Profile pic in the Agent Details Section  
And display the Agent’s Name in the Agent Details Section  
And display the Agent’s Phone Number in the Agent Details Section  
And display the Agent’s Email Address in the Agent Details Section

**Scenario:** Client views a Property Details Page for an Apartment with No Agent assigned to it  
When the Property has an Agent assigned to it  
Then display the Company Logo in the Agent Details Section  
And display the Company Phone Number in the Agent Details Section  
And display the Company Email Address in the Agent Details Section

> Note:  
> This feature could be split into a few features depending on what the team agreed to  
> Using the BDD syntax is more feature-centric while the previous ticket notation is more based around digestible and cohesive chunks of work  
> You may use the ticket notation paired with separate BDD feature files referenced from within Acceptance Criteria bullets  
> It all depends on team preferences. I wrote the above for a very small team of myself and two developers, so it made the most sense to do it the way I have presented

## How to define the "User"

The "User" will be whoever is going to be using the product. There will be different users, In UML you create "roles" to define the different types of users. According to Agile you should create Personas, a few for each role, which give your roles character that the business can understand and give you insight as to market dynamics and how to wrangle up users from the real world who may actually use your product. Collectively this will become what could be called your "User Model", which you will work off of as you write your user stories. I will create another article dedicated to this.

The user could be a customer who will interact with your website and sign up as a member, or they could be an admin who will be using the admin tool to moderate a site or upload content, they could be a business client in the case of a B2B product. So literally, whoever is going to be using your product you will have to create user stories for.

Here are some examples of how the user stories might look which exemplify different types of users:

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

## The art of writing a User Story

Experience is a key factor in writing user stories. There is no way around it, but you need to be experienced working in the field to get a feel for writing these things.

One aspect of the art is producing actionable work. This is where the boundary and terminology between user stories and actionable "tickets" get blurred a little bit.

Many times people will use the term "User Story" when they actually mean "Ticket"

A pure user story is not always that actionable, but a ticket with relevant user stories and acceptance criteria for satisfying the user story must be actionable, meaning a developer can take it and actually build something. Tickets are what will be delivered to developers and what they will work off of as they go.

Some user stories get used multiple times in various tickets and sometimes there are multiple users or user stories that a single ticket is relevant to. Typically when I write this stuff I will create a repository of User Stories and include references to them in a section of each ticket.

The tickets ask the developers through acceptance criteria to build something that satisfies the relevant user stories. And as I said sometimes multiple tickets relate to one user story, because sometimes you can't satisfy a user story all at once.

As you gain experience, you will find the most effective ways with the precious little time you have to produce actionable tickets based on your user stories. Really its a team effort to create a ticket, so what I should say is that you will find effective ways to participate in the production of actionable tickets that your team can work off of.

## How to make your User Story "perfect"

To make stories perfect you need to understand the ideal best practice for writing the stories, which takes research and staying up to date on product management techniques. But on top of that, you need to adapt your style to your team. Software teams will have varying degrees of expertise and different preferences. The Agile manifesto and subsequent philosophy espouses "people over process" as one of its core tenets, and this is one of the ways in which that tenet manifests itself in a real project.

It's good to educate team members over time as to the best practice, but ultimately you will want to move at the pace of your team and operate within their comfort level. Provide them with user stories, software requirements, etc. that they can understand and work off of. If they seem frustrated with the way you are doing it then do a meeting just to focus on how they want to see the story. Whether it be business stakeholders or developers having trouble with your stories, get them all together to each write one for you as they want it and work from there to rethink your style so you can give them what they need to work. And, wireframes and prototypes go a really long way, a picture says a thousand words.

### Get stories from actual users

I will have to write another article dedicated to this, but Agile methodologies like XP and SCRUM recommend the "customer in the room" so that the Product Manager or Business Analyst always comes up with features that the customers actually need, not just what they think a hypothetical customer would need. If your user is a business client you already have repertoire with or you are writing for an admin user who works at your business then its easy, but sometimes it is hard to get time with a real application user. It really really makes a difference, so you should make the investment of time and money or whatever you have to do to make this happen.

### Build your User Stories iteratively and incrementally

Over the course of writing user stories, you will typically go in a flow of inception, prioritization, refinement, and then planning for each sprint or feature set, what have you. The refinement part should involve you systematically going back and forth between a real user (if you have one or your models of the user, like Personas) and the business stakeholders, and the developers to negotiate on the user story until it is built up and subsequently broken down enough to evolve into the perfect user story that will deliver real value and is easy for your team to produce a solution for.

### Don't define technical specifications

Don't define exactly what or how to build, but specify the needs of the user that must be satisfied. These needs are manifested by each of your acceptance criteria. These are analogous to "business requirements" and define what business needs the solution that is produced from this user story absolutely needs to satisfy. Don't tell your devs how to build it, tell them what business needs and need of the user that they need to satisfy in order for you to consider the product they produce to be complete.
There is a caveat to this in which a product user may have a technical role, and they will need the product to conform to specific technical specifications, like for instance the consumer of an API you build may have technical specifications you need to follow.

### Be flexible and do what your developers ask

Ultimately they have to dev it, and you want them to feel comfortable, so if they want you to structure your stories or tickets in a particular way or ask for some other kinds of deliverables, you should try to work with them. People over process, if you have talented devs that keeping them around can be more valuable than doing everything "the right way". If they are consistently asking for unreasonable things and rejecting your suggestions then you may have to provide that feedback to the appropriate channels and consider going with different developers or the team may have to be restructured.

### Work with what you got

Sometimes it is not necessary or not possible to refine the details of each acceptance criterion to the point of using the BDD Given... Then... When... structure. Many teams will staff both a product manager and business analyst(s) who can work together to refine the user stories to the greatest level of detail. If its just you and/or you are wearing multiple hats within the company, then you might not have enough time to go into full detail for each user story. You should use BDD practices when you are able but that level of detail can be sacrificed if necessary, because early and often delivery is the best way to get a quality product.

### Work closely with developers

If you can work closely with developers then you can gain more leeway with the way you write your user stories.
Although they should be clear and concise and properly sized and prioritized according to business need, you don't want to spend a ton of time perfecting the user stories if you can establish constant feedback with a small team of developers.
Feedback and iteration trumps details, as there will always arise cases you didn't expect and technical hurdles, and grey areas of interpretation.
Always try to work with developers as closely as possible and be available to provide clarification as they need it.

### Be a developer yourself

This will put you in their shoes and you will get a feel for what is "small enough to estimate" yet still large enough to allow the developers to build a cohesive product. They have to create a system which functions together and there will always have to be some degree of coupling between units in the system so they have to see enough stuff in your story to understand how the important parts interact together to produce work that will actually satisfy the user in the scenario described by the story.

### Break stories down further during sprint planning

This is where the structure of acceptance criteria as I wrote above and a good tool like Jira comes in handy. I used to cut and paste the text of acceptance criteria out of one ticket that was too large to fit into a sprint and put it into a separate one on the fly during planning until we came up with a sprint plan that was deliverable for our time box. Sometimes you have to do stuff like that when you are working on fast paced projects like in a startup.

[Contact me](/contact/) if you have are interested in hiring me to manage your product or develop your site, or if you would like to learn more about my process.
