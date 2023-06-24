let portret = new Array("21х30 см","30х30 см","30х40 см","40х40 см", "40х60 см");
let time= new Array("30х30 см","40х40 см");
let book= new Array("15х21 см");
let len;

function Add_option_to_select()
	{
	   let CountryObj = document.getElementById("idWhat");
	   let ResortObj = document.getElementById("idSize");
	   let selind = CountryObj.options.selectedIndex;

	 switch (selind)
	  {
	  case 0:
	     ResortObj.options.length = 0;
	    break;
	  case 1:
	       ResortObj.options.length = 0;

	    len= portret.length;
	   // alert(len);
	    for (var n = 0; n < len; n++)
	    {
	       ResortObj[n] = new Option(portret[n], portret[n]);
	    }


	    break;
	  case 2:
	       ResortObj.options.length = 0;

	       len= time.length;

	    for (var n = 0; n < len; n++)
	    {
	       ResortObj[n] = new Option(time[n], time[n]);
	    }
	    break;
	    case 3:
	           ResortObj.options.length = 0;

	      len= book.length;

	    for (var n = 0; n < len; n++)
	    {
	       ResortObj[n] = new Option(book[n], book[n]);
	    }

	    break;
	 }



 }