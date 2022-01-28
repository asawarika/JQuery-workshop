$('document').ready(()=>{

    $('input[type="button"]').click(()=>{

        var username=$('input[type="text"]').val();
        var password=$('input[type="password"]').val();

        if(username == '' && password == ' '){
            alert("usernme and pwd not entered");
        }
        else{ 


    $.ajax({
        url: 'http://localhost:3000/users',
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        data:{
            "username":username,
            "password":password,
        },
        success:(x)
       
        
    
            })
        }
    })


     
})
   

/*$("#button").click(function(){
      
        var username = $("#txt_uname").val().trim();
        var password = $("#txt_uname").val().trim();

        if(username != " " && password != ""){
            $.ajax({
              url:'',
              method: "post",
              data:{
                  username:username,
                  password:password},
              

            },
               success:(x) =>{
                   if(x){
                       alert(x.username+ " login successfull");
                       console.log(x);
                   }
                   else{
                       alert("invalid username");
                   }
               }
            )
        }

    })
    */