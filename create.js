var userform = /** @class */ (function () {
    function userform() {
    }
    return userform;
}());
var cerate = /** @class */ (function () {
    function cerate() {
    }
    cerate.prototype.create = function () {
        this.obj = new userform();
    };
    cerate.prototype.bindData = function () {
        this.obj.salutation = ((document.getElementById("salutation").selectedIndex) + 1);
        this.obj.firstName = document.getElementById("firstname").value;
        this.obj.middleName = document.getElementById("middlename").value;
        this.obj.lastName = document.getElementById("lastname").value;
        this.obj.addressLine1 = document.getElementById("addressLine1").value;
        this.obj.addressLine2 = document.getElementById("addressLine2").value;
        this.obj.gender = ((document.getElementById("gender").selectedIndex) + 1);
        this.obj.Locality = document.getElementById("locality").value;
        this.obj.city = document.getElementById("city").selectedIndex;
        this.obj.state = document.getElementById("state").selectedIndex;
        this.obj.country = document.getElementById("country").selectedIndex;
        this.obj.contact = document.getElementById("contact").value;
        this.obj.dateOfBirth = document.getElementById("contact").value;
        // this.data = {
        //     "Id" : parseInt(localStorage["id"]),
        //     "salutation" : this.salutation,
        //     "firstName" : this.firstName,
        //     "middleName" : this.middleName,
        //     "lastName" :this.lastName,
        //     "gender" : this.gender,
        //     "addressLine1" : this.addressLine1,
        //     "addressLine2" : this.addressLine2,
        //     "Locality" : this.Locality
        // };
    };
    cerate.prototype.updateData = function () {
        this.bindData();
        this.postData();
        // let  url = "file:///C:/Users/ssrawat/Desktop/frontend/script/fd.html";
        // document.location.href = url;
    };
    cerate.prototype.postData = function () {
        console.log(localStorage["id"]);
        var url = "https://localhost:44386/api/blog/user/" + localStorage["id"];
        var res = fetch(url, {
            method: "POST",
            // mode : 'cors' ,
            // cache : "no-cache" , 
            // credentials : "same-origin",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(this.data)
        }).then(function (response) {
            console.log(response.status);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
        });
        // console.log((await res.json));
        // return res.json
    };
    return cerate;
}());
var edit = new userform();
