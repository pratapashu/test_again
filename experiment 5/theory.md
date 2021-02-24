<b>Methods&nbsp:-</b><br>

Method is a set of instructions or group of statements or block of code which is used to perform some specific task.
It get executed only when it is invoked and it is also known as "function".
It may allow us to return a single value to the method from where it is called.
The main advantage of creating the method is code reusability and to reduce the size of the program i.e. it doesn't required to type the code repeatedly for same purpose.<br><br>

<b>Syntax of method:-</b><br>
&ensp;access-specifier return-type function-name&nbsp;(parameter1,parameter2 ,parameter3, ......)<br>
&ensp;{<br>
&ensp;&ensp;// function-body<br>
&ensp;}<br><br>

<b>Component of methods:-</b><br>

<b>1. Method Declaration :</b> A method declaration tells the compiler about a method's name,accessibility, return type, and parameters.<br>
It contains 5 method headers -<br>

<b>a) Access-specifier :</b> It is a visibility label from where the methods can be accessed.<br>&ensp;There are 4 type of access-specifier<br>
&ensp;&ensp;• public : It can be accessed in all the classes.<br>
&ensp;&ensp;• private : It can accessed within the class in which it is defined.<br>
&ensp;&ensp;• protected : It can accessed within the class in which it is defined and its subclass.<br>
&ensp;&ensp;• default : It can accessed within only the package. If we don't use any specifier java uses this as by default.<br>
<br>
<b>b) Return-type :</b> The type of data that the method returns is known as return type of that method. It can be of any data type user-define or primitive.<br>
<b>(NOTE : If we don't want to return any value from method use "void" return type.)</b><br><br>

<b>c) Function-name :</b> It is the user defined name of the method to access it.<br><br>

<b>d) Parameter list :</b> It is the list of the variable with data type enclosed within the parentheses and if there is no parameter, left the parentheses empty.<br><br>

<b>e) Function-body :</b> It contains the no. of instructions to be performed.<br><br>


<b>2. Method Calling :</b> To use a method, you will have to call or invoke that method. When a program calls a method, program control is transferred to the called method. A called method performs the defined tasks.<br><br>

<b>Types of methods&nbsp;:- </b> <br>
&ensp;There are number of ways to classify the types of methods which are as follows :<br>

&ensp;&ensp; <b> Predefined / User-defined </b><br>

&ensp;&ensp;&ensp;<b>1. Predefined Methods </b>- There are some methods that are defined in Java class libraries which are known as Predefined<br>&ensp;&ensp;&ensp;&ensp;&ensp;methods or standard library methods or built-in methods.
<br>&ensp;&ensp;&ensp;&ensp;&ensp;<b>Example :</b>  sqrt(), compareTo(), print()<br>

&ensp;&ensp;&ensp;<b>2. User-defined Methods -</b> The methods which are defined by the user are called User-defined methods.<Br>
<Br>
&ensp;&ensp;<b> Static / Non-static</b><br>

&ensp;&ensp;&ensp;<b>1. Static methods -</b> These methods are defined by using the keyword "static" and they are invoked without the use of object <br>&ensp;&ensp;&ensp;&ensp;&ensp;i.e. they doesn't required any instance of the class.<bR>

&ensp;&ensp;&ensp;<b>2. Non-static methods -</b> These methods are defined normally without using the keyword "static" and they are invoked with the <br>&ensp;&ensp;&ensp;&ensp;&ensp;help of object i.e. they required instance of the class.<Br><br>

&ensp;&ensp;<b> Return-type / Paramaterised  </b><br>

&ensp;&ensp;&ensp;<b>1. No-return type no paramater -</b> These methods are defined by using "void" keyword as a return type with no paramaters.<bR>

&ensp;&ensp;&ensp;<b>2. Return type no paramater -</b> These methods are defined by using any of the data-type as a return type of a method with no <br>&ensp;&ensp;&ensp;&ensp;&ensp;paramaters.<br>
&ensp;&ensp;&ensp;<b>3. No-return type with paramater -</b> These methods are defined by using "void" keyword as a return-type with paramaters.<br>
&ensp;&ensp;&ensp;<b>4. Return type with paramater -</b> These methods are defined by using any of the data-type as a return type of a method with <br>&ensp;&ensp;&ensp;&ensp;&ensp;paramaters.<br><Br>


&ensp;&ensp;<b> Abstract / Non-abstract </b><br>

&ensp;&ensp;&ensp;<b>1.Abstract -</b> These methods are defined by using a keyword "abstract". It is a prototype of the method and these methods has <br>&ensp;&ensp;&ensp;&ensp;&ensp;to redefined in the subclass. It is always present in the abstract class.<br>

&ensp;&ensp;&ensp;<b>2.Non-abstract -</b> It can be any of the method which are described above.<br><Br>

<b>Class:-</b><br>
Class is a user-defined data-type which contains data members and member functions.
It may also defined as logical entity and a template from which object is created.
Data member are also called as attribute of the class and member functions are called as methods of the class.<br>
<Br>
<b>Syntax&nbsp:-</b> <br>
&ensp;modifier class class_name<br>
&ensp;{<br>
&ensp;&ensp;data members;<br>
&ensp;&ensp;member functions;<br>
&ensp;};<br><br>

<b>Object:-</b><br>
Object is a real world or runtime entity which have some characteristics and behaviour.
Characteristics is represented by data members and behaviour is represented by member function.
It may be defined as "instance of the class".
It can be logical or physical.<br>
<Br>
<b>Syntax:-</b><br>

Class_name object_name&ensp; =&ensp;new Class_name&nbsp(parameters);<br>