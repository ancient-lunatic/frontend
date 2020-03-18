var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ContentGenerate = /** @class */ (function () {
    function ContentGenerate() {
        this.headerTag = document.getElementById("dynamic");
    }
    ContentGenerate.prototype.sortDatabyName = function () {
        var drop = document.getElementById("drop");
        // if("suraj" < "surai")
        // console.log("yes")
        // if("sures" > "suraj")
        // console.log("np")
        if (drop.selectedIndex == 2) {
            this.data.sort(this.SortByName);
            console.log("1");
        }
        if (drop.selectedIndex == 1) {
            this.data.sort(this.SortByAge);
            console.log("2");
        }
        this.dynamicGenerate();
    };
    ContentGenerate.prototype.SortByName = function (a, b) {
        if (a.name != null && b.name != null && a.name != undefined && b.name != undefined) {
            var f1 = a.name.toString().toLowerCase();
            var f2 = b.name.toString().toLowerCase();
            return ((f1 < f2) ? -1 : ((f1 > f2) ? 1 : 0));
        }
    };
    ContentGenerate.prototype.SortByAge = function (a, b) {
        if (a.age.year != b.age.year) {
            if (a.age.year > b.age.year)
                return 1;
            else if (a.age.year < b.age.year)
                return -1;
        }
        else
            return 0;
        // return ((a.age.months < b.age.months) ? -1 : ((a.age.months>b.age.months) ? 1 : 0));
    };
    ContentGenerate.prototype.searchUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var input, keys, uri, data, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        input = document.getElementById("search");
                        keys = input.value;
                        uri = "https://localhost:44386/api/blog/user/" + keys + "";
                        return [4 /*yield*/, this.getApiCall(uri)];
                    case 1:
                        data = _b.sent();
                        _a = this;
                        return [4 /*yield*/, data];
                    case 2:
                        _a.data = _b.sent();
                        console.log(data);
                        this.dynamicGenerate();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ContentGenerate.prototype.getAllUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.url = "https://localhost:44386/api/blog/user";
                        return [4 /*yield*/, this.getApiCall(this.url)];
                    case 1:
                        data = _b.sent();
                        _a = this;
                        return [4 /*yield*/, data];
                    case 2:
                        _a.data = _b.sent();
                        console.log(data);
                        this.size = data.length;
                        this.dynamicGenerate();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ContentGenerate.prototype.getApiCall = function (URL) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(URL)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, (response.json())];
                    case 2:
                        data = _a.sent();
                        console.log(data);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    ContentGenerate.prototype.DeleteUserById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var x, uri, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        x = document.getElementById(id).getAttribute("dataval");
                        uri = "https://localhost:44386/api/blog/userdel/" + x + "";
                        return [4 /*yield*/, fetch(uri, {
                                method: 'DELETE'
                            })
                            // let data =await this.getApiCall(uri);
                            //this.data = await data;
                        ];
                    case 1:
                        response = _a.sent();
                        // let data =await this.getApiCall(uri);
                        //this.data = await data;
                        console.log(this.data);
                        this.getAllUser();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContentGenerate.prototype.navigate = function (id) {
        var x = document.getElementById(id).getAttribute("dataval");
        localStorage["id"] = x;
        //var b = document.getElementById('name').value,
        //   let  url = "file:///C:/Users/ssrawat/Desktop/frontend/script/userform.html?name=" + encodeURIComponent(x);
        var url = "file:///C:/Users/ssrawat/Desktop/frontend/script/userform.html";
        document.location.href = url;
    };
    ContentGenerate.prototype.dynamicGenerate = function () {
        var loop = 0;
        this.headerTag.innerHTML = "";
        for (loop = 0; loop < this.data.length; loop++) {
            this.headerTag.innerHTML += "<div class=\"container\" style=\"margin-top:10px;width:30%; float: left;\">\n            <div class=\"row\">\n            <div class=\"col-sm-4\">\n   \n                <div class=\"thumbnail\" style=\" background-color :cadetblue;padding :20Px;line-height : 26pt; border-radius: 25px;\"> \n                    <button id =\"user" + loop + "\" dataval=\"" + this.data[loop]["userId"] + "\"  style=\"float:right; font-size:15px;\" onClick =\"new ContentGenerate().DeleteUserById(this.id)\">DELETE</button>\n                    <button class=\"btn btn-success\" id =\"user" + loop + "\" dataval=\"" + this.data[loop]["userId"] + "\"style=\"float:left; font-size:15px;\" onClick = \"sam.navigate(this.id)\">EDIT</button>\n                    <br>\n                       \n                    <p ><strong id=\"name" + loop + "\">User Name := " + this.data[loop]["name"] + "</strong></p>\n                    <p ><strong id=\"nationality" + loop + "\">Nationality := " + this.data[loop]["nationality"] + "</strong></p>\n                    <p ><strong id=\"isIndian" + loop + "\"> Is Indian := " + (this.data[loop]["isIndian"] == true ? "yes" : "no") + "</strong></p>\n                     <p ><strong id=\"address" + loop + "\">Address :=   " + this.data[loop]["address"] + "</strong></p>\n                    <p ><strong id=\"contactDetail" + loop + "\">Phone Number := " + this.data[loop]["contactDetail"]["primary"] + "</strong></p>\n                    <p ><strong id=\"age" + loop + "\" class=\"address\">age := " + (this.data[loop]["age"]["year"] + " years") + "</strong></p>\n                    <p ><strong id=\"CompanyExp" + loop + "\" class=\"address\">age := " + this.data[loop]["currentCompanyExp"] + "</strong></p>\n                   \n               \n                </div>\n            </div>\n        </div>\n    </div>";
        }
        // for (loop = 0; loop < this.data.length; loop++)
        // {
        //     document.getElementById("name"+loop).innerText += " " + this.data[loop]["name"];
        //     document.getElementById("nationality"+loop).innerText += " " + this.data[loop]["nationality"];
        //     document.getElementById("isIndian"+loop).innerText += " " + (this.data[loop]["isIndian"]==true ? "yes" : "no");
        //     document.getElementById("address"+loop).innerText += " " + this.data[loop]["address"];
        //     document.getElementById("contactDetail"+loop).innerText += " " + this.data[loop]["contactDetail"]["primary"];
        //     document.getElementById("age"+loop).innerText += " " + this.data[loop]["age"]["year"] + " years";
        //     document.getElementById("CompanyExp"+loop).innerText += " " + this.data[loop]["currentCompanyExp"];
        // }
    };
    ContentGenerate.prototype.bindData = function () {
        this.salutation = (document.getElementById("salutation").selectedIndex) + 1;
        this.firstName = document.getElementById("firstname").value;
        this.middleName = document.getElementById("middlename").value;
        this.lastName = document.getElementById("lastname").value;
        this.addressLine1 = document.getElementById("addressLine1").value;
        this.addressLine2 = document.getElementById("addressLine2").value;
        this.Locality = document.getElementById("locality").value;
        this.city = (document.getElementById("city").selectedIndex) + 1;
        this.state = (document.getElementById("state").selectedIndex) + 1;
        this.country = (document.getElementById("country").selectedIndex) + 1;
        this.bodyData = {
            salutation: this.salutation,
            firstName: this.firstName,
            middleName: this.middleName,
            lastName: this.lastName,
            addressLine1: this.addressLine1,
            addressLine2: this.addressLine2,
            Locality: this.Locality,
            city: this.city,
            state: this.state,
            country: this.country
        };
    };
    ContentGenerate.prototype.postData = function () {
        this.bindData();
        var url = "https://localhost:44386/api/blog/user/" + 5;
        return fetch(url, {
            method: "POST",
            mode: 'cors',
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "content-Type": "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(this.bodyData)
        })
            .then(function (response) { return response.json(); });
    };
    ContentGenerate.prototype.findData = function (id) {
        var loop = 0;
        for (loop = 0; loop < this.data.length; loop++) {
            if (this.data[loop]["userId"] === id) {
                break;
            }
        }
        return loop;
    };
    ContentGenerate.prototype.onclickEdit = function (id) {
        var index = this.findData(id);
        var val = document.getElementById("");
        val.innerHTML = "";
        val.innerHTML = "<div class=\"form-group\">\n            \n        <label for=\"salutation\">Choose your salutation</label>\n        <select id=\"salutation\" x>\n          <option value=\"Mr.\">Mr.</option>\n          <option value=\"Mrs.\">Mrs.</option>\n          <option value=\"Miss\">Miss</option>\n          <option value=\"Ms.\">Ms.</option>\n          <option value=\"Dr.\">Dr.</option>\n        </select>\n      </div>\n      \n        <div class=\"form-group\">\n          <label for=\"firstname\">First Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"firstname\" name=\"firstname\"  value=\"" + this.data[index]["FirstName"] + "\" placeholder=\"Enter First Name\">\n         \n        </div>\n        <div class=\"form-group\">\n            <label for=\"middlename\">Middle Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"middlename\" name=\"middlename\"  value=\"" + this.data[index]["middleName"] + "\" placeholder=\"Enter Middle Name\">\n           \n          </div>\n          <div class=\"form-group\">\n            <label for=\"lastname\" >Last Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"lastname\" name=\"lastname\"  value=\"" + this.data[index]["lastName"] + "\" placeholder=\"Enter last Name\">\n           \n          </div>\n          \n        \n            <div class=\"form-group\">\n        \n              <label for=\"salutation\">Choose your Gender</label>\n  \n              <select id=\"salutation\">\n                <option value=\"male\">Male</option>\n                <option value=\"female\">Female</option>\n                <option value=\"other\">Others</option>\n               \n              </select>\n  \n            \n\n          </div>\n          <div class=\"form-group\">\n            <label for=\"addressLine1\">AddressLine1</label>\n            <input type=\"text\" class=\"form-control\" id=\"addressLine1\" name=\"addressLine1\"  value=\"" + this.data[index]["addressLine1"] + "\" placeholder=\"Enter addressLine1\">\n           \n          </div>\n          <div class=\"form-group\">\n            <label for=\"addressLine2\">AddressLine2</label>\n            <input type=\"text\" class=\"form-control\" id=\"addressLine2\" name=\"addressLine2\"  value=\"" + this.data[index]["addressLine2"] + "\" placeholder=\"Enter addressLine2\">\n           \n          </div>\n          <div class=\"form-group\">\n            <label for=\"Locality\">Locality</label>\n            <input type=\"text\" class=\"form-control\" id=\"locality\" name=\"locality\"  value=\"" + this.data[index]["locality"] + "\" placeholder=\"Enter Locality\">\n           \n          </div>\n          <div class=\"form-group\">\n        \n            <label for=\"city\">City</label>\n\n            <select id=\"city\">\n              <option value=\"Waras\">Waras</option>\n              <option value=\"Orange\">Orange</option>\n              <option value=\"NewCastel\">NewCastel</option>\n             \n            </select>\n\n          \n\n        </div>\n        <div class=\"form-group\">\n        \n          <label for=\"state\">State</label>\n\n          <select id=\"state\">\n            <option value=\"Bamyan\">Bamyan</option>\n            <option value=\"B\u00E9ja\u00EFa\">Bejala</option>\n            \n           \n          </select>\n\n        \n      </div>\n      <div class=\"form-group\">\n        \n        <label for=\"country\">Country</label>\n        <select id=\"country\">\n          <option value=\"Afganistan\">Afghanistan</option>\n          <option value=\"Algeria\">Algeria</option>\n      \n        </select>\n      \n    </div>\n          <div class=\"form-group\">\n            <label for=\"p_contact_number\">Primary Contact Number</label>\n            <input type=\"text\" class=\"form-control\" id=\"p_contact_number\" name=\"p_contact_number\"  value=\"\" placeholder=\"primary contact number\">\n           \n          </div>\n          \n          <div class=\"form-group\">\n            <label for=\"s_contact_number\">Secondary Contact Number</label>\n            <input type=\"text\" class=\"form-control\" id=\"s_contact_number\" name=\"s_contact_number\"  value=\"\" placeholder=\"secondary contact number\">\n           \n          </div>\n     \n          \n        <button type=\"submit \" onclick=\"check()\" class=\"btn btn-primary\">Submit</button>";
    };
    return ContentGenerate;
}());
var sam = new ContentGenerate();
// let gen = new ContentGenerate()
// gen.hitApi();
