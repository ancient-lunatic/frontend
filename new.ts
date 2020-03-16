
class ContentGenerate
{   
    data : any;
    size : number;
    url :string;
    headerTag = document.getElementById("dynamic");


    sortDatabyName()
    {
        drop = document.getElementById("drop");
        if(drop.in)
        this.data.sort(this.SortByName)
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
        if(a.age.years > b.age.years)return -1;
        else if(a.age.years > b.age.years) return 1;
       else if(a.age.months < b.age.months)return -1;
       else if(a.age.months > b.age.months) return 1;
       else if(a.age.days < b.age.days) return -1;
       else if(a.age.days > b.age.days) return 1;
       else return 0;
        
      // return ((a.age.months < b.age.months) ? -1 : ((a.age.months>b.age.months) ? 1 : 0));
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

    dynamicGenerate()
    {
    let loop = 0;
    this.headerTag.innerHTML = "";
        for (loop = 0; loop < this.data.length; loop++)
        {
            this.headerTag.innerHTML  += `<div class="container" style="margin-top:10px;width:30%; float: left;">
            <div class="row">

                <div class="col-sm-4">
                    <div class="thumbnail">

                        <p ><strong id="name${loop}">User Name :=</strong></p>
                        <p ><strong id="nationality${loop}">Nationality := </strong></p>
                        <p ><strong id="isIndian${loop}"> Is Indian := </strong></p>

                        <p ><strong id="address${loop}">Address :=</strong></p>
                        <p ><strong id="contactDetail${loop}">Phone Number := </strong></p>
                        <p ><strong id="age${loop}" class="address">age := </strong></p>
                        <p ><strong id="CompanyExp${loop}" class="address">age := </strong></p>

                    </div>
                </div>

            </div>
        </div>`
        }

        for (loop = 0; loop < this.data.length; loop++)
        {
            document.getElementById("name"+loop).innerText = " " + this.data[loop]["name"];
            document.getElementById("nationality"+loop).innerText = " " + this.data[loop]["nationality"];
            document.getElementById("isIndian"+loop).innerText = " " + (this.data[loop]["isIndian"]==true ? "yes" : "no");
            document.getElementById("address"+loop).innerText = " " + this.data[loop]["address"];
            document.getElementById("contactDetail"+loop).innerText = " " + this.data[loop]["contactDetail"]["primary"];
            document.getElementById("age"+loop).innerText = " " + this.data[loop]["age"]["year"] + " years";
            document.getElementById("CompanyExp"+loop).innerText = " " + this.data[loop]["currentCompanyExp"];
        }
 
        
    }

}
var sam = new ContentGenerate()

// let gen = new ContentGenerate()
// gen.hitApi();