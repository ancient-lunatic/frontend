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
        drop = document.getElementById("drop");
        if (drop["in"])
            this.data.sort(this.SortByName);
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
        if (a.age.years > b.age.years)
            return -1;
        else if (a.age.years > b.age.years)
            return 1;
        else if (a.age.months < b.age.months)
            return -1;
        else if (a.age.months > b.age.months)
            return 1;
        else if (a.age.days < b.age.days)
            return -1;
        else if (a.age.days > b.age.days)
            return 1;
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
    ContentGenerate.prototype.dynamicGenerate = function () {
        var loop = 0;
        this.headerTag.innerHTML = "";
        for (loop = 0; loop < this.data.length; loop++) {
            this.headerTag.innerHTML += "<div class=\"container\" style=\"margin-top:10px;width:30%; float: left;\">\n            <div class=\"row\">\n\n                <div class=\"col-sm-4\">\n                    <div class=\"thumbnail\">\n\n                        <p ><strong id=\"name" + loop + "\">User Name :=</strong></p>\n                        <p ><strong id=\"nationality" + loop + "\">Nationality := </strong></p>\n                        <p ><strong id=\"isIndian" + loop + "\"> Is Indian := </strong></p>\n\n                        <p ><strong id=\"address" + loop + "\">Address :=</strong></p>\n                        <p ><strong id=\"contactDetail" + loop + "\">Phone Number := </strong></p>\n                        <p ><strong id=\"age" + loop + "\" class=\"address\">age := </strong></p>\n                        <p ><strong id=\"CompanyExp" + loop + "\" class=\"address\">age := </strong></p>\n\n                    </div>\n                </div>\n\n            </div>\n        </div>";
        }
        for (loop = 0; loop < this.data.length; loop++) {
            document.getElementById("name" + loop).innerText = " " + this.data[loop]["name"];
            document.getElementById("nationality" + loop).innerText = " " + this.data[loop]["nationality"];
            document.getElementById("isIndian" + loop).innerText = " " + (this.data[loop]["isIndian"] == true ? "yes" : "no");
            document.getElementById("address" + loop).innerText = " " + this.data[loop]["address"];
            document.getElementById("contactDetail" + loop).innerText = " " + this.data[loop]["contactDetail"]["primary"];
            document.getElementById("age" + loop).innerText = " " + this.data[loop]["age"]["year"] + " years";
            document.getElementById("CompanyExp" + loop).innerText = " " + this.data[loop]["currentCompanyExp"];
        }
    };
    return ContentGenerate;
}());
var sam = new ContentGenerate();
// let gen = new ContentGenerate()
// gen.hitApi();
