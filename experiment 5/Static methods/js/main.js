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
        var content = [
			'class Method',
			'{',
			'public static void main ( String  args  [ ] )',
			'{',
			'//  MyFirstFun();',
			'Method obj = new Method(); ',
			'obj. MyFirstFun();',
			'void MyFirstFun()',
			'{',
			'System.out.println("Method is called");',
			'}',
			'MyFirstFun1();',
			'static void MyFirstFun1()',
			'{',
			'System.out.println("Static Method is called");',
			'}',
			'} ',
			'} ;',''
			];
var content2 = [
        'class "Method" is created',
	'Class block started',
        'The main function is created',
        'Function block is started',
        'This line is commented as it will generate an error because we are trying to call a non-static method "MyFirstFun" without an object',
	'Object named "obj" of class "Method" is created',
		'Method named "MyFirstFun" is called with the help of the object of class "Method"',
		'"MyFirstFun" method is invoked and now it will be executed',
		'Non-Static method block is started',
		'Printing the output',
		'Non-Static function is closed',
		'Static method "MyFirstFun1" is called',
		'Static method "MyFirstFun1" is invoked and now it will be executed',
		'Static method block is started',
		'Printing the output',
		'Static method is closed',
		'Main method is closed',
		'Class is closed',
        "",'' ];



var explain = [

'-> "class" is a keyword which is used to create a class followed by class-name and it contains attributes and methods.',

'-> After this parentheses, class attributes and methods are defined.',

'-> Public is access modifier which is written so that jdk can access the method from outside the class.<br>-> Static is a keyword which is used to call the method without the help of object.<br>-> Void is a data-type which returns nothing.<br>-> Main is a method which is a entry point of program in which string type command line argument is passed which is of array type.<br>',

'After this parentheses, Main function is defined.',

'//Commented line',

'Using "new" keyword object of the class is created',

'Non-Static method is called by using the object of the class',

'The method is being invoked by the object so it will get executed',

'After this parentheses, non-static method is defined',

'<span style="color:lightblue;">System</span>: is class<br><span style="color:lightblue;">out</span>: is an object<br><span style="color:lightblue;">print</span>: is a function which is used <br>to print message/values on console',

'Closing parentheses is used to close the non-static method',

'A method is called without the help of any object as it is <b><u>"Static"</u></b> in nature ',

'The Static method is being invoked so it will get executed',

'After this parentheses, static method is defined',

'<span style="color:lightblue;">System</span>: is class<br><span style="color:lightblue;">out</span>: is an object<br><span style="color:lightblue;">print</span>: is a function which is used <br>to print message/values on console',

'Closing parentheses is used to close the body of static method',

'-> Closing parentheses is used to close the body of main function',

'-> Closing parentheses is used to close the class body.',
''
];

var output= [
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'',
			'Method is called',
			'',
			'',
			'',
			'',
			'Static Method is called',
			'',
			'',
			'',''
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
		var var_a ="";

		var temp_var = false;
		
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
					var_a ="";
					var_b ="";
					temp_var =false;
					document.getElementById(15).style.backgroundColor = "transparent";
                    document.getElementById("run").disabled = false;
                    document.getElementById("prev").disabled = false;
                    document.getElementById("next").disabled = false;
                    output();
                }
                myTimer(n, k);
				if (k == 9)
				document.getElementById('output').innerHTML = "Method is called";
			
				if(k == 14)
					document.getElementById('output').innerHTML = "Static Method is called";
				}
            }

        
	

        var temp;

        function myTimer(n, s) {


  var elmnt = document.getElementById(s);
  elmnt.scrollIntoView();
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
	else if(line[i]=='System.out.print' || line[i]=='Method' || line[i]=='MyFirstFun' || line[i]=='MyFirstFun1' || line[i]=='System.out.println' ) //function
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
