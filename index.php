<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        <div id-"wrapper">
            <div id="header" class="content-layer" align="center" >
                <div id="logo-share" class="content-inner">
                	<div id="logo"><img src="img/logo.gif" alt="SiS logo" height="100" width="200" /></div>
                    <div id="share"><img src="img/share.gif" alt="SHARE" height="50" width="200" /></div>
                </div>
                <div id="video-main" class="content-inner">
                	<div id="video-inner">
                	  <p>Video player</p>
                	  <p>&nbsp;</p>
                	</div>
                </div>
            </div>
            <div id="trim" class="content-layer" align="center" >
                <div class="content-inner">yellow strip</div>
            </div>
            <div id="app" class="content-layer" align="center" >
                <div class="content-inner">
                	<div class="message">Hello.<br />if you'd like me to talk you through the right nutrition for your sport, just enter your details below.</div>   
                </div>
                <div class="content-inner" style="max-width:740px;">
                	<div class="section group">
                        <div class="col span_1_of_2">
                        	<div id="user_name" class="my-text-field"><input id="name-txt" type="text" name="name" value="What's your name?"></div>
                        </div>
                        <div class="col span_1_of_2">
                        	<div id="user_email" class="my-text-field"><input id="email-txt" type="text" name="email" value="What's your email address?"></div>
                        </div>
                    </div>
                </div>
                <div style="clear:both"></div>
                
                <div class="content-inner" style="max-width:740px;">
                	<div class="section group">
                        <div class="col span_1_of_2">
                        	<div id="user_name" class="my-text-field">male female</div>
                        </div>
                        <div class="col span_1_of_2">
                        	<div id="user_email" class="my-text-field">what's your sport?</div>
                        </div>
                    </div>
                </div>
                <div style="clear:both"></div>
                
                <div class="content-inner" style="max-width:740px;">
                	<div class="section group">
                        <div class="col span_1_of_2">
                        	<div id="user_name" class="my-text-field">Training hours</div>
                        </div>
                        <div class="col span_1_of_2">
                        	<div id="user_email" class="my-text-field">What would you like to know about?</div>
                        </div>
                    </div>
                </div>
                <div style="clear:both"></div>
                
                
                <div class="content-inner" style="max-width:740px;">
                	<div class="section group">
                        <div class="col span_1_of_2">
                        	<div id="user_name" class="my-text-field">opt in</div>
                        </div>
                        <div class="col span_1_of_2">
                        	<div id="results_button" class="my-text-field"><a href="javascript: get_results()"><img src="img/results_btn.gif" height="49" width="222" alt="Get Results" /></a></div>
                        </div>
                    </div>
                </div>
                <div style="clear:both"></div>
                
            </div>
            
            
            
            <div id="footer"class="content-layer" align="center">
                <div class="content-inner">footer</div>
            </div>
        </div>

        <p>
          <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
          <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script>
          <script src="js/plugins.js"></script>
          <script src="js/main.js"></script>
          <script>
		  jQuery(document).ready(function(){
			  jQuery('#name-txt').click(function(){
				  //if user clicks when the message is up
				  if(jQuery(this).val() == 'What\'s your name?')
				  {
					  //clear box
				 	 jQuery(this).val('');
				  }
				  //if user clicks in other box before entering data, add message back
				  if(jQuery('#email-txt').val() == '')
				  {
					  jQuery('#email-txt').val('What\'s your email address?');
				  }
			  });
			  //repeat for other box
			  jQuery('#email-txt').click(function(){
				  //if user clicks when the message is up
				  if(jQuery(this).val() == 'What\'s your email address?')
				  {
					  //clear box
				 	 jQuery(this).val('');
				  }
	
				  if(jQuery('#name-txt').val() == '')
				  {
					  jQuery('#name-txt').val('What\'s your name?');
				  }
			  });	
		  });
		  
          </script>
          
    </body>
</html>
