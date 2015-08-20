$(document).ready(function () {
		$("#toggleDemo").hide();
             $("#click").click(function () {
                 $("#toggleDemo").show('toggle');
             });	
		$("#hide").click(function () {
						 $("#toggleDemo").hide('toggle');
					 });	
		$(".batchIRSView").change(function(){
			 selection=$(this).val(); 
			if(selection=='generateirsile'){ 
			 $("#generateIRS").modal('show').css('top', '250px');
			 }
		 });
		 $(".batchIRSView").change(function(){
			 selection=$(this).val(); 
			if(selection=='updateIRSfilestatus'){ 
			 $("#IRSFileUpdate").modal('show').css('top', '250px');
			 }
		 });
		 $(".batchIRSView").change(function(){
			 selection=$(this).val(); 
			if(selection=='viewbatchdetails'){ 
			 $("#vieweBatchLog").modal('show').css('top', '150px');
			 }
		 });
		 
		  $(".batchIRSView").change(function(){
			 selection=$(this).val(); 
			if(selection=='cancelBatch'){ 
			 $("#closeBatch").modal('show').css('top', '150px');
			 }
		 });
		 $(".batchIRSView").change(function(){
			 selection=$(this).val(); 
			if(selection=='viewbatchlog'){ 
			 $("#vieweBatchLog").modal('show').css('top', '150px');
			 }
		 });
		 
	});