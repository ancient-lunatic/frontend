var userform = /** @class */ (function () {
    function userform() {
    }
    userform.prototype.bindData = function () {
        this.salutation = ((document.getElementById("salutation").selectedIndex) + 1);
        this.firstName = document.getElementById("firstname").value;
        this.middleName = document.getElementById("middlename").value;
        this.lastName = document.getElementById("lastname").value;
        this.addressLine1 = document.getElementById("addressLine1").value;
        this.addressLine2 = document.getElementById("addressLine2").value;
        this.gender = ((document.getElementById("gender").selectedIndex) + 1);
        this.Locality = document.getElementById("locality").value;
        this.city = document.getElementById("city").selectedIndex;
        this.state = document.getElementById("state").selectedIndex;
        this.country = document.getElementById("country").selectedIndex;
        this.data = {
            "Id": parseInt(localStorage["id"]),
            "salutation": this.salutation,
            "firstName": this.firstName,
            "middleName": this.middleName,
            "lastName": this.lastName,
            "gender": this.gender,
            "addressLine1": this.addressLine1,
            "addressLine2": this.addressLine2,
            "Locality": this.Locality
        };
    };
    userform.prototype.updateData = function () {
        this.bindData();
        this.postData();
        // let  url = "file:///C:/Users/ssrawat/Desktop/frontend/script/fd.html";
        // document.location.href = url;
    };
    userform.prototype.postData = function () {
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
    return userform;
}());
var edit = new userform();
