//var apiUrl='http://web-sokar-api.herokuapp.com';
// var apiUrl='http://localhost:3005/1.0/';

//var webUrl='http://web-sokar-api.herokuapp.com';
// var webUrl='http://localhost:1337/';

function deleteTableRow(url,id,redierctPage)
{
    var   ApiUrlDelete= apiUrl+url+'?token='+getUserTokenCookie().user_token;

    fetch(ApiUrlDelete,
        {
            body: JSON.stringify({
                Id: id,
            }),
            method: 'POST',
            headers: {"Content-Type": "application/json"}
        }).then((Response)=>{
        Response.json().then((data)=>{
            if(data.error)
            {
                console.log(data.error)
            }
            else
            {
                window.location.href = webUrl+redierctPage;

            }

        })

    })
}

function addTableRow(apiName,body,redierctPage)
{
    var requestUrl=apiUrl+apiName+'?token='+getUserTokenCookie().user_token;
    debugger
    console.log("body"+body)
    fetch(requestUrl,
    {
    method: 'POST',
    body: body,
    headers: {"Content-Type": "application/json",   enctype: 'multipart/form-data'},

    }).then((Response)=> {
        Response.json().then((data) => {
            console.log("Country Data"+data);
            if (data.error) {
                document.getElementById("AllErrors").innerHTML='';
                document.getElementById("AllErrors").style.display = "block";
                document.getElementById("AllErrors").innerHTML+="<li>"+ data.error.message + "</li>" ;
            } else {
                window.location.href = webUrl + redierctPage;

            }

        })
    })};

function editTableRow(apiName,body,id,redierctPage)
{
    console.log("body")
    console.log(body)
    var  requestUrl=apiUrl+apiName+'?token='+getUserTokenCookie().user_token;
    fetch(requestUrl,
    {
    method: 'POST',
    body: body,
    headers: {"Content-Type": "application/json"}
    }).then((Response)=>{
            Response.json().then((data)=>{
                debugger
                if(data.error)
                {
                document.getElementById("AllErrors").innerHTML='';
                document.getElementById("AllErrors").style.display = "block";
                document.getElementById("AllErrors").innerHTML+="<li>"+ data.error.message + "</li>" ;

                }
                else
                {
                    window.location.href = webUrl+redierctPage;

                }

            })

    })
}

function sendData(obj)
{
    var my_id_value = $(obj).data('id');
    $(".modal-body #hiddenId").val(my_id_value);
    $("#myModal").modal("show");
}

async function getData(Apiname) {
       try
       {
         const resp = await fetch(apiUrl+Apiname+'?token='+getUserTokenCookie().user_token)
         const data =  resp.json()
         return data
       } 
       catch (err) 
       {
            console.log(err)
       }
}

function getUserTokenCookie(){
    var list = {},
        rc = document.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });
    return  data={user_token:list.userToken,url:apiUrl};
}

function userSessionInfo(){
    var list = {},
        rc = document.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });
    return   list.userinfo;
}


