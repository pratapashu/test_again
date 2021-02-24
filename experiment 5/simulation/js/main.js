  

        function output() {
			
            var x = document.getElementById("output");
            x.style.display = "block";
        }
		
 function shrink()
    {
		
        var textSpan = document.getElementById("explain");
        var textDiv = document.getElementById("dynamicDiv");

        textSpan.style.fontSize = 35;

        while(textSpan.offsetHeight >= textDiv.offsetHeight- 43)
        {
            textSpan.style.fontSize = parseInt(textSpan.style.fontSize) - 1;
        }
    }
        function EnbDsbl() {}

        var i = 1;
        var intervel;
        var content = ['class HelloWorld', '{', 'public static void main(String args[])', '     {', 'System.out.println ("HelloWorld!");', '     }', '     }', " "];
        var content2 = ['class "Helloworld" is created', 'Inside this parentheses class definition is given', 'The main function is created', 'Inside this the function defination is given', 'this print the message', 'function closed', 'class closed', " "];
        var explain = ['<span style="color:lightblue;">class</span>: is a keyword', 'parentheses', '<span style="color:lightblue;">public</span>: is access modifier<br><span style="color:lightblue;">static</span>: is keyword<br><span style="color:lightblue;">void</span>: is a datatype<br> <span style="color:lightblue;">main</span>: is a function name ', 'parentheses', '<span style="color:lightblue;">System</span>: is class<br><span style="color:lightblue;">out</span>: is an object<br><span style="color:lightblue;">println</span>: is a function which print on console', 'parentheses', 'parentheses', " "];

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
			shrink();

            $('#codes').each(function() {
                this.style.pointerEvents = 'none';
            });


            document.getElementById("run").disabled = true;
            document.getElementById("prev").disabled = true;
            document.getElementById("next").disabled = true;
            for (let k = s; k <= n; k++) {
                await sleep(3000);

                if (k == n) {

                    $('#codes').each(function() {
                        this.style.pointerEvents = 'auto';
                    });


                    document.getElementById("run").disabled = false;
                    document.getElementById("prev").disabled = false;
                    document.getElementById("next").disabled = false;
                    output();
                }
                myTimer(n, k);
            }

        }


        var temp;

        function myTimer(n, s) {




            document.getElementById('process').innerHTML = content[s];
            document.getElementById('process2').innerHTML = content2[s];
            document.getElementById('explain').innerHTML = explain[s];

            document.getElementById(s).style.backgroundColor = "transparent";
            document.getElementById(s + 1).style.backgroundColor = "#333847";
	shrink();
        }

function ColorMyCode(id) {
for(let j=1;j<=id;j++){

var line = document.getElementById(j).innerHTML.split(" ") ;

var line2 = "";
var keywords = ['static','void','class','public'];
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
		line2 = line2+'<span style="color:lightblue;">'+line[i]+'</span> ';			
	}
	else if(line[i]=="{" || line[i]=="}")
	{
		line2 = line2+'<span style="color:#FFB200;">'+line[i]+'</span> ';
	}
	else if(line[i]=="(" || line[i]==")")
	{
		line2 = line2+'<span style="color:pink;">'+line[i]+'</span> ';
	}
	else if(line[i]=='"' || line[i]==";")
	{
		line2 = line2+'<span style="color:gray;">'+line[i]+'</span> ';
	}
	else if(line[i]=='[' || line[i]=="]")
	{
		line2 = line2+'<span style="color:#095971;">'+line[i]+'</span> ';
	}
	else
	{
		line2 = line2+line[i];
	}
	//alert(line2);
}

document.getElementById(j).innerHTML= line2;

}
}

ColorMyCode(7);
