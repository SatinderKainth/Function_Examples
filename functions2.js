// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

// function array()
// {
//     var arr=[];
//     for (var i=1; i<256;i++){
//     console.log([i]);
//     }
// }
// array();


function array()
{
    var arr=[];
    for (var i=1; i<256;i++){
    }
    return arr;
}
array();

// 2. Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

var sum=0;
function even() {
for(var j=1; j<=1000; j++)
{
    if(j%2==0)
    {
    sum+=j;
    }
}
return sum;
}
even();

// Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

var sum=0;
function odd(){
  for(var j=1; j<=5000; j++){
    if(j%2!==0)
    {
      sum+=j
      }
    }
  return sum;
}
odd();

// 4. Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).


function array(arr)
{
    var sum=0;
    for(var i=0;i<arr.length;i++)
    {
    sum = sum +arr[i];
    }
    return sum;
}
console.log(array([1,2,3,4,9,2]));

// 5. Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function Max(arr)
{
    var max = arr[0];
    for (var i=0; i<arr.length; i++)
    {
      if(max<arr[i])
      {
        max=arr[i];
      }
    }
    return max;
}
  console.log(Max([2,5,6,-5]));

// 6. Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

  function avg(arr) 
  {
    var average=0;
    for (var i=0; i<arr.length; i++)
    {
      average= average+arr[i];
      //var array= average/arr.length;
    }
    return average/arr.length;
  }
  console.log(avg([1,2,5,8,7,9,6,3]));
  console.log(avg([2,8,7]));

// 7. Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method

function odd()
{
  var arr=[0];
  for(var i=1; i<50; i++)
  {
    if(i%2!==0)
    {
      arr.push(i);
    }
  }
  return arr
}
console.log(odd());

// 8. Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greater(arr, y)
{
  var array=0;
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i]>y)
    {
      array=array+1;
    }
  }
  return array;
}
console.log(greater([1,3,5,7],3));

// 9. Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function square(arr)
{
  
  for(var j=0;j<arr.length;j++)
  {
    arr[j]=arr[j]*arr[j];
    }
  return arr;
}
console.log(square([1,5,10,-2]));

// 10. Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function negative(arr)
{
  for (var i=0; i<arr.length;i++)
  {
    if(arr[i]<0)
    {
      arr[i]=0;
    }
    return arr;
  }
  
}
console.log(negative([1,3,8,-7,5,8]));

// 11. Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function MaxMin(arr)
{
  var max=arr[0];
  var min=arr[0];
  var avg=arr[0];
  var sum=arr[0];

  for( var i=0; i<arr.length;i++)
  {
    if(arr[i]>max)
    {
      max=arr[i];
    }
    if(arr[i]<min)
    {
      min=arr[i];
    }
    sum =sum+arr[i];
  }
  avg=sum/arr.length;
  var array=[max,min,avg];
  return array;
}
console.log(MaxMin([1,5,10,-2]));

// 12. Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function Swap(array)
{
  var temp = array[0];
  array[0] = array[array.length-1];
  array[array.length-1] = temp;
  return array;
}
console.log(Swap([1,5,10,-2]));

// 13. Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function String(value)
{
  for(var i=0; i<value.length; i++)
  {
    if(value[i]<0)
    {
      value[i]='Dojo';
    }
  }
  return value;
}
console.log(String([-1,-3,2]));