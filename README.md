# Etch-A-Sketch

a browser version of something between a sketchpad and an Etch-A-Sketch

Create a webpage with a 16x16 grid of square divs.

Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!

Use flexbox to make the divs appear as a grid (versus just one on each line).

Be careful with borders and margins, as they can adjust the size of the squares!

Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.

Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.

Research button tags in HTML and how you can make a JavaScript function run when one is clicked.

Also check out prompts.
You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

Push your project to GitHub!

Extra credit
Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.

Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.
Additionally, implement a progressive darkening effect where each interaction adds 10% more black or color to the square. The objective is to achieve a completely black square only after ten interactions.
