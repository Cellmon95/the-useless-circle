INSERT MANDATORY GIF

# Project Title

A useless circle that follows youre mouse or touch.
link: https://the-useless-circle.vercel.app/

# Installation

Click the link.

# Code Review

1. `index.html:16-21` - The picture tag has no corresponding closing tag, and the div closing tag has no corresponding opening tag.
1. `script.js:54-135` - The functions could use some comments to ease readability.
1. `script.js:72-93` - drawCirclePoints is quite a big function with lots of nesting, breaking out parts of it as smaller functions could help readability.
1. `script.js:62` - The parameter e is never used, so doesn't need to be there.
1. `script.js:77-79` - There is inconsistent indentention here.

# Testers

Tested by the following people:

1. Jane Doe
2. John Doe
