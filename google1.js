// An attempted solution to the first question of the google interview video found at https://www.youtube.com/watch?v=XKu_SEDAykw



function sumDigits(sum,array1)

{

for (var i = 0; i < array1.length; i++)

	{


for (var j = 1; j < array1.length; j++)

		{
 
			var i2 = (array1[i]);	
			var j2 = (array1[j]);


			if (i2 + j2 == sum)	
	
				{
					console.log("pairs discovered:");
					console.log(i2 + " " + j2);
					break;
				}


		}



	}

}


// Example: Seeing if any two digits sum to 25 using the arrays below

sumDigits(25,[20,1,24,5])


