const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/Average', (req, res) => {
  const {grade1, grade2, grade3} = req.body;
  if (typeof grade1 !== "number" && typeof grade2 !== "number" && typeof grade3 !== "number") 
    return res.json("Please enter the grade numbers.");

  const gradeAverage = (grade1 + grade2 + grade3) / 3;

  return res.json(`The average grade of the three subjects is ${gradeAverage}.`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});