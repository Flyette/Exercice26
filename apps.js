var foo = "je suis en train de coder";
var bar = foo.toUpperCase();
if (bar != foo)
{
	alert("c ca");
}
else
{
	alert("c pas ca");
};
var toto = "Je suis fan de DBZ";
var tata = toto.toUpperCase();
if (toto == tata)
{
	alert("Vas y c bon");
}
else
{
	alert("c pas ca caca");
};
function comparechaine(str)
{
	var maj = str.toUpperCase();
if (str != maj)
{
		document.writeln(str + "Yes!!!!!</br>");		
	}
else
{
	document.writeln("Pourquoi Pas</br>")
}
		
}
comparechaine("TU VAS BIEN OUI</br>");
var foo = "c pas ca tu sais</br>";
comparechaine(foo);
comparechaine("a bon c ca</br>");