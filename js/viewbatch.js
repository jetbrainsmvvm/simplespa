$(document).ready(function () {
		$("#toggleDemo").hide();
             $("#click").click(function () {
                 $("#toggleDemo").show('toggle');
             });	
		$("#hide").click(function () {
						 $("#toggleDemo").hide('toggle');
					 });	
		$(".BatchView").change(function(){
			 selection=$(this).val(); 
			if(selection=='Print1095BBatch'){ 
			 $("#PrintBatch").modal('show').css('top', '250px');
			 }
		 });
		 
		 $(".logView").change(function(){
			 selection=$(this).val(); 
			if(selection=='ViewLog'){ 
			 $("#Log").modal('show').css('top', '150px');
			 }
		 });
		 $(".BatchView").change(function(){
			 selection=$(this).val(); 
			if(selection=='CancelBatch'){ 
			 $("#closeBatch").modal('show').css('top', '150px');
			 }
		 });
		 
		 $(".BatchView").change(function(){
			 selection=$(this).val(); 
			if(selection=='ViewBatchLog'){ 
			 $("#vieweBatchLog").modal('show').css('top', '150px');
			 }
		 });
	});