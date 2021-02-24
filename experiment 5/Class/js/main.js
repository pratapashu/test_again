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
       content=[
 'class  Class1',
 '{',
 'public static void main  ( String  args  [ ] ) {',
 'Class2  obj = new  Class2;',
 'obj.set_var(100);',
 'void set_var (int   a) {',
 'var = a;',
 '} ',
'obj.print();',
 'void print ( ) {',
 '<span style="font-size:26px;">System.out.println ("Value of variable in Class2 = "+ var);</span>',
 '}',
 '}',
 '};',
''
];

var content2 = [
        
'class "Class1" is created',
	    
'Class block started',
        
'The main function is created',
        
'Object named "obj" of class "Class2" is created',
        
'Method named "set_var" is called by passing an argument "100" with the help of the object of class "Class2"',
		
'"set_var" method is invoked and now it will be executed',
	
'The value of parameter is assigned to the class variable "var"',
		
'"set_var" method is closed',

'Method named "print" is called with the help of the object of class "Class2"',
		
'"Class2" method is invoked and now it will be executed',
	
'Printing the value of class varible "var"',
		
'"print" method is closed',
		
'Main method is closed',
		
'Class is closed',
        "" ];



var explain = [

'-> "class" is a keyword which is used to create a class followed by class-name and it contains attributes and methods.', 

'-> After this parentheses, class attributes and methods are defined.', 

'-> Public is access modifier which is written so that jdk can access the method from outside the class.<br>-> Static is a keyword which is used to call the method without the help of object.<br>-> Void is a data-type which returns nothing.<br>-> Main is a method which is a entry point of program in which string type command line argument is passed which is of array type.<br>',

'Using "new" keyword object of the class is created',

'A parameterised method with return type "void" is called by using the object of the class',

'The method is being invoked by the object so it will get executed',

'"=" is one of the assignment operators which assigns value of right hand side to its left hand side variable',

'Closing parentheses is used to close the method and afterwards the command is return to the main method',

'A non-parameterised method with return type "void" is called by using the object of the class',

'The method is being invoked by the object so it will get executed',

'<span style="color:lightblue;">System</span>: is class<br><span style="color:lightblue;">out</span>: is an object<br><span style="color:lightblue;">print</span>: is a function which is used <br>to print message/values on console',

'Closing parentheses is used to close the method and afterwards the command is return to the main method',

'-> Closing parentheses is used to close the body of main function',

'-> Closing parentheses is used to close the class body.',
    ''
	
];
		

output=[
 '',
 '',
 '',
 '',
 '',
 '',
 '',
 '',
'',
 '',
 'Value of variable in Class2 = 100',
 '',
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
            if(s==6){
               var elmnt = document.getElementById(1);
            elmnt.scrollIntoView();
            }
            if(s==10)
                {
                    document.getElementById('output').innerHTML = "Value of variable in Class2 = 100";
                }
            
            else{
             document.getElementById('output').innerHTML = " ";
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
	else if(line[i]=="class" || line[i]=="new"  || line[i]=="main" || line[i]=="static" || line[i]=="break" || line[i]=="continue" || line[i]=="for" || line[i]=="while" || line[i]=="do") // keywords
	{
		line2 = line2+'<span style="color:#FF9D00;">'+line[i]+'</span> ';
	}
	else if(Number(line[i]) == line[i]) // Numbers
	{
		line2 = line2+'<span style="color:#d29c62;">'+line[i]+'</span> ';
	}
	else if(line[i]=='"' || line[i]==";" || line[i]=="while" || line[i]=="//MyFirstFun(&nbsp;);"  || line[i]=="Int_value=" || line[i]=="int_to_long=" || line[i]=="long_to_float")
	{
		line2 = line2+'<span style="color:gray;">'+line[i]+'</span> ';
	}
	else if(line[i]=='[' || line[i]=="]")
	{
		line2 = line2+'<span style="color:#095971;">'+line[i]+'</span> ';
	}
	else if(line[i]=='int' || line[i]=="float" || line[i]=="long" || line[i]=="double" || line[i]=="char" || line[i]=="boolean" || line[i]=="String" || line[i]=="void")
	{
		line2 = line2+'<span style="color:#c675df;">'+line[i]+'</span> ';
	}
	else if(line[i]=='System.out.print' ||  line[i]=='System.out.println' ) //function
	{
		line2 = line2+'<span style="color:lightblue">'+line[i]+'</span> ';
	}
	else
	{
		line2 = line2+line[i];
	}
	
}

document.getElementById(j).innerHTML= line2;

}
}

ColorMyCode(18);
