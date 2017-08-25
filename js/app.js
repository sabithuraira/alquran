(function() {
	
	function periksaHalal(){
      	document.querySelector("#err-message").style.display = "none";
		var name=document.getElementById("text-name").value;
		
	
		if(name.length==0 || name==null){
	      	document.querySelector("#err-message").style.display = "block";
	      	$("#err-message").html("Complete form first!");
		}
		else{

	        document.querySelector("#img-load").style.display = "inline";
	        
			$.getJSON("https://sites.google.com/macros/exec?service=AKfycbx_-gZbLP7Z2gGxehXhWMWDAAQsTp3e3bmpTBiaLuzSDQSbIFWD&menu=nama_produk&query="+name, function(result){
				if(result.status=='success'){
					var content=$("#content-table"), str_table="";
					
					for(var i=0, ilen = result.data.length;i < ilen;++i){
						var cur_data=result.data[i];
						str_table+='<tr><td class="produk"><span class="name">'+cur_data.title+'</span>' +
							'<span class="produsen">'+cur_data.produsen+'</span></td><td class="status">' +
							'<span class="sertifikat">Nomor: '+cur_data.nomor_sertifikat+'</span>'+
							'<span class="berlaku">'+cur_data.berlaku_hingga+'</span></td></tr>';
					}
					
					content.html('');
					content.html(str_table);
					
//					$("#message-header").html(result.data.zodiak);
//	        	  	$("#message-content").html(result.data.lahir+". Usia: "+result.data.usia+". Ulang tahun: "+result.data.ultah+" lagi");
//	        	  	
//	        	  	var img_data=result.data.zodiak.toLowerCase()+".jpg";
//
	    	        document.querySelector("#img-load").style.display = "none";
//		        	document.getElementById("message-img").src = "./image/"+img_data;
//	  	        	document.querySelector("#msg-box").style.display = "block";
				}
				else{
			      	document.querySelector("#err-message").style.display = "block";
			      	$("#err-message").html("Error fetching data!");
				}
				
			});
			
		}
	}

    function setDefaultEvents() {
        document.querySelector("#btn-show").addEventListener("click", periksaHalal);

        document.addEventListener("tizenhwkey", function(e) {
            if (e.keyName === "back") {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (error) {
                    console.error("getCurrentApplication(): " + error.message);
                }
            }
        });
    }

    function init() {
        setDefaultEvents();
    }

    window.onload = init;
}());
