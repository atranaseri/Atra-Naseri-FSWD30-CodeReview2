function AM(Amsterdam,Netherlands,average price){

	var amsterdam = [1500, 500, 1800, 700];
	var sum=1500+ 500+ 1800+700;
	var avg1=sum/4;
	return( sum + avg );
}


	document.getElementById("column1").innerHTML =AM(1500, 500, 1800, 700);

function LO(London,United Kingdom,average price){

	var Londonondon=[2500, 1500, 1000, 900];
	var sum=2500+1500+1000+900;
	var avg2=sum/4;
	return( sum + avg );
}
	document.getElementById("column2").innerHTML =Lo(2500, 1500, 1000, 900);

	var EUrorBtn= document.querySelector('#box'),
		column1 = document.querySelector('#column1'),
		column2 = document.querySelector('#column2'),

		function Euro(){


			var avg3 = 1472- 1125;
			return( avg3 );
		}

		EUroBtn.addEventListener(' click' , box );

	
	

	var a = new Array(4);
		a[0]= 1500;
		a[1]= 500;
		a[2]= 1800;
		a[3]= 700;
		var l = new Array(4);
		l[0]= 2500;
		l[1]= 1500;
		l[2]= 1000;
		l[3]= 900;
	var x = a[0]+a[1]+a[2]+a[3];
	var y = l[0]+l[1]+l[2]+l[3];
	var aa = x/4;
	var an= y/4;
	document.getElementById("aa").innerHTML=aa;
	document.getElementById("al").innerHtml=an;
	if (aa > an) {
		document.getElementById("result").innerHTML= aa-an;
		document.getElementById("text").innerHTML="<span>London</span>will be more affordable than <span>Amsterdam</span> for  the new Years celebration Diffrence in price";
	}

	else{
		document.getElementById("result").innerHTML= an-aa;
		document.getElementById("text").innerHTML="<span>Amsterdam</span>will be more affordable than <span>London</span> for  the new Years celebration Diffrence in price";
	}

	