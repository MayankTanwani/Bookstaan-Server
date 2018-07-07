(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Models/Listing.ts":
/*!***********************************!*\
  !*** ./src/app/Models/Listing.ts ***!
  \***********************************/
/*! exports provided: Listing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Listing", function() { return Listing; });
var Listing = /** @class */ (function () {
    function Listing() {
        this.bookCondition = "";
        this.bookName = "";
        this.authorName = "";
        this.price = 0;
    }
    return Listing;
}());



/***/ }),

/***/ "./src/app/Models/MessageSend.ts":
/*!***************************************!*\
  !*** ./src/app/Models/MessageSend.ts ***!
  \***************************************/
/*! exports provided: MessageSend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageSend", function() { return MessageSend; });
var MessageSend = /** @class */ (function () {
    function MessageSend() {
    }
    return MessageSend;
}());



/***/ }),

/***/ "./src/app/Models/User.ts":
/*!********************************!*\
  !*** ./src/app/Models/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.name = "";
        this.email = "";
        this.college = "";
        this.address = "";
        this.phone = "";
        this.password = "";
    }
    return User;
}());



/***/ }),

/***/ "./src/app/Models/WishListSend.ts":
/*!****************************************!*\
  !*** ./src/app/Models/WishListSend.ts ***!
  \****************************************/
/*! exports provided: WishListSend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListSend", function() { return WishListSend; });
var WishListSend = /** @class */ (function () {
    function WishListSend() {
    }
    return WishListSend;
}());



/***/ }),

/***/ "./src/app/add-listing/add-listing.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-listing/add-listing.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='wrap'>\n  <img (click)=\"uploadEvent()\" style=\"cursor: pointer;background-color: darkgrey\" alt=\"Change DP\"\n       [src]=\"newListing.image\" height=\"300px\" width=\"300px\">\n  <input type=\"file\" accept=\".jpg,.png,.jpeg\" hidden #fileUploadButton id=\"fileUploadBut\" (change)=\"selectFile($event)\">\n  <form>\n    <input type='text' name='name' placeholder='Book Name' [(ngModel)]=\"newListing.bookName\">\n\n    <input type='text' name='author' placeholder='Author Name' [(ngModel)]=\"newListing.authorName\">\n    <!--<input type=\"text\" name=\"edition\" placeholder=\"Edition/Year\">-->\n    <input type='number' name='price' placeholder='Price' [(ngModel)]=\"newListing.price\">\n    <label>\n      <select [(ngModel)]=\"newListing.bookCondition\" name=\"condition\" required >\n        <option selected hidden required>Condition</option>\n        <option class=\"reduce-font\">New</option>\n        <option  class=\"reduce-font\">Almost New</option>\n        <option  class=\"reduce-font\">Slight Damage</option>\n        <option  class=\"reduce-font\">Worn</option>\n      </select>\n    </label>\n  </form>\n  <button type=\"button\" (click)=\"addNewListing()\" class=\"btn btn-primary waves-light\" style=\"border-radius: 100px\"  mdbWavesEffect>Add Book</button>\n</div>\n<div id=\"snackbar\" >You have Signed Up Successfully</div>\n<div id=\"snackbar2\" >Fail</div>\n<!--https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif-->\n"

/***/ }),

/***/ "./src/app/add-listing/add-listing.component.scss":
/*!********************************************************!*\
  !*** ./src/app/add-listing/add-listing.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Karla);\n@import url(https://fonts.googleapis.com/css?family=Ubuntu:300);\n.wrap {\n  padding: 80px 0;\n  font-size: 62px;\n  color: #888;\n  width: 400px;\n  font-family: 'Karla';\n  margin: 0 auto;\n  text-align: center; }\n.img-circle {\n  border-radius: 50%; }\ninput {\n  font-family: 'Ubuntu';\n  font-weight: 300;\n  border: 0;\n  border-bottom: 1px solid #ff5407;\n  width: 100%;\n  height: 36px;\n  font-size: 26px; }\ninput:focus {\n  outline: none;\n  box-shadow: none;\n  background: #ffeae2; }\nselect {\n  align-content: center;\n  border: 0;\n  border-bottom: 1px solid #ff5407;\n  width: 200%;\n  height: 36px;\n  font-size: 26px;\n  margin-left: -100px;\n  padding-right: 110px; }\nselect:focus {\n  outline: none;\n  box-shadow: none;\n  background: #ffeae2; }\n.buttonafter:after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 8px;\n  left: 100%;\n  /*should be set to 100% */\n  width: 0;\n  height: 0;\n  border-color: transparent transparent transparent #14a03d;\n  /*border color should be same as div div background color*/\n  border-style: solid;\n  border-width: 5px; }\n.forgot {\n  background: #a0a0a0;\n  color: #fff;\n  float: left; }\n.login {\n  background: #a0a0a0;\n  color: #fff;\n  float: right; }\n#snackbar {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #00b550;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n#snackbar2 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #d50020;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.\n  However, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n#snackbar2.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.\n  However, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"

/***/ }),

/***/ "./src/app/add-listing/add-listing.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-listing/add-listing.component.ts ***!
  \******************************************************/
/*! exports provided: AddListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddListingComponent", function() { return AddListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/User */ "./src/app/Models/User.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Models_Listing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/Listing */ "./src/app/Models/Listing.ts");
/* harmony import */ var _listing_listing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../listing/listing.service */ "./src/app/listing/listing.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddListingComponent = /** @class */ (function () {
    function AddListingComponent(route, myLisitngService, myUserService, storage) {
        this.route = route;
        this.myLisitngService = myLisitngService;
        this.myUserService = myUserService;
        this.storage = storage;
        this.currentUser = new _Models_User__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.newListing = new _Models_Listing__WEBPACK_IMPORTED_MODULE_3__["Listing"]();
        this.uploadFile = null;
    }
    AddListingComponent.prototype.ngOnInit = function () {
        this.changeActiveNavbar();
        this.newListing.image = "https://gangarams.com/image/cache/placeholder-250x250.png";
        if (!this.checkForCurrentUser()) {
            this.route.navigate(['login']);
        }
    };
    AddListingComponent.prototype.selectFile = function (event) {
        if (event.target.files[0] != undefined || event.target.files[0] != null) {
            this.uploadFile = event.target.files[0];
            this.uploadToServer();
        }
    };
    AddListingComponent.prototype.uploadToServer = function () {
        var _this = this;
        if (this.uploadFile == null || this.uploadFile == undefined) {
            alert("Please select a file first");
            return;
        }
        this.newListing.image = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";
        console.log(this.uploadFile);
        var filePath = 'bookImage/image-' + new Date().getTime();
        var fileRef = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, this.uploadFile);
        this.uploadPercent = task.percentageChanges();
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            _this.downloadURL = fileRef.getDownloadURL();
            console.log(_this.downloadURL);
            _this.downloadURL.subscribe(function (data) {
                console.log(data);
                _this.newListing.image = data;
            });
        }))
            .subscribe(function (data) { return console.log(data); });
    };
    AddListingComponent.prototype.addNewListing = function () {
        var _this = this;
        if (this.newListing.image == "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif") {
            alert("Please let image upload first");
            return;
        }
        this.newListing.seller = this.currentUser.id;
        console.log(this.newListing);
        for (var property in this.newListing) {
            console.log(property, this.newListing[property]);
            if (this.newListing[property] == undefined || this.newListing[property] == "" || this.newListing[property] == null) {
                this.showToastDanger("All Fields are necessary");
                return;
            }
        }
        this.myLisitngService.addItemsToListings(this.newListing).toPromise().then(function (data) {
            console.log(data);
            _this.showToastSuccess();
            _this.route.navigate(['listings']);
        })
            .catch(function (error) { return console.log(error); });
    };
    AddListingComponent.prototype.uploadEvent = function () {
        document.getElementById("fileUploadBut").click();
    };
    AddListingComponent.prototype.changeActiveNavbar = function () {
        document.getElementById("listingsNavbar").classList.remove("active");
        document.getElementById("sellNavbar").classList.add("active");
        document.getElementById("authNavbar").classList.remove("active");
        document.getElementById("messagesNavbar").classList.remove("active");
        document.getElementById("wishlistNavbar").classList.remove("active");
    };
    AddListingComponent.prototype.checkForCurrentUser = function () {
        var _this = this;
        var navbar = document.getElementById("mainNavbar");
        navbar.hidden = false;
        if (localStorage.getItem("currentUser") === null) {
            console.log("error not logged in");
            this.route.navigate(['login']);
            this.changeUserName(0);
            return false;
        }
        else {
            console.log("getting user");
            this.localUserDetails = JSON.parse(localStorage.getItem("currentUser"));
            this.changeUserName(1);
            this.myUserService.getUserInfo(this.localUserDetails.id).toPromise()
                .then(function (data) { _this.currentUser = data; console.log(data); })
                .catch(function (error) { console.log(error); _this.route.navigate(['logout']); });
            return true;
        }
    };
    AddListingComponent.prototype.changeUserName = function (type) {
        var username = document.getElementById("userNameNavbar");
        var btLogin = document.getElementById("loginNavbar");
        var btProfile = document.getElementById("profileNavbar");
        var btLogout = document.getElementById("logoutNavbar");
        var btSignupNavbar = document.getElementById("signupNavbar");
        if (type == 1) {
            username.innerText = this.localUserDetails.name;
            btLogin.hidden = true;
            btProfile.hidden = false;
            btLogout.hidden = false;
            btSignupNavbar.hidden = true;
        }
        else {
            username.innerText = "Sign In";
            btLogin.hidden = false;
            btProfile.hidden = true;
            btLogout.hidden = true;
            btSignupNavbar.hidden = false;
        }
    };
    AddListingComponent.prototype.showToastSuccess = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
    };
    AddListingComponent.prototype.showToastDanger = function (message) {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar2");
        x.innerText = message;
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
    };
    AddListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-listing',
            template: __webpack_require__(/*! ./add-listing.component.html */ "./src/app/add-listing/add-listing.component.html"),
            styles: [__webpack_require__(/*! ./add-listing.component.scss */ "./src/app/add-listing/add-listing.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _listing_listing_service__WEBPACK_IMPORTED_MODULE_4__["ListingService"],
            _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]])
    ], AddListingComponent);
    return AddListingComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-signup></app-signup>-->\n<!--<app-login></app-login>-->\n<mdb-navbar id=\"mainNavbar\"\n            SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark deep-orange scrolling-navbar ie-nav\" [containerInside]=\"false\">\n  <logo style=\"margin-right: 20px\">\n    <a class=\"logo navbar-brand\" href=\"#\" style=\"text-transform: uppercase\"><strong>Bookstaan</strong></a>\n  </logo>\n  <links>\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item waves-light\" mdbWavesEffect style=\"margin-right: 20px\">\n        <a class=\"nav-link\" routerLink=\"/home\" id=\"homeNavbar\">Home</a>\n      </li>\n      <li class=\"nav-item waves-light\" id=\"listingsNavbar\" mdbWavesEffect style=\"margin-right: 20px\">\n        <a class=\"nav-link \" routerLink=\"/listings\">Listings <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item waves-light\" id=\"sellNavbar\" mdbWavesEffect style=\"margin-right: 20px\">\n        <a class=\"nav-link\" routerLink=\"/listings/add\">Sell</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav nav-flex-icons\">\n      <li class=\"nav-item dropdown\" id=\"authNavbar\" dropdown style=\"margin-right: 20px\">\n        <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\n          <label id=\"userNameNavbar\" style=\"margin-right: 8px\"><b>Sign In</b></label>\n          <i class=\"fa fa-user fa-lg\"></i><span class=\"caret\"></span></a>\n        <div *dropdownMenu class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\">\n          <a class=\"dropdown-item waves-light\" id=\"profileNavbar\" mdbWavesEffect routerLink=\"/profile\" hidden>Profile</a>\n          <a class=\"dropdown-item waves-light\" id=\"logoutNavbar\" mdbWavesEffect routerLink=\"/logout\" hidden>Logout</a>\n          <a class=\"dropdown-item waves-light\" id=\"loginNavbar\" mdbWavesEffect routerLink=\"/login\">Login</a>\n          <a class=\"dropdown-item waves-light\" id=\"signupNavbar\" mdbWavesEffect routerLink=\"/signup\">Sign Up</a>\n        </div>\n      </li>\n      <li class=\"nav-item waves-light\" id=\"messagesNavbar\" mdbWavesEffect style=\"margin-right: 20px\">\n        <a class=\"nav-link\" routerLink=\"/messages\" mdbTooltip=\"Messages\" placement=\"bottom\">\n          <i class=\"fa fa-envelope fa-lg\"></i>&nbsp;\n          <!--<span class=\"badge badge-primary\" style=\"border-radius: 18px\">0</span>-->\n        </a>\n      </li>\n      <li class=\"nav-item waves-light\" id=\"wishlistNavbar\" mdbWavesEffect style=\"margin-right: 20px\">\n        <a class=\"nav-link\" routerLink=\"/wishlist\" mdbTooltip=\"WishList\" placement=\"bottom\">\n          <i class=\"fa fa-bookmark fa-lg\"></i>&nbsp;\n          <!--<span class=\"badge badge-primary\" style=\"border-radius: 18px\">0</span>-->\n        </a>\n      </li>\n    </ul>\n  </links>\n</mdb-navbar>\n<main [@routerTransition] = \"getState(o)\">\n  <router-outlet #o=\"outlet\"></router-outlet>\n</main>\n<footer class=\"footer-copyright deep-orange py-3 text-center text-white\">\n Made By Mayank Tanwani\n</footer>\n<!--<app-home></app-home>-->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routerTransition', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('profile<=> profile-listings', [
                        /* order */
                        /* 1 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
                        /* 2 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }))
                            ], { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }))
                            ], { optional: true }),
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('profile<=> messages', [
                        /* order */
                        /* 1 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
                        /* 2 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }))
                            ], { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }))
                            ], { optional: true }),
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('profile<=> wishlist', [
                        /* order */
                        /* 1 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
                        /* 2 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }))
                            ], { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }))
                            ], { optional: true }),
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('profile<=> listings-add', [
                        /* order */
                        /* 1 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
                        /* 2 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }))
                            ], { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }))
                            ], { optional: true }),
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', [
                        /* order */
                        /* 1 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
                        /* 2 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
                            ], { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
                            ], { optional: true }),
                        ])
                    ])
                ])
            ]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _add_listing_add_listing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-listing/add-listing.component */ "./src/app/add-listing/add-listing.component.ts");
/* harmony import */ var _single_list_single_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./single-list/single-list.component */ "./src/app/single-list/single-list.component.ts");
/* harmony import */ var _message_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./message/message.service */ "./src/app/message/message.service.ts");
/* harmony import */ var _listing_listing_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./listing/listing.service */ "./src/app/listing/listing.service.ts");
/* harmony import */ var _wishlist_wishlist_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wishlist/wishlist.service */ "./src/app/wishlist/wishlist.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var angular2_image_zoom__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular2-image-zoom */ "./node_modules/angular2-image-zoom/index.js");
/* harmony import */ var angular2_image_zoom__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(angular2_image_zoom__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _user_listings_user_listings_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user-listings/user-listings.component */ "./src/app/user-listings/user-listings.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng2_ion_range_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng2-ion-range-slider */ "./node_modules/ng2-ion-range-slider/index.js");
/* harmony import */ var ng2_ion_range_slider__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(ng2_ion_range_slider__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./page404/page404.component */ "./src/app/page404/page404.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
        data: { state: 'home' }
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        data: { state: 'login' }
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
        data: { state: 'signup' }
    },
    {
        path: 'messages',
        component: _message_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"],
        data: { state: 'messages' }
    },
    {
        path: 'wishlist',
        component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_7__["WishlistComponent"],
        runGuardsAndResolvers: 'always',
        data: { state: 'wishlist' }
    },
    {
        path: 'listings',
        component: _listing_listing_component__WEBPACK_IMPORTED_MODULE_4__["ListingComponent"],
        data: { state: 'listings' }
    },
    {
        path: 'listings/add',
        component: _add_listing_add_listing_component__WEBPACK_IMPORTED_MODULE_8__["AddListingComponent"],
        data: { state: 'listings-add' }
    },
    {
        path: 'listings/:id',
        component: _single_list_single_list_component__WEBPACK_IMPORTED_MODULE_9__["SingleListComponent"],
        data: { state: 'listings-id' }
    },
    {
        path: 'logout',
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_21__["LogoutComponent"],
        data: { state: 'logout' }
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"],
        data: { state: 'profile' }
    },
    {
        path: 'profile/listings',
        component: _user_listings_user_listings_component__WEBPACK_IMPORTED_MODULE_24__["UserListingsComponent"],
        data: { state: 'profile-listings' }
    },
    {
        path: '404',
        component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_27__["Page404Component"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"],
                _listing_listing_component__WEBPACK_IMPORTED_MODULE_4__["ListingComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_7__["WishlistComponent"],
                _add_listing_add_listing_component__WEBPACK_IMPORTED_MODULE_8__["AddListingComponent"],
                _single_list_single_list_component__WEBPACK_IMPORTED_MODULE_9__["SingleListComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_21__["LogoutComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"],
                _user_listings_user_listings_component__WEBPACK_IMPORTED_MODULE_24__["UserListingsComponent"],
                _page404_page404_component__WEBPACK_IMPORTED_MODULE_27__["Page404Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot(routes),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MDBBootstrapModule"].forRoot(),
                angularfire2__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp({
                    apiKey: 'AIzaSyCmVmsYREtsKfwPKSkFggmEJ9xuGHwkm4s',
                    authDomain: 'fileuploader-3159c.firebaseapp.com',
                    databaseURL: 'https://fileuploader-3159c.firebaseio.com',
                    projectId: 'fileuploader-3159c',
                    storageBucket: 'fileuploader-3159c.appspot.com',
                    messagingSenderId: '768618514345'
                }),
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_18__["AngularFireStorageModule"],
                angular2_image_zoom__WEBPACK_IMPORTED_MODULE_23__["ImageZoomModule"],
                ng2_ion_range_slider__WEBPACK_IMPORTED_MODULE_26__["IonRangeSliderModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            providers: [_message_message_service__WEBPACK_IMPORTED_MODULE_10__["MessageService"], _listing_listing_service__WEBPACK_IMPORTED_MODULE_11__["ListingService"], _wishlist_wishlist_service__WEBPACK_IMPORTED_MODULE_12__["WishlistService"], _user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"], angularfire2__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.4/css/mdb.min.css\");\n@import url(\"https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic\");\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800');\n/* You can add global styles to this file, and also import other style files */\napp-home {\n  width: 100%;\n  height: 100%;\n}\napp-home {\n  font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;\n}\nhr {\n  max-width: 50px;\n  border-width: 3px;\n  border-color: #F05F40;\n}\nhr.light {\n  border-color: #fff;\n}\na {\n  color: #F05F40;\n  transition: all 0.2s;\n}\na:hover {\n  color: #f05f40;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n}\nh2 {\n  font-weight: 500;\n}\napp-home{\n  font-weight: 400;\n}\n.bg-primary {\n  background-color: #F05F40 !important;\n}\n.bg-dark {\n  background-color: #212529 !important;\n}\n.text-faded {\n  color: rgba(255, 255, 255, 0.7);\n}\nsection {\n  padding: 8rem 0;\n}\n.section-heading {\n  margin-top: 0;\n}\n::-moz-selection {\n  color: #fff;\n  background: #212529;\n  text-shadow: none;\n}\n::selection {\n  color: #fff;\n  background: #212529;\n  text-shadow: none;\n}\nimg::-moz-selection {\n  color: #fff;\n  background: transparent;\n}\nimg::selection {\n  color: #fff;\n  background: transparent;\n}\nimg::-moz-selection {\n  color: #fff;\n  background: transparent;\n}\n#mainNav {\n  border-bottom: 1px solid rgba(33, 37, 41, 0.1);\n  background-color: #fff;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n  transition: all 0.2s;\n}\n#mainNav .navbar-brand {\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #F05F40;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n}\n#mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {\n  color: #f05f40;\n}\n#mainNav .navbar-nav > li.nav-item > a.nav-link,\n#mainNav .navbar-nav > li.nav-item > a.nav-link:focus {\n  font-size: .9rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #212529;\n}\n#mainNav .navbar-nav > li.nav-item > a.nav-link:hover,\n#mainNav .navbar-nav > li.nav-item > a.nav-link:focus:hover {\n  color: #F05F40;\n}\n#mainNav .navbar-nav > li.nav-item > a.nav-link.active,\n#mainNav .navbar-nav > li.nav-item > a.nav-link:focus.active {\n  color: #F05F40 !important;\n  background-color: transparent;\n}\n#mainNav .navbar-nav > li.nav-item > a.nav-link.active:hover,\n#mainNav .navbar-nav > li.nav-item > a.nav-link:focus.active:hover {\n  background-color: transparent;\n}\n@media (min-width: 992px) {\n  #mainNav {\n    border-color: transparent;\n    background-color: transparent;\n  }\n  #mainNav .navbar-brand {\n    color: rgba(255, 255, 255, 0.7);\n  }\n  #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {\n    color: #fff;\n  }\n  #mainNav .navbar-nav > li.nav-item > a.nav-link {\n    padding: 0.5rem 1rem;\n  }\n  #mainNav .navbar-nav > li.nav-item > a.nav-link,\n  #mainNav .navbar-nav > li.nav-item > a.nav-link:focus {\n    color: rgba(255, 255, 255, 0.7);\n  }\n  #mainNav .navbar-nav > li.nav-item > a.nav-link:hover,\n  #mainNav .navbar-nav > li.nav-item > a.nav-link:focus:hover {\n    color: #fff;\n  }\n  #mainNav.navbar-shrink {\n    border-bottom: 1px solid rgba(33, 37, 41, 0.1);\n    background-color: #fff;\n  }\n  #mainNav.navbar-shrink .navbar-brand {\n    color: #F05F40;\n  }\n  #mainNav.navbar-shrink .navbar-brand:focus, #mainNav.navbar-shrink .navbar-brand:hover {\n    color: #f05f40;\n  }\n  #mainNav.navbar-shrink .navbar-nav > li.nav-item > a.nav-link,\n  #mainNav.navbar-shrink .navbar-nav > li.nav-item > a.nav-link:focus {\n    color: #212529;\n  }\n  #mainNav.navbar-shrink .navbar-nav > li.nav-item > a.nav-link:hover,\n  #mainNav.navbar-shrink .navbar-nav > li.nav-item > a.nav-link:focus:hover {\n    color: #F05F40;\n  }\n}\nheader.masthead {\n  padding-top: 10rem;\n  padding-bottom: calc(10rem - 56px);\n  background: url('header.jpg') center center;\n  background-size: cover;\n}\nheader.masthead hr {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\nheader.masthead h1 {\n  font-size: 2rem;\n}\nheader.masthead p {\n  font-weight: 300;\n}\n@media (min-width: 768px) {\n  header.masthead p {\n    font-size: 1.15rem;\n  }\n}\n@media (min-width: 992px) {\n  header.masthead {\n    height: 100vh;\n    min-height: 650px;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n  header.masthead h1 {\n    font-size: 3rem;\n  }\n}\n@media (min-width: 1200px) {\n  header.masthead h1 {\n    font-size: 4rem;\n  }\n}\n.service-box {\n  max-width: 400px;\n}\n.portfolio-box {\n  position: relative;\n  display: block;\n  max-width: 650px;\n  margin: 0 auto;\n}\n.portfolio-box .portfolio-box-caption {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  opacity: 0;\n  color: #fff;\n  background: rgba(240, 95, 64, 0.9);\n  transition: all 0.2s;\n}\n.portfolio-box .portfolio-box-caption .portfolio-box-caption-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n}\n.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category,\n.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name {\n  padding: 0 15px;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n}\n.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category {\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name {\n  font-size: 18px;\n}\n.portfolio-box:hover .portfolio-box-caption {\n  opacity: 1;\n}\n.portfolio-box:focus {\n  outline: none;\n}\n@media (min-width: 768px) {\n  .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-category {\n    font-size: 16px;\n  }\n  .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .project-name {\n    font-size: 22px;\n  }\n}\n.text-primary {\n  color: #F05F40 !important;\n}\n.btn {\n  font-weight: 700;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 300px;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;\n}\napp-home.btn-xl {\n  padding: 1rem 2rem;\n}\napp-home.btn-primary {\n  background-color: #F05F40;\n  border-color: #F05F40;\n}\napp-home.btn-primary:hover, app-home.btn-primary:focus, app-home.btn-primary:active {\n  color: #fff;\n  background-color: #ee4b28 !important;\n}\napp-home.btn-primary:active, app-home.btn-primary:focus {\n  box-shadow: 0 0 0 0.2rem rgba(240, 95, 64, 0.5) !important;\n}\nh2{\n  font-family: 'Open Sans','Helvetica Neue',Arial,sans-serif;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Navigation -->\n<nav class=\"navbar navbar-expand-lg navbar-light fixed-top scrolling-navbar ie-nav\" id=\"mainNav\"\n     style=\"box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.0), 0 0px 0px 0 rgba(0, 0, 0, 0.0)\">\n  <div class=\"container\">\n    <a class=\"navbar-brand js-scroll-trigger\" routerLink=\"/home\" fragment=\"page-top\">Bookstaan</a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"navbarLogin\" routerLink=\"/login\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"navbarUser\" routerLink=\"/profile\">Sign In</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" routerLink=\"/home\" fragment=\"about\">About</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" routerLink=\"/home\" fragment=\"contact\">Contact</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n\n\n<header class=\"masthead text-center text-white d-flex\" id=\"page-top\">\n  <div class=\"container my-auto\">\n    <div class=\"row\">\n      <div class=\"col-lg-10 mx-auto\">\n        <h1 class=\"text-uppercase\"  style=\"font-family: 'Open Sans','Helvetica Neue',Arial,sans-serif;font-weight: 500\">\n          <strong>Your Book exchange portal</strong>\n        </h1>\n        <hr style=\"border-color: #f05f40;border-width: 3px\">\n      </div>\n      <div class=\"col-lg-8 mx-auto\">\n        <p class=\"text-white mb-5\" style=\"font-weight: 400\">\n          Bookstaan is a portal to sell your old books and also buy books being sold by others. It is specially made for college students and their needs.</p>\n        <a class=\"btn btn-deep-orange btn-xl js-scroll-trigger\"\n           style=\"font-size: 1rem\" routerLink=\"/listings\">Buy a Book</a>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <a class=\"btn btn-deep-orange btn-xl js-scroll-trigger\"\n           style=\"font-size: 1rem\" routerLink=\"/listings/add\">Sell a Book</a>\n      </div>\n    </div>\n  </div>\n</header>\n\n<section id=\"about\" style=\"background: #f05f40;background-color: #f05f40\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 mx-auto text-center\">\n        <h2 class=\"section-heading text-white\">We've got what you need!</h2>\n        <hr class=\"light my-4\" style=\"border-color: white;border-width: 3px\">\n        <p class=\"text-faded mb-4\">\n          Having a pile of books is something that no one needs! We are here to solve your problem.\n          <br>\n          How about you start selling them.\n          <br>\n          Have an old book lying ?\n        Sell It<br>\n        Want a book ?\n        Buy It</p>\n        <a class=\"btn btn-light btn-xl js-scroll-trigger\" routerLink=\"/listings\" style=\"font-size: 1rem\">Get Started!</a>\n      </div>\n    </div>\n  </div>\n</section>\n<section id=\"contact\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 mx-auto text-center\">\n        <h2 class=\"section-heading\">Let's Get In Touch!</h2>\n        <hr style=\"border-color: #f05f40;border-width: 3px\">\n        <p class=\"mb-5\">Interested in using our service ?\n          That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 ml-auto text-center\">\n        <i class=\"fa fa-phone fa-3x mb-3 sr-contact\"></i>\n        <p>123-456-6789</p>\n      </div>\n      <div class=\"col-lg-4 mr-auto text-center\">\n        <i class=\"fa fa-envelope-o fa-3x mb-3 sr-contact\"></i>\n        <p>\n          <a href=\"mailto:your-email@your-domain.com\">feedback@bookstan.com</a>\n        </p>\n      </div>\n    </div>\n\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(route) {
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.fragment.subscribe(function (fragment) { _this.fragment = fragment; _this.ngAfterViewInit(); });
        var navbar = document.getElementById("mainNavbar");
        navbar.hidden = true;
        this.checkForCurrentUser();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        try {
            document.querySelector('#' + this.fragment).scrollIntoView();
        }
        catch (e) {
        }
    };
    HomeComponent.prototype.checkForCurrentUser = function () {
        if (localStorage.getItem("currentUser") === null) {
            console.log("error not logged in");
            this.changeUserName(0);
            return false;
        }
        else {
            console.log("getting user");
            this.localUserDetails = JSON.parse(localStorage.getItem("currentUser"));
            this.changeUserName(1);
            return true;
        }
    };
    HomeComponent.prototype.changeUserName = function (type) {
        var userButton = document.getElementById("navbarUser");
        var loginButton = document.getElementById("navbarLogin");
        if (type == 1) {
            userButton.innerText = this.localUserDetails.name;
            userButton.hidden = false;
            loginButton.hidden = true;
        }
        else {
            userButton.hidden = true;
            loginButton.hidden = false;
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/listing/listing.component.html":
/*!************************************************!*\
  !*** ./src/app/listing/listing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main -->\n<div class=\"container\">\n  <div class=\"row pt-5 mt-5 \" style=\"margin-left: -5%\">\n    <aside class=\"col-3\" style=\"max-width: 25%\">\n      <br>\n      <div class=\"card\" style=\"margin-top: -1%\">\n        <article class=\"card-group-item\">\n          <header class=\"card-header\">\n            <button class=\"btn btn-primary btn-sm waves-light\" style=\"border-radius: 50px\"\n                    (click)=\"filterByBoth(minField.value,maxField.value)\">Filter</button>\n            <button class=\"btn btn-primary btn-sm waves-light\" style=\"border-radius: 50px\"\n                    (click)=\"clearFilters()\">Clear</button>\n          </header>\n          <div class=\"filter-content\">\n            <div class=\"card-body\">\n              Price Range\n              <hr style=\"margin-left: 0\">\n              <div class=\"form-row\">\n                <input #minField class=\"form-control\"\n                  type=\"number\" style=\"max-width: 40%;margin-right: 18%\" [(ngModel)]=\"minRange\" step=\"100\" min=\"0\" [max]=\"maxRange\">\n                <input #maxField class=\"form-control\"\n                  type=\"number\" style=\"max-width: 40%;justify-content: end\" [(ngModel)]=\"maxRange\" step=\"100\" [min]=\"minRange\"\n                       [max]=\"maxRangeValue\">\n              </div>\n              <div class=\"form-row\" style=\"padding-top: 10px\">\n                <div class=\"form-group col-md \">\n                  <ion-range-slider style=\"max-width: 100%;color: red;font-size: 12px\" #slider\n                                    type=\"double\" [min]=\"0\" [max]=\"maxRangeValue\" [step]=\"100\" [from]=\"minRange\"\n                                    [to]=\"maxRange\" (onFinish)=\"sliderChange($event)\"></ion-range-slider>\n                </div>\n            </div> <!-- card-body.// -->\n          </div>\n          </div>\n        </article> <!-- card-group-item.// -->\n        <article class=\"card-group-item\" style=\"margin-top: -40px\">\n          <div class=\"filter-content\">\n            <div class=\"card-body\">\n              Condition\n              <hr style=\"margin-left: 0\">\n              <div class=\"custom-control custom-checkbox\">\n                <!--<span class=\"float-right badge badge-light round\">52</span>-->\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"Check1\" [checked]=\"checkboxes[0]\" (change)=\"checkboxes[0] = !checkboxes[0]\">\n                <label class=\"custom-control-label\" for=\"Check1\">New</label>\n              </div> <!-- form-check.// -->\n\n              <div class=\"custom-control custom-checkbox\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"Check2\" [checked]=\"checkboxes[1]\" (change)=\"checkboxes[1] = !checkboxes[1]\">\n                <label class=\"custom-control-label\" for=\"Check2\">Almost New</label>\n              </div> <!-- form-check.// -->\n\n              <div class=\"custom-control custom-checkbox\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"Check3\" [checked]=\"checkboxes[2]\" (change)=\"checkboxes[2] = !checkboxes[2]\">\n                <label class=\"custom-control-label\" for=\"Check3\">Slightly Damaged</label>\n              </div> <!-- form-check.// -->\n\n              <div class=\"custom-control custom-checkbox\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"Check4\" [checked]=\"checkboxes[3]\" (change)=\"checkboxes[3] = !checkboxes[3]\">\n                <label class=\"custom-control-label\" for=\"Check4\">Worn</label>\n              </div> <!-- form-check.// -->\n              <!-- form-check.// -->\n            </div> <!-- card-body.// -->\n          </div>\n        </article> <!-- card-group-item.// -->\n        <article class=\"card-group-item\">\n          <header class=\"card-header\">\n            <h6 class=\"title\"></h6>\n          </header>\n          <div class=\"filter-content\">\n            <div class=\"card-body\">\n              Book Name\n              <hr style=\"margin-left: 0\">\n              <div class=\"md-form\">\n                <input mdbInputDirective type=\"text\" id=\"form1\" class=\"form-control\" [(ngModel)]=\"bookNameText\">\n                <label for=\"form1\" class=\"\">Book Name</label>\n              </div>\n              <button (click)=\"filterByBookName()\"\n                type=\"button\" class=\"btn btn-primary waves-light btn-sm\" style=\"border-radius: 50px\" mdbWavesEffect\n              #bookNameField>\n                Search\n              </button>\n              <button (click)=\"clearBookName(minField,maxField)\"\n                      type=\"button\" class=\"btn btn-primary waves-light btn-sm\" style=\"border-radius: 50px\" mdbWavesEffect>\n                Clear\n              </button>\n              <!-- form-check.// -->\n              <!-- form-check.// -->\n            </div> <!-- card-body.// -->\n          </div>\n        </article>\n        <article class=\"card-group-item\" style=\"margin-top: -20px\">\n          <div class=\"filter-content\">\n            <div class=\"card-body\">\n              Author Name\n              <hr style=\"margin-left: 0\">\n              <div class=\"md-form\" >\n                <input mdbInputDirective type=\"text\" id=\"form2\" class=\"form-control\" [(ngModel)]=\"authorNameText\">\n                <label for=\"form2\" class=\"\">Author Name</label>\n              </div>\n              <button (click)=\"filterByAuthorName()\"\n                type=\"button\" class=\"btn btn-primary waves-light btn-sm\" style=\"border-radius: 50px\" mdbWavesEffect\n              #authorNameField>\n                Search\n              </button>\n              <button (click)=\"clearAuthorName(minField,maxField)\"\n                      type=\"button\" class=\"btn btn-primary waves-light btn-sm\" style=\"border-radius: 50px\" mdbWavesEffect>\n                Clear\n              </button>\n              <!-- form-check.// -->\n              <!-- form-check.// -->\n            </div> <!-- card-body.// -->\n          </div>\n        </article>\n        <article class=\"card-group-item\" style=\"margin-top: -20px\">\n          <div class=\"filter-content\">\n            <div class=\"card-body\">\n              Sort Order\n              <hr style=\"margin-left: 0\">\n              <div class=\"form-group\">\n                <select class=\"form-control\" id=\"exampleFormControlSelect1\" [(ngModel)]=\"sortOrder\">\n                  <option selected>Oldest First</option>\n                  <option >Newest First</option>\n                  <option>Price low to high</option>\n                  <option>Price high to low</option>\n                </select>\n              </div>\n              <button (click)=\"applySort()\"\n                      type=\"button\" class=\"btn btn-primary waves-light btn-sm\" style=\"border-radius: 50px\" mdbWavesEffect\n                      #authorNameField>\n                Sort\n              </button>\n              <!-- form-check.// -->\n              <!-- form-check.// -->\n            </div> <!-- card-body.// -->\n          </div>\n        </article>\n\n      </div> <!-- card.// -->\n    </aside> <!-- col.// -->\n    <div class=\"col\" style=\"padding-left: 3%\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div style=\"padding-left: 0;padding-right: 0;padding-top: 0\"\n               class=\"col-4\" *ngIf=\"listings.length == 0\">\n          <!--{{showToastInfo(\"No Items Found\")}}-->\n            <label class=\"wrap\">No Items Found<br>\n              <i class=\"fa fa-frown-o fa-lg\"></i>\n            </label>\n          </div>\n          <div style=\"padding-left: 0;padding-right: 0;padding-top: 0\"\n            class=\"block col-4\" *ngFor=\"let item of listings;let idx = index\">\n            <div class=\"product\" mdbWavesEffect=\"\">\n              <!--<img src=\"https://gangarams.com/image/cache/placeholder-250x250.png\">-->\n              <img src=\"{{item.image}}\">\n              <div class=\"buttons\">\n                <a class=\"buy\" (click)=\"redirectList(item.id)\" onclick=\"\">View</a>\n              </div>\n            </div>\n            <div class=\"info\">\n              <h4 style=\"font-weight: 600\">{{item.bookName}}</h4>\n              <div class=\"description\">\n                By {{item.authorName}}\n              </div>\n              <span class=\"price\">Rs. {{item.price}}</span>\n              <!--<a class=\"buy_now\" href=\"#\" onclick=\"updateCart('${product.id}','${product.name}','${product.manufacturer}','${product.price}')\">Buy Now</a>-->\n            </div>\n            <div class=\"details\">\n              <div class=\"time\">\n                <h5 class=\"badge badge-success\"  [hidden]=\"checkCondiiton(item) !== 0\">\n                  <label style=\"font-size: medium\" class=\"conditionlabel\">New</label></h5>\n                <h5 class=\"badge badge-info\"   [hidden]=\"checkCondiiton(item) !== 1\">\n                  <label style=\"font-size: medium\" class=\"conditionlabel\">Almost New</label></h5>\n                <h5 class=\"badge badge-warning\"   [hidden]=\"checkCondiiton(item) !== 2\">\n                  <label style=\"font-size: medium\"  class=\"conditionlabel\">Slight Damage</label></h5>\n                <h5 class=\"badge badge-danger\"   [hidden]=\"checkCondiiton(item) !== 3\">\n                  <label style=\"font-size: medium\"  class=\"conditionlabel\">Worn</label></h5>&nbsp;&nbsp;&nbsp;&nbsp;\n                  <a class=\"time\" style=\"color: mediumblue;\" (click)=\"addToWishList(idx)\" mdbTooltip=\"Add To WishList\" placement=\"bottom\">\n                  <i class=\"fa fa-bookmark-o fa-lg\"></i></a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.Main -->\n</div>\n<div id=\"snackbar\">Added To Your Wishlist</div>\n<div id=\"snackbar2\">Invalid Range</div>\n"

/***/ }),

/***/ "./src/app/listing/listing.component.scss":
/*!************************************************!*\
  !*** ./src/app/listing/listing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Karla);\n@import url(https://fonts.googleapis.com/css?family=Ubuntu:300);\n.wrap {\n  padding: 80px 0;\n  font-size: 62px;\n  color: #888;\n  width: 400px;\n  font-family: 'Karla';\n  margin: 0 auto;\n  text-align: center;\n  margin-left: 50%; }\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n/* Animations to fade the snackbar in and out */\n.conditionlabel {\n  padding: 3px;\n  margin-bottom: 0 !important; }\n.block {\n  width: 295px;\n  display: inline-block;\n  position: initial;\n  margin: 1.5%;\n  max-width: 30%;\n  border-radius: 5px;\n  background: #fff;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n.product {\n  display: block;\n  position: relative;\n  height: 200px;\n  overflow: hidden; }\n.product img {\n    width: 100%;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n.product:hover .buttons {\n    opacity: 1; }\n.product:hover a {\n    opacity: 1; }\n.info {\n  display: block;\n  position: relative;\n  padding: 20px; }\n.info h4 {\n    position: relative;\n    padding: 0 0 20px 0;\n    margin: 0 0 20px 0;\n    font-family: \"Open Sans\", sans-serif;\n    font-weight: 700;\n    font-size: 19px;\n    line-height: 25px;\n    color: #372f2b;\n    letter-spacing: -1px; }\n.info h4::after {\n      display: block;\n      position: absolute;\n      bottom: 0px;\n      content: \"\";\n      width: 40px;\n      height: 2px;\n      background: #3b86c4; }\n.info .description {\n    display: block;\n    padding-bottom: 20px;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 14px;\n    font-weight: 600;\n    color: #5f5f5f; }\n.info .price {\n    font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n    font-size: 24px;\n    font-weight: 700;\n    color: #372f2b;\n    line-height: 26px; }\n.details {\n  border-top: 1px solid #e5e5e5;\n  padding: 18px 20px; }\n.buttons {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n  opacity: 0;\n  transition: opacity .25s ease-in; }\n.buttons a {\n    display: block;\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    margin: auto;\n    width: 115px;\n    border-radius: 2px;\n    padding: 15px 40px;\n    font-family: Helvetica, sans-serif;\n    font-size: 15px;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: #fff;\n    text-decoration: none;\n    opacity: 0;\n    text-align: center; }\na.buy {\n  top: 20%;\n  text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.4);\n  background: #1abc9c;\n  background-position: 0 -15px;\n  background-size: 400px 80px;\n  background-repeat: no-repeat;\n  box-shadow: 0 3px 0 #16a085;\n  transition: background-position .2s ease-in; }\na.buy:active {\n    top: 21%;\n    box-shadow: 0 0px 0 #16a085; }\na.preview {\n  bottom: 20%;\n  text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.4);\n  background: #3498db;\n  background-position: 0 -15px;\n  background-size: 400px 80px;\n  background-repeat: no-repeat;\n  box-shadow: 0 3px 0 #2980b9;\n  transition: background-position .2s ease-in; }\n.preview:hover {\n  background-position: 0 0; }\n.preview:active {\n  -webkit-transform: translateY(2px);\n  transform: translateY(2px);\n  box-shadow: none; }\n.buy_now {\n  float: right;\n  position: relative;\n  top: -5px;\n  display: block;\n  padding: 10px 10px;\n  border-radius: 3px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #fff;\n  font-weight: bold;\n  text-decoration: none;\n  font-size: 15px;\n  text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.4);\n  background: #3498db;\n  transition: background-position .2s ease-in;\n  box-shadow: 0 3px 0 #2980b9; }\n.buy_now:hover {\n    background-position: 0 0; }\n.buy_now:active {\n    -webkit-transform: translateY(2px);\n    transform: translateY(2px);\n    box-shadow: none; }\n.time {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  color: #372f2b;\n  background-position: 0 2px; }\n#snackbar {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #00b550;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n#snackbar2 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #d50020;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.\n  However, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n#snackbar2.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.\n  However, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"

/***/ }),

/***/ "./src/app/listing/listing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/listing/listing.component.ts ***!
  \**********************************************/
/*! exports provided: ListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingComponent", function() { return ListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listing.service */ "./src/app/listing/listing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wishlist_wishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wishlist/wishlist.service */ "./src/app/wishlist/wishlist.service.ts");
/* harmony import */ var _Models_WishListSend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Models/WishListSend */ "./src/app/Models/WishListSend.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListingComponent = /** @class */ (function () {
    function ListingComponent(myListingSerivce, myWishlistService, myUserService, router, route) {
        this.myListingSerivce = myListingSerivce;
        this.myWishlistService = myWishlistService;
        this.myUserService = myUserService;
        this.router = router;
        this.route = route;
        this.listings = [];
        this.maxPrice = 10000;
        this.minPrice = 0;
        this.checkboxes = [true, true, true, true];
        this.sortOrder = "Oldest First";
        this.maxRangeValue = 20000;
        this.minRange = 0;
        this.maxRange = 20000;
    }
    ListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changeActiveNavbar();
        this.checkForCurrentUser();
        var minPriceParam;
        var maxPriceParam;
        var StringConditionParam;
        this.router.queryParams.subscribe(function (params) {
            if (Object.keys(params).length == 0) {
                _this.getAllListings();
            }
            else {
                console.log("Filtering");
                if (params["minPrice"] != undefined || params["minPrice"] == null) {
                    minPriceParam = parseFloat(params["minPrice"]);
                }
                else {
                    minPriceParam = 0;
                }
                if (params["maxPrice"] != undefined || params["maxPrice"] == null) {
                    maxPriceParam = parseFloat(params["maxPrice"]);
                }
                else {
                    maxPriceParam = 2147483647;
                }
                if (params["bookCondition"] != undefined || params["bookCondition"] != null) {
                    StringConditionParam = params["bookCondition"];
                }
                else {
                    StringConditionParam = "0000";
                }
                _this.minRange = minPriceParam;
                _this.maxRange = maxPriceParam;
                _this.checkboxes = [];
                for (var _i = 0, StringConditionParam_1 = StringConditionParam; _i < StringConditionParam_1.length; _i++) {
                    var item = StringConditionParam_1[_i];
                    _this.checkboxes.push(Boolean(+item));
                }
                _this.myListingSerivce.getFilterResults(_this.minPrice, _this.maxPrice, StringConditionParam).toPromise()
                    .then(function (data) {
                    _this.listings = data;
                    if (_this.listings.length != 0)
                        _this.maxRangeValue = Math.max.apply(Math, _this.listings.map(function (item) { return item.price; }));
                });
            }
        });
    };
    ListingComponent.prototype.calculateMaxValue = function () {
        if (this.listings.length == 0) {
            return;
        }
        console.log(this.listings);
        var max = Math.max.apply(Math, this.listings.map(function (item) { return item.price; }));
        this.maxRangeValue = max;
        this.maxRange = max;
        console.log(max);
    };
    ListingComponent.prototype.getAllListings = function () {
        var _this = this;
        this.myListingSerivce.getAllListings().toPromise()
            .then(function (data) {
            _this.listings = data;
            _this.calculateMaxValue();
        });
    };
    ListingComponent.prototype.redirectList = function (id) {
        this.route.navigate([id], { relativeTo: this.router });
    };
    ListingComponent.prototype.addToWishList = function (idx) {
        var _this = this;
        if (this.localUserDetails != undefined && this.localUserDetails != null) {
            var newWishListItem = new _Models_WishListSend__WEBPACK_IMPORTED_MODULE_4__["WishListSend"]();
            newWishListItem.bookName = this.listings[idx].bookName;
            newWishListItem.authorName = this.listings[idx].authorName;
            newWishListItem.bookCondition = this.listings[idx].bookCondition;
            newWishListItem.bookID = this.listings[idx].id;
            newWishListItem.bookPic = this.listings[idx].image;
            newWishListItem.price = this.listings[idx].price;
            newWishListItem.userID = this.localUserDetails.id;
            this.myWishlistService.addWishListItems(newWishListItem).toPromise()
                .then(function (data) {
                _this.showToast();
            })
                .catch(function (error) { return console.log(error); });
        }
        else {
            this.route.navigate(['login']);
        }
    };
    ListingComponent.prototype.checkCondiiton = function (item) {
        if (item.bookCondition == "New") {
            return 0;
        }
        else if (item.bookCondition == "Almost New") {
            return 1;
        }
        else if (item.bookCondition == "Slight Damage") {
            return 2;
        }
        else
            return 3;
    };
    ListingComponent.prototype.checkForCurrentUser = function () {
        var _this = this;
        var navbar = document.getElementById("mainNavbar");
        navbar.hidden = false;
        if (localStorage.getItem("currentUser") === null) {
            console.log("error not logged in");
            this.changeUserName(0);
            return false;
        }
        else {
            console.log("getting user");
            this.localUserDetails = JSON.parse(localStorage.getItem("currentUser"));
            this.changeUserName(1);
            this.myUserService.getUserInfo(this.localUserDetails.id).toPromise()
                .then(function (data) {
                _this.currentUser = data;
            })
                .catch(function (error) { console.log(error); _this.route.navigate(['logout']); });
            return true;
        }
    };
    ListingComponent.prototype.changeActiveNavbar = function () {
        document.getElementById("listingsNavbar").classList.add("active");
        document.getElementById("sellNavbar").classList.remove("active");
        document.getElementById("authNavbar").classList.remove("active");
        document.getElementById("messagesNavbar").classList.remove("active");
        document.getElementById("wishlistNavbar").classList.remove("active");
    };
    ListingComponent.prototype.changeUserName = function (type) {
        var username = document.getElementById("userNameNavbar");
        var btLogin = document.getElementById("loginNavbar");
        var btProfile = document.getElementById("profileNavbar");
        var btLogout = document.getElementById("logoutNavbar");
        var btSignupNavbar = document.getElementById("signupNavbar");
        if (type == 1) {
            username.innerText = this.localUserDetails.name;
            btLogin.hidden = true;
            btProfile.hidden = false;
            btLogout.hidden = false;
            btSignupNavbar.hidden = true;
        }
        else {
            username.innerText = "Sign In";
            btLogin.hidden = false;
            btProfile.hidden = true;
            btLogout.hidden = true;
            btSignupNavbar.hidden = false;
        }
    };
    ListingComponent.prototype.filterByPrice = function (minQuery, maxQuery) {
        var _this = this;
        if (minQuery == "" && maxQuery == "") {
            console.log("Please input a range");
            return;
        }
        else {
            if (minQuery == "" || minQuery == undefined) {
                minQuery = 0;
            }
            if (maxQuery == "" || maxQuery == undefined) {
                maxQuery = 2147483647;
            }
            this.minPrice = parseFloat(minQuery);
            this.maxPrice = parseFloat(maxQuery);
            if (this.maxPrice < 0 || this.minPrice < 0 || this.maxPrice < this.minPrice) {
                this.showToastDanger("Invalid Range");
                return;
            }
            this.myListingSerivce.getFilterByPrice(this.minPrice, this.maxPrice).toPromise()
                .then(function (data) { return _this.listings = data; })
                .catch(function (error) { return console.log(error); });
        }
    };
    ListingComponent.prototype.filterByCondition = function () {
        var _this = this;
        var stringVal = "";
        this.checkboxes.map(function (item) { return stringVal += "" + +item; });
        this.myListingSerivce.filterByCondtion(stringVal).toPromise()
            .then(function (data) { return _this.listings = data; });
    };
    ListingComponent.prototype.filterByBookName = function () {
        var _this = this;
        if (this.bookNameText == undefined) {
            this.showToastDanger("Please write a book name");
        }
        else {
            this.clearFilters();
            this.myListingSerivce.getItemsByBookName(this.bookNameText).toPromise()
                .then(function (data) { return _this.listings = data; })
                .catch(function (error) { return console.log(error); });
        }
    };
    ListingComponent.prototype.filterByAuthorName = function () {
        var _this = this;
        if (this.authorNameText == undefined) {
            this.showToastDanger("Please write an author name");
        }
        else {
            this.clearFilters();
            this.myListingSerivce.getItemsByAuthorName(this.authorNameText).toPromise()
                .then(function (data) { return _this.listings = data; })
                .catch(function (error) { return console.log(error); });
        }
    };
    ListingComponent.prototype.showToast = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
    };
    ListingComponent.prototype.showToastDanger = function (message) {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar2");
        // Add the "show" class to DIV
        x.innerText = message;
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
    };
    ListingComponent.prototype.showToastInfo = function (message) {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar2");
        // Add the "show" class to DIV
        x.innerText = message;
        x.className = "show";
        x.style.backgroundColor = "#00A3b9";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
    };
    ListingComponent.prototype.filterByBoth = function (minQuery, maxQuery) {
        {
            if (minQuery == "" || minQuery == undefined) {
                minQuery = 0;
            }
            if (maxQuery == "" || maxQuery == undefined) {
                maxQuery = 2147483647;
            }
            this.minPrice = this.minRange;
            this.maxPrice = this.maxRange;
            if (this.maxPrice < 0 || this.minPrice < 0 || this.maxPrice < this.minPrice) {
                this.showToastDanger("Invalid Range");
                return;
            }
            console.log(this.checkboxes);
            var bookConditionString_1 = "";
            this.checkboxes.map(function (item) { return bookConditionString_1 += "" + +item; });
            console.log(bookConditionString_1);
            this.route.navigate(['listings'], {
                queryParams: {
                    minPrice: this.minPrice,
                    maxPrice: this.maxPrice,
                    bookCondition: bookConditionString_1
                }
            });
        }
    };
    ListingComponent.prototype.clearFilters = function () {
        this.minRange = 0;
        this.maxRange = this.maxRangeValue;
        this.checkboxes = [true, true, true, true];
        this.route.navigate(['listings']);
    };
    ListingComponent.prototype.clearBookName = function (minField, maxField) {
        this.bookNameText = "";
        this.filterByBookName();
        this.clearFilters();
    };
    ListingComponent.prototype.clearAuthorName = function (minField, maxField) {
        this.authorNameText = '';
        this.filterByAuthorName();
        this.clearFilters();
    };
    ListingComponent.prototype.getAllListingsNow = function () {
        var _this = this;
        this.myListingSerivce.getAllListings().toPromise()
            .then(function (items) { return _this.listings = items; })
            .catch(function (error) { return console.log(error); });
    };
    ListingComponent.prototype.applySort = function () {
        var _this = this;
        console.log("Sorting");
        console.log(this.sortOrder);
        if (this.sortOrder == "Oldest First") {
            this.myListingSerivce.getAllListings().toPromise()
                .then(function (items) { return _this.listings = items; })
                .catch(function (error) { return console.log(error); });
        }
        else if (this.sortOrder == "Newest First") {
            this.myListingSerivce.getAllListings().toPromise()
                .then(function (items) { return _this.listings = items.reverse(); })
                .catch(function (error) { return console.log(error); });
        }
        else if (this.sortOrder == "Price low to high") {
            this.myListingSerivce.getAllListings().toPromise()
                .then(function (items) { return _this.listings = items.sort(function (a, b) {
                return a.price - b.price;
            }); })
                .catch(function (error) { return console.log(error); });
        }
        else if (this.sortOrder == "Price high to low") {
            this.myListingSerivce.getAllListings().toPromise()
                .then(function (items) { return _this.listings = items.sort(function (a, b) {
                return b.price - a.price;
            }); })
                .catch(function (error) { return console.log(error); });
        }
    };
    ListingComponent.prototype.sliderChange = function (event) {
        this.minRange = event.from;
        this.maxRange = event.to;
    };
    ListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listing',
            template: __webpack_require__(/*! ./listing.component.html */ "./src/app/listing/listing.component.html"),
            styles: [__webpack_require__(/*! ./listing.component.scss */ "./src/app/listing/listing.component.scss")]
        }),
        __metadata("design:paramtypes", [_listing_service__WEBPACK_IMPORTED_MODULE_1__["ListingService"],
            _wishlist_wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"],
            _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListingComponent);
    return ListingComponent;
}());



/***/ }),

/***/ "./src/app/listing/listing.service.ts":
/*!********************************************!*\
  !*** ./src/app/listing/listing.service.ts ***!
  \********************************************/
/*! exports provided: ListingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingService", function() { return ListingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListingService = /** @class */ (function () {
    function ListingService(http) {
        this.http = http;
    }
    ListingService.prototype.getUserListings = function (userID) {
        console.log("Hello");
        return this.http.post('/api/listings', {
            userID: userID
        });
    };
    ListingService.prototype.getAllListings = function () {
        return this.http.get('/api/listings/');
    };
    ListingService.prototype.getSingleLisitng = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('id', "" + id);
        return this.http.get('/api/listings', { params: params });
    };
    ListingService.prototype.getFilterByPrice = function (minPrice, maxPrice) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('minPrice', String(minPrice));
        params = params.append('maxPrice', String(maxPrice));
        return this.http.get('/api/listings/price', { params: params });
    };
    ListingService.prototype.filterByCondtion = function (stringVal) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append("stringVal", stringVal);
        return this.http.get('/api/listings/condition', { params: params });
    };
    ListingService.prototype.getFilterResults = function (minPrice, maxPrice, bestCondition) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('minPrice', String(minPrice));
        params = params.append('maxPrice', String(maxPrice));
        params = params.append('bookCondition', String(bestCondition));
        return this.http.get('/api/listings/filter', { params: params });
    };
    ListingService.prototype.getItemsByBookName = function (bookName) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('bookName', bookName);
        return this.http.get('/api/listings/queryName', { params: params });
    };
    ListingService.prototype.getItemsByAuthorName = function (authorName) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('authorName', authorName);
        return this.http.get('/api/listings/queryAuthor', { params: params });
    };
    ListingService.prototype.addItemsToListings = function (newItem) {
        return this.http.post('/api/listings/add', newItem);
    };
    ListingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListingService);
    return ListingService;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='wrap'>\n  Login\n  <form>\n    <input type='email' id='username' placeholder='Email' [(ngModel)]=\"emailText\"  [ngModelOptions]=\"{standalone: true}\">\n    <input type='password' id='password' placeholder='Password' [(ngModel)]=\"passwordText\"  [ngModelOptions]=\"{standalone: true}\">\n  </form>\n  <button (click)=\"loginUser()\"\n    type=\"button\" class=\"btn btn-primary waves-light\" style=\"border-radius: 100px\"  mdbWavesEffect>Log in</button>\n  <br>\n  <!--<label style=\"font-size: 30px\">Not a User ?</label>-->\n  <p class=\"font-small grey-text d-flex justify-content-center mt-3\">Don't have an account?\n    &nbsp;&nbsp;&nbsp;\n    <a routerLink=\"/signup\" class=\"dark-grey-text font-weight-bold \"> Sign up</a>\n</div>\n\n\n<div id=\"snackbar\">Added To Your Wishlist</div>\n<div id=\"snackbar2\">Invalid Range</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Karla);\n@import url(https://fonts.googleapis.com/css?family=Ubuntu:300);\n.wrap {\n  padding: 120px 0;\n  font-size: 62px;\n  color: #888;\n  width: 400px;\n  font-family: 'Karla';\n  margin: 0 auto;\n  text-align: center; }\ninput {\n  font-family: 'Ubuntu';\n  font-weight: 300;\n  border: 0;\n  border-bottom: 1px solid #ff5407;\n  width: 100%;\n  height: 36px;\n  font-size: 26px; }\ninput:focus {\n  outline: none;\n  box-shadow: none;\n  background: #ffeae2; }\n.buttonafter:after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 8px;\n  left: 100%;\n  /*should be set to 100% */\n  width: 0;\n  height: 0;\n  border-color: transparent transparent transparent #14a03d;\n  /*border color should be same as div div background color*/\n  border-style: solid;\n  border-width: 5px; }\n.forgot {\n  background: #a0a0a0;\n  color: #fff;\n  float: left; }\n.login {\n  background: #a0a0a0;\n  color: #fff;\n  float: right; }\n#snackbar {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #00b550;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n#snackbar2 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #d50020;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.\n  However, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n#snackbar2.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.\n  However, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _Models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/User */ "./src/app/Models/User.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(MyUserService, route) {
        this.MyUserService = MyUserService;
        this.route = route;
        this.currentUser = new _Models_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.changeActiveNavbar();
        if (this.checkForCurrentUser()) {
            this.route.navigate(['profile']);
        }
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        if (this.emailText == "" || this.emailText == undefined) {
            this.showToastDanger("All Fields are necessary");
            return;
        }
        if (this.passwordText == "" || this.passwordText == undefined) {
            this.showToastDanger("All Fields are necessary");
            return;
        }
        this.MyUserService.authenticateUser(this.emailText, this.passwordText)
            .toPromise().then(function (data) {
            console.log(data);
            console.log("Welcome : " + data[0].name);
            localStorage["currentUser"] = JSON.stringify({
                name: data[0].name,
                id: data[0].id
            });
            _this.route.navigate(['listings']);
        })
            .catch(function (error) {
            console.log(error.error);
            _this.showToastDanger("Invalid Email or Password");
        });
    };
    LoginComponent.prototype.changeActiveNavbar = function () {
        document.getElementById("listingsNavbar").classList.remove("active");
        document.getElementById("sellNavbar").classList.remove("active");
        document.getElementById("authNavbar").classList.add("active");
        document.getElementById("messagesNavbar").classList.remove("active");
        document.getElementById("wishlistNavbar").classList.remove("active");
    };
    LoginComponent.prototype.showToast = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    LoginComponent.prototype.showToastDanger = function (message) {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar2");
        // Add the "show" class to DIV
        x.innerText = message;
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    LoginComponent.prototype.checkForCurrentUser = function () {
        var _this = this;
        var navbar = document.getElementById("mainNavbar");
        navbar.hidden = false;
        if (localStorage.getItem("currentUser") === null) {
            console.log("error not logged in");
            this.changeUserName(0);
            return false;
        }
        else {
            console.log("getting user");
            this.localUserDetails = JSON.parse(localStorage.getItem("currentUser"));
            this.changeUserName(1);
            this.MyUserService.getUserInfo(this.localUserDetails.id).toPromise()
                .then(function (data) { _this.currentUser = data; })
                .catch(function (error) { return console.log(error); });
            return true;
        }
    };
    LoginComponent.prototype.changeUserName = function (type) {
        var username = document.getElementById("userNameNavbar");
        var btLogin = document.getElementById("loginNavbar");
        var btProfile = document.getElementById("profileNavbar");
        var btLogout = document.getElementById("logoutNavbar");
        var btSignupNavbar = document.getElementById("signupNavbar");
        if (type == 1) {
            username.innerText = this.localUserDetails.name;
            btLogin.hidden = true;
            btProfile.hidden = false;
            btLogout.hidden = false;
            btSignupNavbar.hidden = true;
        }
        else {
            username.innerText = "Sign In";
            btLogin.hidden = false;
            btProfile.hidden = true;
            btLogout.hidden = true;
            btSignupNavbar.hidden = false;
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var navbar = document.getElementById("mainNavbar");
        navbar.hidden = false;
        localStorage.removeItem("currentUser");
        document.getElementById("homeNavbar").click();
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.scss */ "./src/app/logout/logout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='wrap'>\n  Messages\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div  *ngFor=\"let message of allMessages\">\n      <div class=\"card bg-light text-dark\">\n        <div class=\"card-header\">\n          <a routerLink=\"/listings/{{message.bookID}}\"\n            style=\"color: crimson;background-color: transparent;text-decoration: none;transition: all .2s\">\n            {{message.bookName}}</a>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col\">\n                <b>{{message.title}}</b>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col\">\n              {{message.comment}}\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <img class=\"img-circle\" src=\"{{message.senderPic}}\"\n               height=\"40px\" width=\"40px\">\n          <label style=\"padding: 10px\"><b>{{message.senderName}}</b></label>\n          <br>\n          <label style=\"padding-left: 50px\">{{message.createdAt}}</label>\n        </div>\n      </div>\n        <br>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/message/message.component.scss":
/*!************************************************!*\
  !*** ./src/app/message/message.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Karla);\n@import url(https://fonts.googleapis.com/css?family=Ubuntu:300);\n.wrap {\n  padding: 80px 0 0 0;\n  font-size: 62px;\n  color: #888;\n  width: 400px;\n  font-family: 'Karla';\n  margin: 0 auto;\n  text-align: center; }\n.img-circle {\n  border-radius: 50%; }\ninput {\n  font-family: 'Ubuntu';\n  font-weight: 300;\n  border: 0;\n  border-bottom: 1px solid #ff5407;\n  width: 100%;\n  height: 36px;\n  font-size: 26px; }\ninput:focus {\n  outline: none;\n  box-shadow: none;\n  background: #ffeae2; }\n.buttonafter:after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 8px;\n  left: 100%;\n  /*should be set to 100% */\n  width: 0;\n  height: 0;\n  border-color: transparent transparent transparent #14a03d;\n  /*border color should be same as div div background color*/\n  border-style: solid;\n  border-width: 5px; }\n.forgot {\n  background: #a0a0a0;\n  color: #fff;\n  float: left; }\n.login {\n  background: #a0a0a0;\n  color: #fff;\n  float: right; }\n"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.service */ "./src/app/message/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageComponent = /** @class */ (function () {
    function MessageComponent(myMessageService, myUserService, router, route) {
        this.myMessageService = myMessageService;
        this.myUserService = myUserService;
        this.router = router;
        this.route = route;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changeActiveNavbar();
        if (this.checkForCurrentUser()) {
            this.myMessageService.getMessages(this.localUserDetails.id).toPromise().then(function (data) {
                _this.allMessages = data;
                _this.allMessages.map(function (items) {
                    var abc = new Date(items.createdAt);
                    abc.toDateString();
                    items.createdAt = abc.toDateString();
                });
            }).catch(function (error) { return console.log(error); });
        }
    };
    MessageComponent.prototype.checkForCurrentUser = function () {
        var _this = this;
        var navbar = document.getElementById("mainNavbar");
        navbar.hidden = false;
        if (localStorage.getItem("currentUser") === null) {
            console.log("error not logged in");
            this.route.navigate(['login']);
            this.changeUserName(0);
            return false;
        }
        else {
            console.log("getting user");
            this.localUserDetails = JSON.parse(localStorage.getItem("currentUser"));
            this.changeUserName(1);
            this.myUserService.getUserInfo(this.localUserDetails.id).toPromise()
                .then(function (data) { _this.currentUser = data; })
                .catch(function (error) { console.log(error); _this.route.navigate(['logout']); });
            return true;
        }
    };
    MessageComponent.prototype.changeUserName = function (type) {
        var username = document.getElementById("userNameNavbar");
        var btLogin = document.getElementById("loginNavbar");
        var btProfile = document.getElementById("profileNavbar");
        var btLogout = document.getElementById("logoutNavbar");
        var btSignupNavbar = document.getElementById("signupNavbar");
        if (type == 1) {
            username.innerText = this.localUserDetails.name;
            btLogin.hidden = true;
            btProfile.hidden = false;
            btLogout.hidden = false;
            btSignupNavbar.hidden = true;
        }
        else {
            username.innerText = "Sign In";
            btLogin.hidden = false;
            btProfile.hidden = true;
            btLogout.hidden = true;
            btSignupNavbar.hidden = false;
        }
    };
    MessageComponent.prototype.changeActiveNavbar = function () {
        document.getElementById("listingsNavbar").classList.remove("active");
        document.getElementById("sellNavbar").classList.remove("active");
        document.getElementById("authNavbar").classList.remove("active");
        document.getElementById("messagesNavbar").classList.add("active");
        document.getElementById("wishlistNavbar").classList.remove("active");
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.scss */ "./src/app/message/message.component.scss")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/message/message.service.ts":
/*!********************************************!*\
  !*** ./src/app/message/message.service.ts ***!
  \********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.getMessages = function (userID) {
        return this.http.post('/api/messages', {
            recipientID: userID
        });
    };
    MessageService.prototype.addNewMessage = function (newMessage) {
        return this.http.post('/api/messages/add', newMessage);
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/page404/page404.component.html":
/*!************************************************!*\
  !*** ./src/app/page404/page404.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\"><div id=\"container\">\n  <h1>404</h1>\n  <h2>Item Not Found</h2>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/page404/page404.component.scss":
/*!************************************************!*\
  !*** ./src/app/page404/page404.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Open Sans Bold\"), local(\"OpenSans-Bold\"), url(https://fonts.gstatic.com/s/opensans/v10/k3k702ZOKiLJc3WVjuplzOgdm0LZdjqr5-oayXSOefg.woff2) format(\"woff2\"); }\n\nabbr {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\naddress {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\narticle {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\naside {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\naudio {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nb {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nblockquote {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\ndiv.body {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0;\n  line-height: 1; }\n\ncanvas {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\ncaption {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\ncite {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\ncode {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\ndd {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\ndel {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\ndetails {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\ndfn {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\ndiv {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\ndl {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\ndt {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nem {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nfieldset {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nfigcaption {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nfigure {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nfooter {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nform {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nh1 {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0;\n  font-size: 16rem; }\n\nh2 {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0;\n  font-size: 6rem;\n  color: #f48f8f; }\n\nh3 {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nh4 {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nh5 {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nh6 {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nheader {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nhgroup {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\ndiv.body {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0;\n  background-color: #f06060;\n  color: #fff;\n  font-size: 16px;\n  font-family: \"Open Sans\", sans-serif; }\n\ni {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\niframe {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nimg {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nins {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nkbd {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nlabel {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nlegend {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nli {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nmark {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nmenu {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nnav {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nobject {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nol {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\np {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\npre {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nq {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nsamp {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nsection {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nsmall {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nspan {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nstrong {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nsub {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nsummary {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nsup {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\ntable {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\ntbody {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\ntd {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\ntfoot {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nth {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nthead {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\ntime {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\ntr {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nul {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nvar {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: 0 0; }\n\n* {\n  box-sizing: border-box; }\n\n#container {\n  width: calc(100% - 100px);\n  max-width: 700px;\n  min-width: 300px;\n  margin: 0 auto;\n  padding: 50px; }\n\n@media screen and (max-width: 600px) {\n  div.body {\n    font-size: 10px; } }\n"

/***/ }),

/***/ "./src/app/page404/page404.component.ts":
/*!**********************************************!*\
  !*** ./src/app/page404/page404.component.ts ***!
  \**********************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page404Component = /** @class */ (function () {
    function Page404Component(myUserService) {
        this.myUserService = myUserService;
    }
    Page404Component.prototype.ngOnInit = function () {
        this.checkForCurrentUser();
    };
    Page404Component.prototype.checkForCurrentUser = function () {
        var _this = this;
        var navbar = document.getElementById("mainNavbar");
        navbar.hidden = false;
        if (localStorage.getItem("currentUser") === null) {
            console.log("error not logged in");
            this.changeUserName(0);
            return false;
        }
        else {
            console.log("getting user");
            this.localUserDetails = JSON.parse(localStorage.getItem("currentUser"));
            this.changeUserName(1);
            this.myUserService.getUserInfo(this.localUserDetails.id).toPromise()
                .then(function (data) {
                _this.currentUser = data;
            })
                .catch(function (error) { console.log(error); });
            return true;
        }
    };
    Page404Component.prototype.changeUserName = function (type) {
        var username = document.getElementById("userNameNavbar");
        var btLogin = document.getElementById("loginNavbar");
        var btProfile = document.getElementById("profileNavbar");
        var btLogout = document.getElementById("logoutNavbar");
        var btSignupNavbar = document.getElementById("signupNavbar");
        if (type == 1) {
            username.innerText = this.localUserDetails.name;
            btLogin.hidden = true;
            btProfile.hidden = false;
            btLogout.hidden = false;
            btSignupNavbar.hidden = true;
        }
        else {
            username.innerText = "Sign In";
            btLogin.hidden = false;
            btProfile.hidden = true;
            btLogout.hidden = true;
            btSignupNavbar.hidden = false;
        }
    };
    Page404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page404',
            template: __webpack_require__(/*! ./page404.component.html */ "./src/app/page404/page404.component.html"),
            styles: [__webpack_require__(/*! ./page404.component.scss */ "./src/app/page404/page404.component.scss")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row pl-0\">\n    <div class=\"col-2 mt-5 pt-5 wrap\" style=\"margin-left: -100px;border: 20px #ff5407;\">\n      <ul style=\"font-size: 20px;list-style-type: none;margin-left: 0;padding-left: 40px\" >\n        <li mdbWavesEffect=\"\" style=\"padding-left: 0px\" (click)=\"redirectToProfileListings()\"> <a>Your Listings</a>\n        <hr style=\"margin-left: 0\"></li>\n        <li mdbWavesEffect=\"\"> <a (click)=\"redirectToMessages()\">Your Messages</a>\n          <hr style=\"margin-left: 0\"></li>\n        <li mdbWavesEffect=\"\"> <a (click)=\"redirectToWishList()\">Your WishList</a>\n          <hr style=\"margin-left: 0\"></li>\n\n        <li mdbWavesEffect=\"\"> <a (click)=\"redirectToSell()\">Sell a Book</a>\n          <hr style=\"margin-left: 0\"></li>\n      </ul>\n    </div>\n    <div class=\"col\">\n      <div class='wrap'>\n        <img class=\"img-circle\" style=\"cursor: pointer;background-color: darkgrey;text-align: center\" alt=\"DP\"\n             [src]=\"currentUser.picture\"\n             height=\"200px\" width=\"200px\">\n        <form>\n          <label style=\"text-align: center;font-size: 50px\">{{currentUser.name}}</label><br>\n          <label class=\"justify-content-start\" style=\"font-size: 25px\">\n            <i style=\"color: black\" class=\"fa fa-graduation-cap mr-4\"></i>{{currentUser.college}}</label><br>\n          <label class=\"justify-content-start\" style=\"font-size: 25px\">\n            <i style=\"color: black\" class=\"fa fa-map-marker mr-4\"></i>{{currentUser.address}}</label><br>\n          <label class=\"justify-content-start\" style=\"font-size:25px\">\n            <i style=\"color: black\" class=\"fa fa-phone mr-4\"></i>{{currentUser.phone}}</label><br>\n          <label class=\"justify-content-start\" style=\"font-size: 25px\">\n            <i style=\"color: black\" class=\"fa fa-envelope-open mr-4\"></i>{{currentUser.email}}</label>\n          <br><button class=\"btn btn-danger\" (click)=\"logoutUser()\">Logout</button>\n        </form>\n      </div>\n      <div id=\"snackbar\" >You have Signed Up Successfully</div>\n      <div id=\"snackbar2\" >Fail</div>\n\n    </div>\n  </div>\n</div>\n\n<!--https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif-->\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Karla);\n@import url(https://fonts.googleapis.com/css?family=Ubuntu:300);\n.wrap {\n  padding: 80px 0;\n  font-size: 62px;\n  color: #888;\n  width: 400px;\n  font-family: 'Karla';\n  margin: 0 auto; }\nlabel.smaller {\n  font-size: 40px; }\n.img-circle {\n  border-radius: 50%; }\ninput {\n  font-family: 'Ubuntu';\n  font-weight: 300;\n  border: 0;\n  border-bottom: 1px solid #ff5407;\n  width: 100%;\n  height: 36px;\n  font-size: 26px; }\ninput:focus {\n  outline: none;\n  box-shadow: none;\n  background: #ffeae2; }\n.buttonafter:after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 8px;\n  left: 100%;\n  /*should be set to 100% */\n  width: 0;\n  height: 0;\n  border-color: transparent transparent transparent #14a03d;\n  /*border color should be same as div div background color*/\n  border-style: solid;\n  border-width: 5px; }\n.forgot {\n  background: #a0a0a0;\n  color: #fff;\n  float: left; }\n.login {\n  background: #a0a0a0;\n  color: #fff;\n  float: right; }\n#snackbar {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #00b550;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n#snackbar2 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #d50020;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.\n  However, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n#snackbar2.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.\n  However, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, myUserService) {
        this.route = route;
        this.myUserService = myUserService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.changeActiveNavbar();
        if (!this.checkForCurrentUser()) {
            this.route.navigate(['login']);
        }
    };
    ProfileComponent.prototype.checkForCurrentUser = function () {
        var _this = this;
        var navbar = document.getElementById("mainNavbar");
        navbar.hidden = false;
        if (localStorage.getItem("currentUser") === null) {
            console.log("error not logged in");
            this.changeUserName(0);
            return false;
        }
        else {
            console.log("getting user");
            this.localUserDetails = JSON.parse(localStorage.getItem("currentUser"));
            this.changeUserName(1);
            this.myUserService.getUserInfo(this.localUserDetails.id).toPromise()
                .then(function (data) { _this.currentUser = data; })
                .catch(function (error) { console.log(error); _this.route.navigate(['logout']); });
            return true;
        }
    };
    ProfileComponent.prototype.changeUserName = function (type) {
        var username = document.getElementById("userNameNavbar");
        var btLogin = document.getElementById("loginNavbar");
        var btProfile = document.getElementById("profileNavbar");
        var btLogout = document.getElementById("logoutNavbar");
        var btSignupNavbar = document.getElementById("signupNavbar");
        if (type == 1) {
            username.innerText = this.localUserDetails.name;
            btLogin.hidden = true;
            btProfile.hidden = false;
            btLogout.hidden = false;
            btSignupNavbar.hidden = true;
        }
        else {
            username.innerText = "Sign In";
            btLogin.hidden = false;
            btProfile.hidden = true;
            btLogout.hidden = true;
            btSignupNavbar.hidden = false;
        }
    };
    ProfileComponent.prototype.changeActiveNavbar = function () {
        document.getElementById("listingsNavbar").classList.remove("active");
        document.getElementById("sellNavbar").classList.remove("active");
        document.getElementById("authNavbar").classList.add("active");
        document.getElementById("messagesNavbar").classList.remove("active");
        document.getElementById("wishlistNavbar").classList.remove("active");
    };
    ProfileComponent.prototype.redirectToWishList = function () {
        this.route.navigate(['wishlist']);
    };
    ProfileComponent.prototype.redirectToSell = function () {
        this.route.navigate(['listings', 'add']);
    };
    ProfileComponent.prototype.redirectToMessages = function () {
        this.route.navigate(['messages']);
    };
    ProfileComponent.prototype.logoutUser = function () {
        this.route.navigate(['logout']);
    };
    ProfileComponent.prototype.redirectToProfileListings = function () {
        this.route.navigate(['profile', 'listings']);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='wrap'>\n  <img class=\"img-circle\" (click)=\"uploadEvent($event)\" style=\"cursor: pointer;background-color: darkgrey\" alt=\"Change DP\"\n       [src]=\"newUser.picture\" height=\"200px\" width=\"200px\">\n  <input type=\"file\" accept=\".jpg,.png,.jpeg\" hidden #fileUploadButton id=\"fileUploadBut\" (change)=\"fileUploader($event)\">\n  <form  [ngModelOptions]=\"{standalone: true}\">\n    <input type='text' name='name' placeholder='Name' [(ngModel)]=\"newUser.name\" required>\n    <input type='text' name='college' placeholder='College' [(ngModel)]=\"newUser.college\" required>\n    <input type='text' name='address' placeholder='Address' [(ngModel)]=\"newUser.address\" required>\n    <input type=\"text\" name=\"phone\" placeholder=\"Phone\" [(ngModel)]=\"newUser.phone\" required>\n    <input type='email' name='email' placeholder='Email' [(ngModel)]=\"newUser.email\" required>\n    <input type='password' name='password' placeholder='Password' [(ngModel)]=\"newUser.password\" required>\n\n    <button type=\"button\" (click)=\"signUpUser()\" class=\"btn btn-primary waves-light\" style=\"border-radius: 100px\"  mdbWavesEffect>Sign Up</button>\n  </form>\n</div>\n<div id=\"snackbar\" >You have Signed Up Successfully</div>\n<div id=\"snackbar2\" >Fail</div>\n\n<!--https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif-->\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Karla);\n@import url(https://fonts.googleapis.com/css?family=Ubuntu:300);\n.wrap {\n  padding: 80px 0;\n  font-size: 62px;\n  color: #888;\n  width: 400px;\n  font-family: 'Karla';\n  margin: 0 auto;\n  text-align: center; }\n.img-circle {\n  border-radius: 50%; }\ninput {\n  font-family: 'Ubuntu';\n  font-weight: 300;\n  border: 0;\n  border-bottom: 1px solid #ff5407;\n  width: 100%;\n  height: 36px;\n  font-size: 26px; }\ninput:focus {\n  outline: none;\n  box-shadow: none;\n  background: #ffeae2; }\n.buttonafter:after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 8px;\n  left: 100%;\n  /*should be set to 100% */\n  width: 0;\n  height: 0;\n  border-color: transparent transparent transparent #14a03d;\n  /*border color should be same as div div background color*/\n  border-style: solid;\n  border-width: 5px; }\n.forgot {\n  background: #a0a0a0;\n  color: #fff;\n  float: left; }\n.login {\n  background: #a0a0a0;\n  color: #fff;\n  float: right; }\n#snackbar {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #00b550;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n#snackbar2 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #d50020;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.\n  However, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n#snackbar2.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.\n  However, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/User */ "./src/app/Models/User.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = /** @class */ (function () {
    function SignupComponent(myUserService, route, storage) {
        this.myUserService = myUserService;
        this.route = route;
        this.storage = storage;
        this.newUser = new _Models_User__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.uploadFile = null;
        this.currentUser = new _Models_User__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.changeActiveNavbar();
        this.checkForCurrentUser();
        this.newUser.picture = "http://getdrawings.com/img/cool-facebook-profile-picture-silhouette-10.jpg";
    };
    SignupComponent.prototype.signUpUser = function () {
        var _this = this;
        console.log(this.newUser);
        if (this.newUser.picture == "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif") {
            this.showToastDanger("Please let image upload first");
            return;
        }
        for (var property in this.newUser) {
            console.log(property, this.newUser[property]);
            if (this.newUser[property] == undefined || this.newUser[property] == "" || this.newUser[property] == null) {
                this.showToastDanger("All field are necessary");
                return;
            }
        }
        if (!this.newUser.phone.match(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/)) {
            this.showToastDanger("Please enter a valid Indian phone number");
            return;
        }
        if (!this.newUser.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
            this.showToastDanger("Email id not valid");
            return;
        }
        if (this.newUser.password.length < 6) {
            this.showToastDanger("Password should not be less than 6");
            return;
        }
        this.myUserService.signUpUser(this.newUser).toPromise().then(function (data) {
            localStorage.setItem("currentUser", JSON.stringify({
                id: data.id,
                name: data.name
            }));
            _this.showToastSuccess();
            _this.route.navigate(['listings']);
        }).catch(function (error) {
            console.log(error);
            _this.showToastDanger("Email already exists\n Please Login using it.");
        });
    };
    SignupComponent.prototype.selectFile = function (event) {
        if (event.target.files[0] != undefined || event.target.files[0] != null) {
            this.uploadFile = event.target.files[0];
        }
    };
    SignupComponent.prototype.uploadToServer = function () {
        var _this = this;
        if (this.uploadFile == null || this.uploadFile == undefined) {
            this.showToastDanger("Please select a file first");
            return;
        }
        this.newUser.picture = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";
        console.log(this.uploadFile);
        var filePath = 'profileImage/dp-' + new Date().getTime();
        var fileRef = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, this.uploadFile);
        this.uploadPercent = task.percentageChanges();
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.downloadURL = fileRef.getDownloadURL();
            _this.downloadURL.subscribe(function (data) {
                console.log(data);
                _this.newUser.picture = data;
            });
        }))
            .subscribe(function (data) { return console.log(data); });
    };
    SignupComponent.prototype.uploadEvent = function (event) {
        var button = document.getElementById("fileUploadBut");
        console.log(button);
        button.click();
    };
    SignupComponent.prototype.fileUploader = function (event) {
        if (event.target.files[0] != undefined || event.target.files[0] != null) {
            var file = event.target.files[0];
            this.uploadFile = file;
            this.uploadToServer();
        }
        else
            return;
    };
    SignupComponent.prototype.checkForCurrentUser = function () {
        var _this = this;
        var navbar = document.getElementById("mainNavbar");
        navbar.hidden = false;
        if (localStorage.getItem("currentUser") === null) {
            console.log("error not logged in");
            this.changeUserName(0);
            return false;
        }
        else {
            console.log("getting user");
            this.localUserDetails = JSON.parse(localStorage.getItem("currentUser"));
            this.changeUserName(1);
            this.myUserService.getUserInfo(this.localUserDetails.id).toPromise()
                .then(function (data) { _this.currentUser = data; })
                .catch(function (error) { console.log(error); _this.route.navigate(['logout']); });
            return true;
        }
    };
    SignupComponent.prototype.changeUserName = function (type) {
        var username = document.getElementById("userNameNavbar");
        var btLogin = document.getElementById("loginNavbar");
        var btProfile = document.getElementById("profileNavbar");
        var btLogout = document.getElementById("logoutNavbar");
        var btSignupNavbar = document.getElementById("signupNavbar");
        if (type == 1) {
            username.innerText = this.localUserDetails.name;
            btLogin.hidden = true;
            btProfile.hidden = false;
            btLogout.hidden = false;
            btSignupNavbar.hidden = true;
        }
        else {
            username.innerText = "Sign In";
            btLogin.hidden = false;
            btProfile.hidden = true;
            btLogout.hidden = true;
            btSignupNavbar.hidden = false;
        }
    };
    SignupComponent.prototype.changeActiveNavbar = function () {
        document.getElementById("listingsNavbar").classList.remove("active");
        document.getElementById("sellNavbar").classList.remove("active");
        document.getElementById("authNavbar").classList.add("active");
        document.getElementById("messagesNavbar").classList.remove("active");
        document.getElementById("wishlistNavbar").classList.remove("active");
    };
    SignupComponent.prototype.showToastSuccess = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
    };
    SignupComponent.prototype.showToastDanger = function (message) {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar2");
        x.innerText = message;
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/single-list/single-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/single-list/single-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pl-5\">\n  <div class=\"row mt-5 pt-5\">\n    <div class=\"col-6\">\n      <img src=\"{{itemToDisplay.image}}\" imageZoom=\"{{itemToDisplay.image}}\"\n           style=\"max-width: 50%;max-height: 100%\">\n    </div>\n    <div class=\"col-6\">\n      <div class=\"container\" style=\"margin-left: -20%;padding-right: 0\">\n        <div class=\"row\">\n          <div class=\"col-md\">\n            <h2>{{itemToDisplay.bookName}}</h2>\n          </div>\n          <div class=\"col-md-4\"></div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <h5>By {{itemToDisplay.authorName}}</h5>\n          </div>\n        </div>\n\n        <!--<div class=\"row mt-2\">-->\n          <!--<div class=\"col\">-->\n            <!--<h5>Edition : 3rd Reprint</h5>-->\n          <!--</div>-->\n        <!--</div>-->\n        <br>\n        <div class=\"row mt-2\">\n          <div class=\"col\">\n            <h2><span class=\"badge badge-success\" [hidden]=\"checkCondiiton() !==0\">New</span></h2>\n            <h2><span class=\"badge badge-info\" [hidden]=\"checkCondiiton() !==1\">Almost New</span></h2>\n            <h2><span class=\"badge badge-warning\" [hidden]=\"checkCondiiton() !==2\">Slight Damage</span></h2>\n            <h2><span class=\"badge badge-danger\" [hidden]=\"checkCondiiton() !==3\">Worn</span></h2>\n          </div>\n        </div>\n        <div class=\"row mt-4\">\n          <div class=\"col\">\n            <h3 style=\"color: red;\"><b>₹{{itemToDisplay.price}}</b></h3>\n          </div>\n        </div>\n        <div class=\"row mt-2\">\n          <div class=\"col-10\">\n            <div class=\"card\">\n              <div class=\"card-header btn-success\">\n                Seller\n              </div>\n              <div class=\"card-body\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <img class=\"img-circle\" src=\"{{sellingUser.picture}}\"\n                           height=\"70px\" width=\"70px\">\n                    </div>\n                    <div class=\"col\" style=\"margin-left: -40%\">\n                      <div style=\"margin-left: -5%\">\n                        <h6>{{sellingUser.name}}</h6>\n                      </div>\n                      <div class=\"row\">\n                        <h7><i class=\"fa fa-phone fa-lg\" style=\"color: blue;margin-right: 0.5em\"></i>{{sellingUser.phone}}</h7>\n                      </div>\n                      <div class=\"row\">\n                        <h7><i class=\"fa fa-map-marker fa-lg\" style=\" color: red;margin-right: 0.5em\"></i>{{sellingUser.address}}</h7>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col\" style=\"padding-left: 25%\">\n                      <button id=\"contactButton\" [disabled]=\"disableContactButton\" type=\"button\" class=\"btn btn-primary waves-light\" (click)=\"form.show()\" mdbWavesEffect>\n                        <span class=\"fa fa-paper-plane\" style=\"margin-right: 1em\"></span>Contact</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"col\">\n    <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"addToWishList()\"\n            style=\"margin-top: -10%\">Add To Wishlist</button>\n  </div>\n</div>\n\n<!--Modal: Contact form-->\n<div mdbModal #form=\"mdb-modal\" class=\"modal fade\" id=\"modalContactForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog cascading-modal\" role=\"document\">\n    <!--Content-->\n    <div class=\"modal-content\">\n\n      <!--Header-->\n      <div class=\"modal-header light-blue darken-3 white-text\">\n        <h4 class=\"title\"><i class=\"fa fa-pencil\"></i> Message For {{sellingUser.name}}</h4>\n        <button id=\"closeButton\" type=\"button\" class=\"close waves-effect waves-light\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"form.hide()\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </div>\n      <!--Body-->\n      <div class=\"modal-body mb-0\">\n        <div class=\"md-form form-sm\">\n          <i class=\"fa fa-tag prefix\"></i>\n          <input mdbInputDirective type=\"text\" id=\"form21\" class=\"form-control\" [(ngModel)]=\"newMessage.title\">\n          <label for=\"form21\">Title</label>\n        </div>\n        <br>\n        <div class=\"md-form form-sm\">\n          <i class=\"fa fa-pencil prefix\"></i>\n          <textarea mdbInputDirective type=\"text\" id=\"form8\" class=\"md-textarea mb-0\" [(ngModel)]=\"newMessage.comment\"></textarea>\n          <label for=\"form8\">Your Message</label>\n        </div>\n\n        <div class=\"text-center mt-1-half\">\n          <button class=\"btn btn-info mb-2 waves-light\" mdbWavesEffect (click)=\"sendMessage()\">Send <i class=\"fa fa-send ml-1\"></i></button>\n        </div>\n\n      </div>\n    </div>\n    <!--/.Content-->\n  </div>\n</div>\n<!--Modal: Contact form-->\n<div id=\"snackbar\" >Added To Your Wishlist</div>\n<div id=\"snackbar2\" >Added To Your Wishlist</div>\n\n\n"

/***/ }),

/***/ "./src/app/single-list/single-list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/single-list/single-list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-circle {\n  border-radius: 50%; }\n\n#snackbar {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #00b550;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\n#snackbar2 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #00b550;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n\n#snackbar.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.\n  However, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n#snackbar2.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.\n  However, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n/* Animations to fade the snackbar in and out */\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"

/***/ }),

/***/ "./src/app/single-list/single-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/single-list/single-list.component.ts ***!
  \******************************************************/
/*! exports provided: SingleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleListComponent", function() { return SingleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _listing_listing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listing/listing.service */ "./src/app/listing/listing.service.ts");
/* harmony import */ var _Models_Listing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/Listing */ "./src/app/Models/Listing.ts");
/* harmony import */ var _wishlist_wishlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wishlist/wishlist.service */ "./src/app/wishlist/wishlist.service.ts");
/* harmony import */ var _message_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message/message.service */ "./src/app/message/message.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _Models_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Models/User */ "./src/app/Models/User.ts");
/* harmony import */ var _Models_MessageSend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Models/MessageSend */ "./src/app/Models/MessageSend.ts");
/* harmony import */ var _Models_WishListSend__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Models/WishListSend */ "./src/app/Models/WishListSend.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SingleListComponent = /** @class */ (function () {
    function SingleListComponent(router, myMessageService, myUserService, myWishlistService, myListingService, route) {
        this.router = router;
        this.myMessageService = myMessageService;
        this.myUserService = myUserService;
        this.myWishlistService = myWishlistService;
        this.myListingService = myListingService;
        this.route = route;
        this.itemToDisplay = new _Models_Listing__WEBPACK_IMPORTED_MODULE_3__["Listing"]();
        this.sellingUser = new _Models_User__WEBPACK_IMPORTED_MODULE_7__["User"]();
        this.newMessage = new _Models_MessageSend__WEBPACK_IMPORTED_MODULE_8__["MessageSend"]();
        this.disableContactButton = false;
    }
    SingleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changeActiveNavbar();
        this.checkForCurrentUser();
        this.router.paramMap.subscribe(function (params) {
            _this.listingID = +(params.get('id'));
            console.log(_this.listingID);
            _this.myListingService.getSingleLisitng(_this.listingID).toPromise().then(function (data) {
                _this.itemToDisplay = data[0];
                _this.myUserService.getUserInfo(_this.itemToDisplay.seller).toPromise().then(function (data) {
                    _this.sellingUser = data;
                    _this.hideContactButton();
                }).catch(function (error) { return console.log(error); });
            }).catch(function (error) { return _this.route.navigate(['404']); });
        });
    };
    SingleListComponent.prototype.changeActiveNavbar = function () {
        document.getElementById("listingsNavbar").classList.add("active");
        document.getElementById("sellNavbar").classList.remove("active");
        document.getElementById("authNavbar").classList.remove("active");
        document.getElementById("messagesNavbar").classList.remove("active");
        document.getElementById("wishlistNavbar").classList.remove("active");
    };
    SingleListComponent.prototype.addToWishList = function () {
        var _this = this;
        if (this.localUserDetails != undefined && this.localUserDetails != null) {
            var newWishListItem = new _Models_WishListSend__WEBPACK_IMPORTED_MODULE_9__["WishListSend"]();
            newWishListItem.bookName = this.itemToDisplay.bookName;
            newWishListItem.authorName = this.itemToDisplay.authorName;
            newWishListItem.bookCondition = this.itemToDisplay.bookCondition;
            newWishListItem.bookID = this.itemToDisplay.id;
            newWishListItem.bookPic = this.itemToDisplay.image;
            newWishListItem.price = this.itemToDisplay.price;
            newWishListItem.userID = this.localUserDetails.id;
            console.log(newWishListItem);
            this.myWishlistService.addWishListItems(newWishListItem).toPromise()
                .then(function (data) {
                _this.showToast();
            })
                .catch(function (error) { return console.log(error); });
        }
        else {
            this.route.navigate(['login']);
        }
    };
    SingleListComponent.prototype.checkForCurrentUser = function () {
        var _this = this;
        var navbar = document.getElementById("mainNavbar");
        navbar.hidden = false;
        if (localStorage.getItem("currentUser") === null) {
            console.log("error not logged in");
            this.changeUserName(0);
            return false;
        }
        else {
            console.log("getting user");
            this.localUserDetails = JSON.parse(localStorage.getItem("currentUser"));
            this.changeUserName(1);
            this.myUserService.getUserInfo(this.localUserDetails.id).toPromise()
                .then(function (data) { _this.currentUser = data; })
                .catch(function (error) { console.log(error); _this.route.navigate(['logout']); });
            return true;
        }
    };
    SingleListComponent.prototype.changeUserName = function (type) {
        var username = document.getElementById("userNameNavbar");
        var btLogin = document.getElementById("loginNavbar");
        var btProfile = document.getElementById("profileNavbar");
        var btLogout = document.getElementById("logoutNavbar");
        var btSignupNavbar = document.getElementById("signupNavbar");
        if (type == 1) {
            username.innerText = this.localUserDetails.name;
            btLogin.hidden = true;
            btProfile.hidden = false;
            btLogout.hidden = false;
            btSignupNavbar.hidden = true;
        }
        else {
            username.innerText = "Sign In";
            btLogin.hidden = false;
            btProfile.hidden = true;
            btLogout.hidden = true;
            btSignupNavbar.hidden = false;
        }
    };
    SingleListComponent.prototype.sendMessage = function () {
        document.getElementById("closeButton").click();
        this.newMessage.bookID = this.itemToDisplay.id;
        this.newMessage.bookName = this.itemToDisplay.bookName;
        this.newMessage.recipientID = this.itemToDisplay.seller;
        this.newMessage.senderID = this.currentUser.id;
        this.newMessage.senderName = this.currentUser.name;
        this.newMessage.senderPic = this.currentUser.picture;
        this.myMessageService.addNewMessage(this.newMessage).toPromise()
            .then(function (items) { return console.log(items); })
            .catch(function (error) { return console.log(error); });
    };
    SingleListComponent.prototype.hideContactButton = function () {
        if (this.localUserDetails == undefined || this.localUserDetails == null) {
            console.log("Not logged in");
            this.disableContactButton = true;
        }
        if (this.localUserDetails.id == this.itemToDisplay.seller) {
            console.log("Same user");
            this.disableContactButton = true;
        }
    };
    SingleListComponent.prototype.checkCondiiton = function () {
        if (this.itemToDisplay.bookCondition == "New") {
            return 0;
        }
        else if (this.itemToDisplay.bookCondition == "Almost New") {
            return 1;
        }
        else if (this.itemToDisplay.bookCondition == "Slight Damage") {
            return 2;
        }
        else
            return 3;
    };
    SingleListComponent.prototype.showToast = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    SingleListComponent.prototype.showInfoToast = function (message) {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar2");
        // Add the "show" class to DIV
        x.innerText = message;
        x.style.backgroundColor = "#00A3b9";
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    SingleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-list',
            template: __webpack_require__(/*! ./single-list.component.html */ "./src/app/single-list/single-list.component.html"),
            styles: [__webpack_require__(/*! ./single-list.component.scss */ "./src/app/single-list/single-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _message_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _wishlist_wishlist_service__WEBPACK_IMPORTED_MODULE_4__["WishlistService"],
            _listing_listing_service__WEBPACK_IMPORTED_MODULE_2__["ListingService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SingleListComponent);
    return SingleListComponent;
}());



/***/ }),

/***/ "./src/app/user-listings/user-listings.component.html":
/*!************************************************************!*\
  !*** ./src/app/user-listings/user-listings.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main -->\n<div class='wrap'>\n  Your Listings\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div style=\"padding-left: 0;padding-right: 0;padding-top: 0\"\n               class=\"block col-3\" *ngFor=\"let item of allItems;let idx = index\">\n            <div class=\"product\" mdbWavesEffect=\"\">\n              <!--<img src=\"https://gangarams.com/image/cache/placeholder-250x250.png\">-->\n              <img src=\"{{item.image}}\">\n              <div class=\"buttons\">\n                <a class=\"buy\" (click)=\"redirectList(item.id)\" onclick=\"\">View</a>\n              </div>\n            </div>\n            <div class=\"info\">\n              <h4>{{item.bookName}}</h4>\n              <div class=\"description\">\n                By {{item.authorName}}\n              </div>\n              <span class=\"price\">Rs. {{item.price}}</span>\n              <!--<a class=\"buy_now\" href=\"#\" onclick=\"updateCart('${product.id}','${product.name}','${product.manufacturer}','${product.price}')\">Buy Now</a>-->\n            </div>\n            <div class=\"details\">\n              <div class=\"time\"><h5 class=\"badge badge-success\"  [hidden]=\"checkCondiiton(item) !== 0\">\n                <label style=\"font-size: medium\" class=\"conditionlabel\">New</label></h5>\n                <h5 class=\"badge badge-info\"   [hidden]=\"checkCondiiton(item) !== 1\">\n                  <label style=\"font-size: medium\" class=\"conditionlabel\">Almost New</label></h5>\n                <h5 class=\"badge badge-warning\"   [hidden]=\"checkCondiiton(item) !== 2\">\n                  <label style=\"font-size: medium\" class=\"conditionlabel\">Slight Damage</label></h5>\n                <h5 class=\"badge badge-danger\"   [hidden]=\"checkCondiiton(item) !== 3\">\n                  <label style=\"font-size: medium\" class=\"conditionlabel\">Worn</label></h5>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.Main -->\n</div>\n"

/***/ }),

/***/ "./src/app/user-listings/user-listings.component.scss":
/*!************************************************************!*\
  !*** ./src/app/user-listings/user-listings.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(https://fonts.googleapis.com/css?family=Karla);\n@import url(https://fonts.googleapis.com/css?family=Ubuntu:300);\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n/* Animations to fade the snackbar in and out */\n.conditionlabel {\n  padding: 3px;\n  margin-bottom: 0 !important; }\n.block {\n  width: 295px;\n  display: inline-block;\n  position: initial;\n  margin: 0% 1% 1% 1%;\n  max-width: 23%;\n  border-radius: 5px;\n  background: #fff;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n.row {\n  margin-left: -6%;\n  margin-right: -6%; }\n.product {\n  display: block;\n  position: relative;\n  height: 200px;\n  overflow: hidden; }\n.product img {\n    width: 100%;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n.product:hover .buttons {\n    opacity: 1; }\n.product:hover a {\n    opacity: 1; }\n.info {\n  display: block;\n  position: relative;\n  padding: 20px; }\n.info h4 {\n    position: relative;\n    padding: 0 0 20px 0;\n    margin: 0 0 20px 0;\n    font-family: \"Open Sans\", sans-serif;\n    font-weight: 700;\n    font-size: 19px;\n    line-height: 25px;\n    color: #372f2b;\n    letter-spacing: -1px; }\n.info h4::after {\n      display: block;\n      position: absolute;\n      bottom: 0px;\n      content: \"\";\n      width: 40px;\n      height: 2px;\n      background: #3b86c4; }\n.info .description {\n    display: block;\n    padding-bottom: 20px;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 14px;\n    font-weight: 600;\n    color: #5f5f5f; }\n.info .price {\n    font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n    font-size: 24px;\n    font-weight: 700;\n    color: #372f2b;\n    line-height: 26px; }\n.details {\n  border-top: 1px solid #e5e5e5;\n  padding: 18px 20px; }\n.buttons {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n  opacity: 0;\n  transition: opacity .25s ease-in; }\n.buttons a {\n    display: block;\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    margin: auto;\n    width: 115px;\n    border-radius: 2px;\n    padding: 15px 40px;\n    font-family: Helvetica, sans-serif;\n    font-size: 15px;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: #fff;\n    text-decoration: none;\n    opacity: 0;\n    text-align: center; }\na.buy {\n  top: 20%;\n  text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.4);\n  background: #1abc9c;\n  background-position: 0 -15px;\n  background-size: 400px 80px;\n  background-repeat: no-repeat;\n  box-shadow: 0 3px 0 #16a085;\n  transition: background-position .2s ease-in; }\na.buy:active {\n    top: 21%;\n    box-shadow: 0 0px 0 #16a085; }\na.preview {\n  bottom: 20%;\n  text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.4);\n  background: #3498db;\n  background-position: 0 -15px;\n  background-size: 400px 80px;\n  background-repeat: no-repeat;\n  box-shadow: 0 3px 0 #2980b9;\n  transition: background-position .2s ease-in; }\n.preview:hover {\n  background-position: 0 0; }\n.preview:active {\n  -webkit-transform: translateY(2px);\n  transform: translateY(2px);\n  box-shadow: none; }\n.buy_now {\n  float: right;\n  position: relative;\n  top: -5px;\n  display: block;\n  padding: 10px 10px;\n  border-radius: 3px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #fff;\n  font-weight: bold;\n  text-decoration: none;\n  font-size: 15px;\n  text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.4);\n  background: #3498db;\n  transition: background-position .2s ease-in;\n  box-shadow: 0 3px 0 #2980b9; }\n.buy_now:hover {\n    background-position: 0 0; }\n.buy_now:active {\n    -webkit-transform: translateY(2px);\n    transform: translateY(2px);\n    box-shadow: none; }\n.time {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  color: #372f2b;\n  background-position: 0 2px; }\n.wrap {\n  padding: 80px 0 0 0;\n  font-size: 62px;\n  color: #888;\n  width: 400px;\n  font-family: 'Karla';\n  margin: 0 auto;\n  text-align: center; }\ninput {\n  font-family: 'Ubuntu';\n  font-weight: 300;\n  border: 0;\n  border-bottom: 1px solid #ff5407;\n  width: 100%;\n  height: 36px;\n  font-size: 26px; }\ninput:focus {\n  outline: none;\n  box-shadow: none;\n  background: #ffeae2; }\n.buttonafter:after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 8px;\n  left: 100%;\n  /*should be set to 100% */\n  width: 0;\n  height: 0;\n  border-color: transparent transparent transparent #14a03d;\n  /*border color should be same as div div background color*/\n  border-style: solid;\n  border-width: 5px; }\n.forgot {\n  background: #a0a0a0;\n  color: #fff;\n  float: left; }\n.login {\n  background: #a0a0a0;\n  color: #fff;\n  float: right; }\n"

/***/ }),

/***/ "./src/app/user-listings/user-listings.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-listings/user-listings.component.ts ***!
  \**********************************************************/
/*! exports provided: UserListingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListingsComponent", function() { return UserListingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _listing_listing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../listing/listing.service */ "./src/app/listing/listing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserListingsComponent = /** @class */ (function () {
    function UserListingsComponent(myUserService, myListingService, router, route) {
        this.myUserService = myUserService;
        this.myListingService = myListingService;
        this.router = router;
        this.route = route;
    }
    UserListingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changeActiveNavbar();
        this.checkForCurrentUser();
        this.myListingService.getUserListings(this.localUserDetails.id).toPromise()
            .then(function (items) { return _this.allItems = items; })
            .catch(function (error) { return console.log(error); });
    };
    UserListingsComponent.prototype.checkCondiiton = function (item) {
        if (item.bookCondition == "New") {
            return 0;
        }
        else if (item.bookCondition == "Almost New") {
            return 1;
        }
        else if (item.bookCondition == "Slight Damage") {
            return 2;
        }
        else
            return 3;
    };
    UserListingsComponent.prototype.redirectList = function (id) {
        this.route.navigate(['listings', id]);
    };
    UserListingsComponent.prototype.checkForCurrentUser = function () {
        var _this = this;
        var navbar = document.getElementById("mainNavbar");
        navbar.hidden = false;
        if (localStorage.getItem("currentUser") === null) {
            console.log("error not logged in");
            this.route.navigate(['login']);
            this.changeUserName(0);
            return false;
        }
        else {
            console.log("getting user");
            this.localUserDetails = JSON.parse(localStorage.getItem("currentUser"));
            this.changeUserName(1);
            this.myUserService.getUserInfo(this.localUserDetails.id).toPromise()
                .then(function (data) { _this.currentUser = data; console.log(data); })
                .catch(function (error) { console.log(error); _this.route.navigate(['logout']); });
            return true;
        }
    };
    UserListingsComponent.prototype.changeActiveNavbar = function () {
        document.getElementById("listingsNavbar").classList.remove("active");
        document.getElementById("sellNavbar").classList.remove("active");
        document.getElementById("authNavbar").classList.add("active");
        document.getElementById("messagesNavbar").classList.remove("active");
        document.getElementById("wishlistNavbar").classList.remove("active");
    };
    UserListingsComponent.prototype.changeUserName = function (type) {
        var username = document.getElementById("userNameNavbar");
        var btLogin = document.getElementById("loginNavbar");
        var btProfile = document.getElementById("profileNavbar");
        var btLogout = document.getElementById("logoutNavbar");
        var btSignupNavbar = document.getElementById("signupNavbar");
        if (type == 1) {
            username.innerText = this.localUserDetails.name;
            btLogin.hidden = true;
            btProfile.hidden = false;
            btLogout.hidden = false;
            btSignupNavbar.hidden = true;
        }
        else {
            username.innerText = "Sign In";
            btLogin.hidden = false;
            btProfile.hidden = true;
            btLogout.hidden = true;
            btSignupNavbar.hidden = false;
        }
    };
    UserListingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-listings',
            template: __webpack_require__(/*! ./user-listings.component.html */ "./src/app/user-listings/user-listings.component.html"),
            styles: [__webpack_require__(/*! ./user-listings.component.scss */ "./src/app/user-listings/user-listings.component.scss")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _listing_listing_service__WEBPACK_IMPORTED_MODULE_3__["ListingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserListingsComponent);
    return UserListingsComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.authenticateUser = function (email, password) {
        return this.http.post('/api/user/login', {
            email: email,
            password: password
        });
    };
    UserService.prototype.signUpUser = function (newUser) {
        return this.http.post('/api/user/signup', newUser);
    };
    UserService.prototype.getUserInfo = function (userID) {
        return this.http.post('/api/user', {
            id: userID
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main -->\n<div class='wrap'>\n  Your WishList\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div style=\"padding-left: 0;padding-right: 0;padding-top: 0\"\n            class=\"block col-3\" *ngFor=\"let item of allItems;let idx = index\">\n            <div class=\"product\" mdbWavesEffect=\"\">\n              <!--<img src=\"https://gangarams.com/image/cache/placeholder-250x250.png\">-->\n              <img src=\"{{item.bookPic}}\">\n              <div class=\"buttons\">\n                <a class=\"buy\" (click)=\"redirectList(item.bookID)\" onclick=\"\">View</a>\n              </div>\n            </div>\n            <div class=\"info\">\n              <h4>{{item.bookName}}</h4>\n              <div class=\"description\">\n                By {{item.authorName}}\n              </div>\n              <span class=\"price\">Rs. {{item.price}}</span>\n              <!--<a class=\"buy_now\" href=\"#\" onclick=\"updateCart('${product.id}','${product.name}','${product.manufacturer}','${product.price}')\">Buy Now</a>-->\n            </div>\n            <div class=\"details\">\n              <div class=\"time\"><h5 class=\"badge badge-success\"  [hidden]=\"checkCondiiton(item) !== 0\">\n                <label style=\"font-size: medium\" class=\"conditionlabel\">New</label></h5>\n                <h5 class=\"badge badge-info\"   [hidden]=\"checkCondiiton(item) !== 1\">\n                  <label style=\"font-size: medium\" class=\"conditionlabel\">Almost New</label></h5>\n                <h5 class=\"badge badge-warning\"   [hidden]=\"checkCondiiton(item) !== 2\">\n                  <label style=\"font-size: medium\" class=\"conditionlabel\">Slight Damage</label></h5>\n                <h5 class=\"badge badge-danger\"   [hidden]=\"checkCondiiton(item) !== 3\">\n                  <label style=\"font-size: medium\" class=\"conditionlabel\">Worn</label></h5>\n                &nbsp;&nbsp;&nbsp;&nbsp; <a class=\"time\" style=\"color: red;\" (click)=\"removeFromWishlist(item.id,idx)\" mdbTooltip=\"Remove Item\" placement=\"bottom\">\n                  <i class=\"fa fa-times-circle-o fa-lg\"></i></a>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.Main -->\n</div>\n"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.scss":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(https://fonts.googleapis.com/css?family=Karla);\n@import url(https://fonts.googleapis.com/css?family=Ubuntu:300);\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n/* Animations to fade the snackbar in and out */\n.conditionlabel {\n  padding: 3px;\n  margin-bottom: 0 !important; }\n.block {\n  width: 295px;\n  display: inline-block;\n  position: initial;\n  margin: 0% 1% 1% 1%;\n  max-width: 23%;\n  border-radius: 5px;\n  background: #fff;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n.row {\n  margin-left: -6%;\n  margin-right: -6%; }\n.product {\n  display: block;\n  position: relative;\n  height: 200px;\n  overflow: hidden; }\n.product img {\n    width: 100%;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n.product:hover .buttons {\n    opacity: 1; }\n.product:hover a {\n    opacity: 1; }\n.info {\n  display: block;\n  position: relative;\n  padding: 20px; }\n.info h4 {\n    position: relative;\n    padding: 0 0 20px 0;\n    margin: 0 0 20px 0;\n    font-family: \"Open Sans\", sans-serif;\n    font-weight: 700;\n    font-size: 19px;\n    line-height: 25px;\n    color: #372f2b;\n    letter-spacing: -1px; }\n.info h4::after {\n      display: block;\n      position: absolute;\n      bottom: 0px;\n      content: \"\";\n      width: 40px;\n      height: 2px;\n      background: #3b86c4; }\n.info .description {\n    display: block;\n    padding-bottom: 20px;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 14px;\n    font-weight: 600;\n    color: #5f5f5f; }\n.info .price {\n    font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n    font-size: 24px;\n    font-weight: 700;\n    color: #372f2b;\n    line-height: 26px; }\n.details {\n  border-top: 1px solid #e5e5e5;\n  padding: 18px 20px; }\n.buttons {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  background: rgba(255, 255, 255, 0.5);\n  opacity: 0;\n  transition: opacity .25s ease-in; }\n.buttons a {\n    display: block;\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    margin: auto;\n    width: 115px;\n    border-radius: 2px;\n    padding: 15px 40px;\n    font-family: Helvetica, sans-serif;\n    font-size: 15px;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: #fff;\n    text-decoration: none;\n    opacity: 0;\n    text-align: center; }\na.buy {\n  top: 20%;\n  text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.4);\n  background: #1abc9c;\n  background-position: 0 -15px;\n  background-size: 400px 80px;\n  background-repeat: no-repeat;\n  box-shadow: 0 3px 0 #16a085;\n  transition: background-position .2s ease-in; }\na.buy:active {\n    top: 21%;\n    box-shadow: 0 0px 0 #16a085; }\na.preview {\n  bottom: 20%;\n  text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.4);\n  background: #3498db;\n  background-position: 0 -15px;\n  background-size: 400px 80px;\n  background-repeat: no-repeat;\n  box-shadow: 0 3px 0 #2980b9;\n  transition: background-position .2s ease-in; }\n.preview:hover {\n  background-position: 0 0; }\n.preview:active {\n  -webkit-transform: translateY(2px);\n  transform: translateY(2px);\n  box-shadow: none; }\n.buy_now {\n  float: right;\n  position: relative;\n  top: -5px;\n  display: block;\n  padding: 10px 10px;\n  border-radius: 3px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #fff;\n  font-weight: bold;\n  text-decoration: none;\n  font-size: 15px;\n  text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.4);\n  background: #3498db;\n  transition: background-position .2s ease-in;\n  box-shadow: 0 3px 0 #2980b9; }\n.buy_now:hover {\n    background-position: 0 0; }\n.buy_now:active {\n    -webkit-transform: translateY(2px);\n    transform: translateY(2px);\n    box-shadow: none; }\n.time {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n  color: #372f2b;\n  background-position: 0 2px; }\n.wrap {\n  padding: 80px 0 0 0;\n  font-size: 62px;\n  color: #888;\n  width: 400px;\n  font-family: 'Karla';\n  margin: 0 auto;\n  text-align: center; }\ninput {\n  font-family: 'Ubuntu';\n  font-weight: 300;\n  border: 0;\n  border-bottom: 1px solid #ff5407;\n  width: 100%;\n  height: 36px;\n  font-size: 26px; }\ninput:focus {\n  outline: none;\n  box-shadow: none;\n  background: #ffeae2; }\n.buttonafter:after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 8px;\n  left: 100%;\n  /*should be set to 100% */\n  width: 0;\n  height: 0;\n  border-color: transparent transparent transparent #14a03d;\n  /*border color should be same as div div background color*/\n  border-style: solid;\n  border-width: 5px; }\n.forgot {\n  background: #a0a0a0;\n  color: #fff;\n  float: left; }\n.login {\n  background: #a0a0a0;\n  color: #fff;\n  float: right; }\n"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wishlist.service */ "./src/app/wishlist/wishlist.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(myUserService, myWishlistService, router, route) {
        this.myUserService = myUserService;
        this.myWishlistService = myWishlistService;
        this.router = router;
        this.route = route;
    }
    WishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changeActiveNavbar();
        this.user = localStorage.getItem("currentUser");
        if (this.checkForCurrentUser()) {
            this.user = JSON.parse(this.user);
            var id = this.user.id;
            console.log(this.user);
            this.myWishlistService.getAllItems(id).toPromise().then(function (data) {
                _this.allItems = data;
            })
                .catch(function (error) { return console.log(error); });
        }
    };
    WishlistComponent.prototype.checkCondiiton = function (item) {
        if (item.bookCondition == "New") {
            return 0;
        }
        else if (item.bookCondition == "Almost New") {
            return 1;
        }
        else if (item.bookCondition == "Slight Damage") {
            return 2;
        }
        else
            return 3;
    };
    WishlistComponent.prototype.redirectList = function (id) {
        this.route.navigate(['listings', id]);
    };
    WishlistComponent.prototype.checkForCurrentUser = function () {
        var _this = this;
        var navbar = document.getElementById("mainNavbar");
        navbar.hidden = false;
        if (localStorage.getItem("currentUser") === null) {
            console.log("error not logged in");
            this.route.navigate(['login']);
            this.changeUserName(0);
            return false;
        }
        else {
            console.log("getting user");
            this.localUserDetails = JSON.parse(localStorage.getItem("currentUser"));
            this.changeUserName(1);
            this.myUserService.getUserInfo(this.localUserDetails.id).toPromise()
                .then(function (data) { _this.currentUser = data; console.log(data); })
                .catch(function (error) { console.log(error); _this.route.navigate(['logout']); });
            return true;
        }
    };
    WishlistComponent.prototype.changeUserName = function (type) {
        var username = document.getElementById("userNameNavbar");
        var btLogin = document.getElementById("loginNavbar");
        var btProfile = document.getElementById("profileNavbar");
        var btLogout = document.getElementById("logoutNavbar");
        var btSignupNavbar = document.getElementById("signupNavbar");
        if (type == 1) {
            username.innerText = this.localUserDetails.name;
            btLogin.hidden = true;
            btProfile.hidden = false;
            btLogout.hidden = false;
            btSignupNavbar.hidden = true;
        }
        else {
            username.innerText = "Sign In";
            btLogin.hidden = false;
            btProfile.hidden = true;
            btLogout.hidden = true;
            btSignupNavbar.hidden = false;
        }
    };
    WishlistComponent.prototype.changeActiveNavbar = function () {
        document.getElementById("listingsNavbar").classList.remove("active");
        document.getElementById("sellNavbar").classList.remove("active");
        document.getElementById("authNavbar").classList.remove("active");
        document.getElementById("messagesNavbar").classList.remove("active");
        document.getElementById("wishlistNavbar").classList.add("active");
    };
    WishlistComponent.prototype.removeFromWishlist = function (id, idx) {
        var _this = this;
        this.myWishlistService.removeWishListItems(id).toPromise()
            .then(function () {
            console.log("Deleted");
            _this.ngOnInit();
        })
            .catch(function (error) { console.log(error); _this.ngOnInit(); });
        this.ngOnInit();
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.scss */ "./src/app/wishlist/wishlist.component.scss")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.service.ts":
/*!**********************************************!*\
  !*** ./src/app/wishlist/wishlist.service.ts ***!
  \**********************************************/
/*! exports provided: WishlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistService", function() { return WishlistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WishlistService = /** @class */ (function () {
    function WishlistService(http) {
        this.http = http;
    }
    WishlistService.prototype.addWishListItems = function (newWishListItem) {
        console.log("Adding", newWishListItem);
        return this.http.post('/api/wishlist/add', newWishListItem);
    };
    WishlistService.prototype.removeWishListItems = function (id) {
        return this.http.post('/api/wishlist/remove', {
            id: id
        });
    };
    WishlistService.prototype.getAllItems = function (userID) {
        return this.http.post('/api/wishlist', {
            userID: userID
        });
    };
    WishlistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WishlistService);
    return WishlistService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mayank/WebstormProjects/BookSiteAngular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map