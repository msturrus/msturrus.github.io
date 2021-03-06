
# **Project 1**

This project is going to be a choose-your-own adventure style game with a modestly branching storyline and least one minigame.  The story will be about the protagonist attempting to steal an historic space capsule from the Smithsonian.  I am not sure how long anything will take so I am going to build it out in phases.


## **ESSENTIALS**
I am going to build this first, in order to be sure to meet the project requirements by the deadline.  This will include the intro text, one minigame (navigating the smithsonian by clicking doors in a proper sequence, generated randomly at game start), and two ending outcomes (success/failure) based on successfully completing the minigame.  It will require linked html pages, extensive CSS, a manageable amount of JQuery/javascript, and a manageable amount of basic art assets.

## **ESSENTIALS +**
This will add on to the essentials by adding story branches, determined by user's response to yes/no or multiple-choice prompts with an added random element.  This will add between 2 and 6 extra endings, for a total of 4-8.  Compared to ESSENTIALS, It will require more linked html pages, a small amount of added CSS, a small amount of added JQuery/javascript, and double the amount of art assets.

## **XTRA**
This version will add 1-2 additional minigames for a total of 2-3.  These minigames and their outcomes would be incorporated into the extra story branches added in ESSENTIALS + and would replace some of the simple choices.  Compared to ESSENTIALS +, It will require a similar number of linked HTML pages, a large amount of added CSS, a large amount of added JQuery/javascript, and added art assets.

# Story Outline - ESSENTIALS

### Intro - 1

**{playerCharacter}** is a child, listening to his father tell him a story.  The father tells him an implausible tale about how he was an astronaut enrolled in the Gemini program, and how he heroically piloted his capsule - **Gemini C-02** - back to earth despite a terrible mechanical failure.  **{playerCharacter}** listens in awe, clearly believing every word.

### Intro - 2

**{playerCharacter}**, now a man in his early 40's, watches a news report.  The reporter talks about how historic space capsule **Gemini C-02** will soon be added to the Smithsonian's **National Air and Space Museum** collection.  The reporter elaborates on the history of **Gemini C-02**, explaining that an astronaut named Rob Almuns piloted the capsule back to earth safely.  This causes **{playerCharacter}** to become enraged, as he believes his father - not Ron Almuns - was the hero the newscaster described.  **{playerCharacter}** resolves to steal the capsule from the **National Air and Space Museum** and set the historical record straight.

### Part 1

**{playerCharacter}** contacts an aquaintance who is a docent at **National Air and Space Museum**, and gets **{layoutInformation}** (randomly pulled from an array of possibilities) from him/her concerning the capsule's location and security measures.  **{playerCharacter}** resolves to use this information to find a way to the capsule, where he will steal it and load it on a flatbed, ideally escaping with the capsule and drawing attention to his father's purported career as an astronaut.

### Part 1 minigame

The user must navigate through the museum, clicking on doors in a sequence based on the **{layoutInformation}** generated on load and relayed to the user in the previous sequence.  If the user makes a mistake in the sequence, **{playerCharacter}** is arrested and gets linked to **badend.html**.  If he succeeds, he escapes with the capsules and gets linked to **goodend.html**.  


___

# First Build


This build is pretty bare bones.  It includes very minimal css styling, no img or sounds, and only one story branch to act as a test branch.

## Technologies Used:
  -HTML
  -CSS
  -javascript
  -jQuery


Only the following html files are used, the rest are space-holders:

**index.html**: Intro, backstory, link to the character creator

**charactercreator.html**:  A page for assigning character name, and generating and saving stats to localStorage.

**branch1.html**: a simple narrative encounter with a museum guard.  Depending on the skill chosen and a bit of luck the skill check will link the user to **winner.html** or **loser.html**.  Alternately, the user can choose to play the minigame at **hallgame.html**

**hallgame.html**:  A minigame that involves clicking different doors.  There is a small chance (1/15) per door that the user will get caught and linked to **loser.html**.  There is a larger chance (1/12) that each door will reveal the capsule and link the user to **winner.html**.  Failing either of these, there is a click counter that links the user to **winner.html** once 20 doors have been clicked without getting caught.  All links are preceded by a brief timeout.

## Things Left To Do

  --Complete the missing branches
  --Code for ending flags/variables that influence multiple endings/generate ending details
  --Style/layout overhaul (CSS)
  --Narrative expansion and amendments
  --Code refactoring
  --Adding images where they are appropriate
