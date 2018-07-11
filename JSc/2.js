var num1,num2,num3,num4,num5;
num1 = window.prompt("Enter first number");
num2 = window.prompt("Enter second number");
num3 = window.prompt("Enter third number");
num4 = window.prompt("Enter fourth number");
num5 = window.prompt("Enter fifth number");
parseInt(num1);
parseInt(num2);
parseInt(num3);
parseInt(num4);
parseInt(num5);
if((num1>num2)&&(num1>num3)&&(num1>num4)&&(num1>num5))
{
console.log(num1+" is greater");
}
else if((num2>num1)&&(num2>num3)&&(num2>num4)&&(num2>num5))
{
console.log(num2+" is greater");
}
else if((num3>num1)&&(num3>num2)&&(num3>num4)&&(num3>num5))
{
console.log(num3+" is greater");
}
else if((num4>num1)&&(num4>num2)&&(num4>num3)&&(num4>num5))
{
console.log(num4+" is greater");
}
else if((num5>num1)&&(num5>num2)&&(num5>num3)&&(num5>num4))
{
console.log(num5+" is greater");
}
else if( ((num1===num2)||(num2===num1))&&((num1===num3)||(num3===num1))&&((num1===num4)||(num4===num1))&&((num1===num5)||(num5===num1)) )
{
console.log("Values are equal...!")
}
else
{
console.log("wrong input...!");
}