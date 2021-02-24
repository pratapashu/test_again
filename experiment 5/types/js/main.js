   function shrink()
    {
		
        var textSpan = document.getElementById("explain");
        var textDiv = document.getElementById("dynamicDiv");

        textSpan.style.fontSize = 22;

        while(textSpan.offsetHeight >= textDiv.offsetHeight- 43)
        {
            textSpan.style.fontSize = parseInt(textSpan.style.fontSize) - 1;
        }
    }

        function output() {
            var x = document.getElementById("output");
            x.style.display = "block";
        }

        function EnbDsbl() {}

        var i = 1;
        var intervel;
        content = [
'class MethodType',
 ' {',
'public static void main ( String  args  [ ] )',
 '{',
 'MethodType obj = new Method(); ',
 'obj. My_Fun_1();',
'void My_Fun_1() {',
'System.out.println("Method is called");',
'}',
 'obj. My_Fun_2(100,"MyString");',
'void My_Fun_2( int a, String b ) {',
'<span style="font-size:24; "> System.out.println("First parameter ="+a+" Second Parameter = "+b);</span>',
'}',
 'int My_int = Obj. My_Fun_3();',
'int My_Fun_3() {',
'return 100;',
'}',
 'System.out.println(My_int);',
' String My_str = Obj. My_Fun_4;',
'String My_Fun_4( String a, String b ) {',
'return   (a+" "+b);',
'}',
'System.out.println(My_str);',
'} ',
'} ;',''
];


var content2 = [
        
'class "MethodType" is created',
	    
'Class block started',
        
'The main function is created',
        
'Main Function block is started',
        
'Object named "obj" of class "MethodType" is created', 
	
'Method named "My_Fun_1" is called with the help of the object of class "MethodType"',
		
'"My_Fun_1" method is invoked and now it will be executed',
	
'Printing the output',
		
'"My_Fun_1" method is closed',

	
'Method named "My_Fun_2" is called by passing two argument "100" and "MyString" with the help of the object of class "MethodType"',
		
'"My_Fun_2" method is invoked and now it will be executed',
	
'Printing the value of parameters a and b',
		
'"My_Fun_2" method is closed',
	
'Method named "My_Fun_3" is called with the help of the object of class "MethodType" and it returns a value which is assigned to the integer type variable "My_int"',
		
'"My_Fun_3" method is invoked and now it will be executed',
	
'Returning 100',
		
'"My_Fun_3" method is closed',
'Printing the value of variable "My_int"',
	
'Method named "My_Fun_4" is called by passing two argument "Hello" and "User" with the help of the object of class "MethodType" and it returns a value which is assigned to the String type variable "My_str"',
		
'"My_Fun_4" method is invoked and now it will be executed',
	
'Returning a concatenated string "Hello User"',
		
'"My_Fun_4" method is closed',

'Printing the value of variable "My_str"',		
'Main method is closed',
		
'Class is closed',
 "" ];



var explain = [

'-> "class" is a keyword which is used to create a class followed by class-name and it contains attributes and methods.', 

'-> After this parentheses, class attributes and methods are defined.', 

'-> Public is access modifier which is written so that jdk can access the method from outside the class.<br>-> Static is a keyword which is used to call the method without the help of object.<br>-> Void is a data-type which returns nothing.<br>-> Main is a method which is a entry point of program in which string type command line argument is passed which is of array type.<br>',

'After this parentheses, Main function is defined.',

'Using "new" keyword object of the class is created',

'A non-parameterised and non-static method with return type "void" is called by using the object of the class',

'The method is being invoked by the object so it will get executed',

'<span style="color:lightblue;">System</span>: is class<br><span style="color:lightblue;">out</span>: is an object<br><span style="color:lightblue;">print</span>: is a function which is used <br>to print message/values on console',

'Closing parentheses is used to close the non-static method',

'A parameterised and non-static method with return type "void" is called by using the object of the class',

'The method is being invoked by the object so it will get executed',

'<span style="color:lightblue;">System</span>: is class<br><span style="color:lightblue;">out</span>: is an object<br><span style="color:lightblue;">print</span>: is a function which is used <br>to print message/values on console',

'Closing parentheses is used to close the non-static method',


'A parameterised and non-static method with return type "int" is called by using the object of the class and return value is stored in a variable of same type',

'The method is being invoked by the object so it will get executed',
'Return statement is used to return a value whose data type is same as the return type of the method',

'Closing parentheses is used to close the non-static method',

'<span style="color:lightblue;">System</span>: is class<br><span style="color:lightblue;">out</span>: is an object<br><span style="color:lightblue;">print</span>: is a function which is used <br>to print message/values on console',

'A parameterised and non-static method with return type "String" is called by using the object of the class ',

'The method is being invoked by the object so it will get executed',

'Return statement is used to return a value whose data type is same as the return type of the method',

'Closing parentheses is used to close the non-static method',

'<span style="color:lightblue;">System</span>: is class<br><span style="color:lightblue;">out</span>: is an object<br><span style="color:lightblue;">print</span>: is a function which is used <br>to print message/values on console',

'-> Closing parentheses is used to close the body of main function',

'-> Closing parentheses is used to close the class body.',
''
	
];
		
output =[
'',
'',
'',
'',
' ',
'',
'',
'Method is called',
'',
'',
'',
'First parameter = 100 Second Parameter= MyString',
 '','',
'',
'',
'',
 '100',
' ',
'',
'',
'',
'Hello User',
'',
'',
''
];



        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        function manualrun(n, s) {
			
            for (let k = 1; k <= n; k++) {
                document.getElementById(k).style.backgroundColor = "transparent";
            }
            i = s;

            document.getElementById('process').innerHTML = content[i-1];
            document.getElementById('process2').innerHTML = content2[i-1];
            document.getElementById('explain').innerHTML = explain[i-1];
            document.getElementById('output').innerHTML = output[i-1];			
            document.getElementById(i).style.backgroundColor = "transparent";
            document.getElementById(i).style.backgroundColor = "#333847";
				shrink();
        }

        function next(n) {


            if (i == n) {
                i = 1;
            } else if (i != n) {
                i = i + 1;
            }
            manualrun(n, i);
        }

        function prev(n) {

			
            if (i == 1 || i==0) {
                i = n;
            } else {
                i = i - 1;
            }
            manualrun(n, i);
        }

async function runcode(n, s = 1) {
				
            for (let k = 1; k <= n; k++) {
                document.getElementById(k).style.backgroundColor = "transparent";
            }
            document.getElementById(1).style.backgroundColor = "#333847";
            document.getElementById('process').innerHTML = content[0];
            document.getElementById('process2').innerHTML = content2[0];
            document.getElementById('explain').innerHTML = explain[0];
			document.getElementById('output').innerHTML = output[0];
			shrink();

            $('#codes').each(function() {
                this.style.pointerEvents = 'none';
            });


            document.getElementById("run").disabled = true;
            document.getElementById("prev").disabled = true;
            document.getElementById("next").disabled = true;
            for (let k = s; k <= n; k++) {
                await sleep(5000);
        
                if (k == n) {

                    $('#codes').each(function() {
                        this.style.pointerEvents = 'auto';
                    });
				
				
					document.getElementById(15).style.backgroundColor = "transparent";
                    document.getElementById("run").disabled = false;
                    document.getElementById("prev").disabled = false;
                    document.getElementById("next").disabled = false;
                    output();
                }
               var elmnt = document.getElementById(k);
            elmnt.scrollIntoView();
    
                myTimer(n, k);

                 
            }

        
	}

        var temp;

        function myTimer(n, s) {
            if(s==6 || s==10){
               var elmnt = document.getElementById(1);
            elmnt.scrollIntoView();
            }
            document.getElementById('process').innerHTML = content[s];
            document.getElementById('process2').innerHTML = content2[s];
            document.getElementById('explain').innerHTML = explain[s];
            document.getElementById('output').innerHTML = output[s];
            document.getElementById(s).style.backgroundColor = "transparent";
            document.getElementById(s + 1).style.backgroundColor = "#333847";
			shrink();
        }

function ColorMyCode(id) {
for(let j=1;j<=id;j++){

var line = document.getElementById(j).innerHTML.split(" ") ;

var line2 = "";
var keywords = ['public'];
for(let i=0;i<line.length;i++){
	var temp = false;
	for(let k=0;k<keywords.length;k++)
	{
		if(line[i] == keywords[k]){
			temp = true;
			break;
		}
	}
	if(temp)
	{
		line2 = line2+'<span style="color:#FF9D00;">'+line[i]+'</span> ';
	}
	else if(line[i]=="{" || line[i]=="}" || line[i]=="(" || line[i]==")"|| line[i]==";"  )
	{
		line2 = line2+'<span style="color:#abb2c0;">'+line[i]+'</span> ';
	}
	else if(line[i]=="class" || line[i]=="return" || line[i]=="main" || line[i]=="static" || line[i]=="break" || line[i]=="continue" || line[i]=="for" || line[i]=="while" || line[i]=="do") // keywords
	{
		line2 = line2+'<span style="color:#FF9D00;">'+line[i]+'</span> ';
	}
	else if(Number(line[i]) == line[i]) // Numbers
	{
		line2 = line2+'<span style="color:#d29c62;">'+line[i]+'</span> ';
	}
	else if(line[i]=='"' || line[i]==";" || line[i]=="while"   || line[i]=="Int_value=" || line[i]=="int_to_long=" || line[i]=="long_to_float")
	{
		line2 = line2+'<span style="color:gray;">'+line[i]+'</span> ';
	}
	else if(line[i]=='[' || line[i]=="]")
	{
		line2 = line2+'<span style="color:#095971;">'+line[i]+'</span> ';
	}//Datatype#85fff5
	else if(line[i]=='int' ||line[i]=='int' || line[i]=="float" || line[i]=="long" || line[i]=="double" || line[i]=="char" || line[i]=="Boolean" || line[i]=="String" || line[i]=="void")
	{
		line2 = line2+'<span style="color:#1ecaed;">'+line[i]+'</span> ';
	}
	else if(line[i]=='System.out.print' || line[i]=='System.out.println' ) //function
	{
		line2 = line2+'<span style="color:lightblue;">'+line[i]+'</span> ';
	}
	else
	{
		line2 = line2+line[i];
	}
	
}

document.getElementById(j).innerHTML= line2;

}
}

ColorMyCode(33);

