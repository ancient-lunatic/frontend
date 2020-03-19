class userform
{   
    salutation : number
    firstName  : string
    middleName : string
    lastName : string
    gender : number
    nationality : number
    dateOfBirth : Date
    addressLine1 : string
    addressLine2 : string
    Locality : string
    city : number
    contact : string
}


class cerate 
{
    obj:userform


    create()
    {
        this.obj = new  userform();
    }
 
    bindData()
    {   
        this.obj.salutation = (((document.getElementById("salutation") as HTMLSelectElement).selectedIndex)+1);
        this.obj.firstName = (document.getElementById("firstname") as HTMLInputElement).value;
        this.obj.middleName = (document.getElementById("middlename") as HTMLInputElement).value;
        this.obj.lastName = (document.getElementById("lastname") as HTMLInputElement).value;
        this.obj.gender = (((document.getElementById("gender") as HTMLSelectElement).selectedIndex)+1);
        this.obj.nationality = ((document.getElementById("gender") as HTMLSelectElement).selectedIndex);
        this.obj.dateOfBirth = (document.getElementById("contact") as HTMLDataElement).value;
        this.obj.addressLine1 = (document.getElementById("addressLine1") as HTMLInputElement).value;
        this.obj.addressLine2 = (document.getElementById("addressLine2") as HTMLInputElement).value;
        this.obj.Locality = (document.getElementById("locality") as HTMLInputElement).value;
        this.obj.city = (document.getElementById("city") as HTMLSelectElement).selectedIndex;
        this.obj.contact = (document.getElementById("contact") as HTMLInputElement).value;

    }   
    
    updateData()
    {
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
            body : JSON.stringify(this.obj.data),
        }).then(response => {
            console.log(response.status);
            if (!response.ok) {
              throw new Error(response.statusText)
            }
          });
        // console.log((await res.json));
        // return res.json
        
    }
}


var edit = new userform();