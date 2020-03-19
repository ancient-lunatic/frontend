class ContentGenerate
{   
    salutation : number
    firstName  : string
    middleName : string
    lastName : string
    addressLine1 : string
    addressLine2 : string
    Locality : string
    city : number
    state : number
    country:number
    bodyData :any






    data : any;
    size : number;
    url :string;
    headerTag = (document.getElementById("dynamic") as HTMLInputElement);



create()
{
        
           var  url = 'C:/Users/ssrawat/Desktop/frontend/script/create.html'
    
        document.location.href = url;
    
}


edit(id)
{
    var b = document.getElementById(id).getAttribute("dataval");
    var  url = 'C:/Users/ssrawat/Desktop/frontend/script/userform.html?name='+ + encodeURIComponent(b);
    document.location.href = url;

    
}
    sortDatabyName()
    {
        let drop = (document.getElementById("drop") as HTMLSelectElement);


        if(drop.selectedIndex == 2)
        {
        this.data.sort(this.SortByName)
        console.log("1");
    }
        if(drop.selectedIndex == 1)
        {
            this.data.sort(this.SortByAge)
            console.log("2");
        }
        
        
        this.dynamicGenerate();
    }


    SortByName(a,b)
    {
      if(a.name!= null && b.name!= null  && a.name!= undefined && b.name!= undefined)
      {   
         var f1= a.name.toString().toLowerCase();
         var f2= b.name.toString().toLowerCase();
         return ((f1<f2) ? -1 : ((f1>f2) ? 1 : 0)); 
      }
    }
    SortByAge(a,b)
    {
        if(a.age.year!=b.age.year)
        {
            if(a.age.year>b.age.year) return 1;
            else if(a.age.year<b.age.year) return -1;
        }
        else 
        return 0;
    
   }

    async searchUsers()
    {
        let input = document.getElementById("search");
     
        let keys = input.value;
        let uri = "https://localhost:44386/api/blog/user/"+keys+"";
        let data =await this.getApiCall(uri);
        this.data = await data;
        console.log(data);
        this.dynamicGenerate();
        return data;

    }  

  
    async getAllUser()
    {
        this.url = "https://localhost:44386/api/blog/user";
        let data =await this.getApiCall(this.url);
        this.data = await data;
        console.log(data);
        this.size= data.length ;
        this.dynamicGenerate();
        return data;

    }  
    
    async getApiCall(URL:any) {

        
        let response = await fetch(URL);
        let data = await (response.json());
        console.log(data);
        return data;
    }

    async DeleteUserById(id)
    {
       let x =  document.getElementById(id).getAttribute("dataval");
        let uri = "https://localhost:44386/api/blog/userdel/"+x+"";
        let response = await fetch(uri,
            {
            method: 'DELETE',
            })
        console.log(this.data);
        this.getAllUser();
    }



    //  navigate(id) {
    //     let x =  document.getElementById(id).getAttribute("dataval");
    //     localStorage["id"]= x;
    //       let  url = "file:///C:/Users/ssrawat/Desktop/frontend/script/userform.html";
    //     document.location.href = url;
    // }

    dynamicGenerate()
    {
    let loop = 0;
    this.headerTag.innerHTML = "";
        for (loop = 0; loop < this.data.length; loop++)
        {
            this.headerTag.innerHTML  += `<div class="container" style="margin-top:10px;width:30%; float: left;">
            <div class="row">
            <div class="col-sm-4">
   
                <div class="thumbnail" style=" background-color :cadetblue;padding :20Px;line-height : 26pt; border-radius: 25px;"> 
                    <button id ="user${loop}" dataval="${this.data[loop]["userId"]}"  style="float:right; font-size:15px;" onClick ="new ContentGenerate().DeleteUserById(this.id)">DELETE</button>
                    <button class="btn btn-success" id ="user${loop}" dataval="${this.data[loop]["userId"]}"style="float:left; font-size:15px;" onClick = "sam.edit(this.id)">EDIT</button>
                    <br>
                       
                    <p ><strong id="name${loop}">User Name := ${this.data[loop]["name"]}</strong></p>
                    <p ><strong id="nationality${loop}">Nationality := ${this.data[loop]["nationality"]}</strong></p>
                    <p ><strong id="isIndian${loop}"> Is Indian := ${(this.data[loop]["isIndian"]==true ? "yes" : "no")}</strong></p>
                     <p ><strong id="address${loop}">Address :=   ${this.data[loop]["address"]}</strong></p>
                    <p ><strong id="contactDetail${loop}">Phone Number := ${this.data[loop]["contactDetail"]["primary"]}</strong></p>
                    <p ><strong id="age${loop}" class="address">age := ${this.data[loop]["age"]["year"] + " years"}</strong></p>
                    <p ><strong id="CompanyExp${loop}" class="address">age := ${this.data[loop]["currentCompanyExp"]}</strong></p>
                   
               
                </div>
            </div>
        </div>
    </div>`
        }
 
        
    }    

}
var sam = new ContentGenerate()
