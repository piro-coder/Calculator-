var number1 =  parseInt(prompt("Number 1: "))
var operator = prompt("Operator:")
var number2 =  parseInt(prompt("Number 2: "))

if (operator == "+")
{
  console.log(number1 + number2)
} else if (operator == "-")
{
  console.log(number1 - number2)
} else if (operator == "*")
{
  console.log(number1 * number2)
} else if (operator == "/")
{
  console.log(number1 / number2)
}