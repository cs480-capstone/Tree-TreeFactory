"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
/*
* Tree factory creates a list of "saplings". Saplings are a buffer between Tree Objects
* and JSON data. This list is then sent to the component for instantiation
*/
var TreeFactory = (function () {
    //constructor reads from dummy json file until data can be pulled from data base
    function TreeFactory(http) {
        //This is the format of the get request. I couldnt figure out how to use it 
        //with a local JSON file but when the database is up the URL of the data 
        //simply needs to be inserted
        this.http = http;
        /*this.http.get('http://localhost:3000/assets/tree.json').subscribe(saplings => {
            this.saplings = saplings['saplings']
        });*/
        //Since I coudlnt accses a local JSON file I skipped parsing and crated the 
        //sapling array exactly as it would have been parsed from tree.json
        this.saplings =
            [
                {
                    lat: 1,
                    long: 1,
                    decs: ["fl", "fw", "fr"],
                    special: ["wild"],
                    hidden: false
                },
                {
                    lat: 10,
                    long: 14,
                    decs: ["fl"],
                    special: [],
                    hidden: true
                },
                {
                    lat: 1,
                    long: 1,
                    decs: ["fw", "pn"],
                    special: ["fire"],
                    hidden: false
                }
            ];
    }
    //Returns the sapling list to the TreeComponent
    TreeFactory.prototype.getTrees = function () {
        return this.saplings;
    };
    return TreeFactory;
}());
TreeFactory = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TreeFactory);
exports.TreeFactory = TreeFactory;
//# sourceMappingURL=tree.service.js.map