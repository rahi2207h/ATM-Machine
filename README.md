#ATM Machine
 the frontend components of a simple ATM machine simulation, implemented using HTML, CSS, and JavaScript. The ATM interface allows users to check their balance, deposit money, and withdraw money through an interactive interface.
 
 1. HTML (Structure)
The HTML provides the structure of the ATM machine simulation page, organizing the content and providing the framework for the user interface.

Key Elements:
<html lang="en">: Defines the language of the page as English.

<head>: Contains meta information for the page:

<meta charset="UTF-8">: Specifies the character encoding for the page.
<meta name="viewport" content="width=device-width, initial-scale=1.0">: Makes the page responsive to different screen sizes.
<title>ATM Machine</title>: Sets the title of the webpage, which appears on the browser tab.
<link rel="stylesheet" href="style.css">: Links the external CSS file for styling the webpage.
<body>: This contains the visible elements that the user will interact with:

<div class="container">: A wrapper element that helps center the content on the page.
<div class="box">: A box inside the container that contains the main ATM content.
<h1>ATM Machine</h1>: A heading displaying the title of the ATM machine interface.
<div id="menu">: A menu that contains the three interactive buttons:
Check Balance: Button to check the user's current account balance.
Deposit Money: Button to deposit money into the account.
Withdraw Money: Button to withdraw money from the account.
<div id="result">: A div element used to display the result of the user's actions (balance, deposit, withdrawal).

 2. CSS (Styling)
The CSS is responsible for the styling of the webpage, ensuring that the ATM machine interface is visually appealing, user-friendly, and responsive. The CSS is applied to make the ATM machine look polished and professional.

Key Style Elements:
General Layout: Uses flexbox or grid layout for centering elements both vertically and horizontally.
Typography: Uses a clear, readable font (e.g., Arial or sans-serif) to ensure the text is legible.
Button Styling:
Buttons are given background colors, padding, and rounded corners to make them look interactive.
Buttons change color when hovered to provide visual feedback.
Container and Box Styling:
The container is set to fill the screen height (100vh) and center the box with the ATM content.
The box has a white background, padding, rounded corners, and a subtle shadow for an elevated look.

3. JavaScript (Functionality)
The JavaScript provides the interactive functionality behind the ATM machine. It defines the logic for checking the balance, depositing money, and withdrawing money.

Key Functions:
checkBalance(): Displays the current balance of the user in the #result div.
depositMoney(): Prompts the user for an amount to deposit, updates the balance, and displays the new balance.
withdrawMoney(): Prompts the user for an amount to withdraw, checks if the user has sufficient funds, and updates the balance accordingly.
