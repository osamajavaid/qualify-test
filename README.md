## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<h1>Qualifying test for Junior Document Generation Specialist role</h1>

Please answer the following questions with reference to the provided file `data.json`.

1. Write a JS expression that returns the number of DIRECTORS.

2. Write a JS expression that returns the number of SHAREHOLDERS.

3. Write a JS expression that lists the full names of all position holders.

4A. Is Product B hardware or software?

4B. Does Product A have a price of “100”?

4C. Is the launch date of Product B the 6th January 2010?

5. Write a JS expression that prints the effective date formatted in YYYY-MMM-DD format.

6. What is the JSON address in object notation that stores Robert Johnson’s email address? 

7. Write a JS expression that returns an array of all unique email domains of the position holders.

8. Write a JS expression that returns an array of objects containing the names and email addresses of all DIRECTORS.

9. Write a JS function that takes an email domain as a parameter and returns an array of objects containing the names, email addresses, and corresponding _id of all position holders whose email addresses belong to the specified domain.

10. Write a JavaScript function that returns an array of objects containing the names and email addresses of the top 3 shareholders with the highest number of shares. The function should only consider shareholders whose email addresses belong to the “example.com” domain.
To determine the top shareholders, consider the following criteria:
●	The number of shares held by each shareholder is stored in a separate array called “shareholdings”, you need to correlate this with the “global.positions” array.
●	The order of shareholders in the “global.positions” array corresponds to the order of their shareholdings in the “shareholdings” array.
●	The length of the “shareholdings” array is equal to the number of shareholders.

