# ATM-Machine
This is the HTML code for a basic ATM machine interface. The webpage is designed with a simple layout and allows users to interact with an ATM machine simulation. Here's a breakdown of the structure:

HTML Structure:
<head>: Contains meta information like character set, viewport settings for responsiveness, and links to the external stylesheet (style.css) for styling.
<body>: The main content area includes a container div with a class of container. Inside the container, there's a box div containing:
A heading (<h1>) displaying the title "ATM Machine."
A menu (<div id="menu">) with three buttons for the user to:
Check Balance
Deposit Money
Withdraw Money
A <div id="result"> to display the result of any action taken.
External Resources:
  
#CSS: A style.css file is linked to style the page and elements (not provided in the HTML).
JavaScript: A script.js file is linked for the functionality of the buttons (e.g., checking balance, depositing, or withdrawing money). The JavaScript is expected to handle the logic behind these actions when a user interacts with the buttons.
  
#JavaScript (Functionality)
The JavaScript provides the interactive functionality behind the ATM machine. It defines the logic for checking the balance, depositing money, and withdrawing money.

Key Functions:
checkBalance(): Displays the current balance of the user in the #result div.
depositMoney(): Prompts the user for an amount to deposit, updates the balance, and displays the new balance.
withdrawMoney(): Prompts the user for an amount to withdraw, checks if the user has sufficient funds, and updates the balance accordingly.
Purpose:
This page simulates the functionality of an ATM machine where users can check their balance, deposit money, or withdraw money. The actual functionalities are handled by JavaScript, which will respond to user inputs and display the results in the #result section.
