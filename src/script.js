
  $(document).ready(function(){
    $(".toggle").click(function(){
      $(".menu").slideToggle();
    });
  });

  /*var i=0;
	function change(){
		

		if(i==0){
		document.getElementsByClassName('slide')[0].style.opacity = '0';
	    document.getElementsByClassName('slide')[1].style.opacity = '1';
	}

	if(i==1){
		document.getElementsByClassName('slide')[1].style.opacity = '0';
		document.getElementsByClassName('slide')[2].style.opacity = '1';
	}

	if(i==2){
		document.getElementsByClassName('slide')[2].style.opacity = '0';
		document.getElementsByClassName('slide')[0].style.opacity = '1';
	}

	i++;

	if(i==3){
		i=0;
	}


	setTimeout("change()",3000);
}
*/ 