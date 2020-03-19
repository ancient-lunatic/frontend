class userform
{   
    Id : number
    salutation : number
    firstName  : string
    middleName : string
    lastName : string
    addressLine1 : string
    addressLine2 : string
    gender : number
    Locality : string
    city : number
    state : number
    country:number
    data :any
 
    bindData()
    {   
        this.salutation = (((document.getElementById("salutation") as HTMLSelectElement).selectedIndex)+1);
        this.firstName = (document.getElementById("firstname") as HTMLInputElement).value;
        this.middleName = (document.getElementById("middlename") as HTMLInputElement).value;
        this.lastName = (document.getElementById("lastname") as HTMLInputElement).value;
        this.addressLine1 = (document.getElementById("addressLine1") as HTMLInputElement).value;
        this.addressLine2 = (document.getElementById("addressLine2") as HTMLInputElement).value;
        this.gender = (((document.getElementById("gender") as HTMLSelectElement).selectedIndex)+1);
        this.Locality = (document.getElementById("locality") as HTMLInputElement).value;
        this.city = (document.getElementById("city") as HTMLSelectElement).selectedIndex;
        this.state = (document.getElementById("state") as HTMLSelectElement).selectedIndex;
        this.country = (document.getElementById("country") as HTMLSelectElement).selectedIndex;
        this.data = {
            "Id" : this.Id,
            "salutation" : this.salutation,
            "firstName" : this.firstName,
            "middleName" : this.middleName,
            "lastName" :this.lastName,
            "gender" : this.gender,
            "addressLine1" : this.addressLine1,
            "addressLine2" : this.addressLine2,
            "Locality" : this.Locality
        };
    }   
    
    updateData()
    {


        var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    this.Id = data.name;
        this.bindData();
        this.postData();
        // let  url = "file:///C:/Users/ssrawat/Desktop/frontend/script/fd.html";
        // document.location.href = url;
    }

    postData()
    {
        console.log(localStorage["id"]);
        let url="https://localhost:44386/api/blog/user/"+localStorage["id"];
        let res =  fetch( url , {
            method : "POST" , 
           
            headers : {
                "content-Type" : "application/json" , 
            },
            body : JSON.stringify(this.data),
        }).then(response => {
            console.log(response.status);
            if (!response.ok) {
              throw new Error(response.statusText)
            }
          });

    }
}


var edit = new userform();