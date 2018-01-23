"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var tree_service_1 = require("../services/tree.service");
var TreeListComponent = (function () {
    function TreeListComponent(treeFactory) {
        this.treeFactory = treeFactory;
        this.tree_list = [];
        // Gets saplings
        var sapling = treeFactory.getTrees();
        // Calls plant trees with spalings
        this.plantTrees(sapling);
    }
    //planTrees loops through a list of saplings and turns them into trees
    TreeListComponent.prototype.plantTrees = function (saplings) {
        //Loops through list
        for (var i = 0; i < saplings.length; i++) {
            //and pushes instanciated objects onto the tree_list
            this.tree_list.push(new Tree(saplings[i].lat, saplings[i].long, this.wrapTrees(saplings[i]), saplings[i].special, saplings[i].hidden));
        }
    };
    //This recursive method wraps the tree object in its decorator classes
    //The decorator list of each sapling is treated like a stack
    //The top element is popped off and used to create the 
    TreeListComponent.prototype.wrapTrees = function (target) {
        //Base case
        //Sets innermost decorator class's child to null
        if (target.decs.length === 0) {
            return null;
        }
        //Recursive case 
        //Wrapping still reqruied 
        /*------NEW DECORATORS MUST BE ADDED TO THIS SWITCH------*/
        switch (target.decs.pop()) {
            case 'fl':
                return new FallingTree(this.wrapTrees(target));
            case 'fw':
                return new FloweringTree(this.wrapTrees(target));
            case 'fr':
                return new FrutingTree(this.wrapTrees(target));
            case 'pn':
                return new PineConeTree(this.wrapTrees(target));
        }
    };
    return TreeListComponent;
}());
TreeListComponent = __decorate([
    core_1.Component({
        selector: 'tree',
        templateUrl: "./tree.html",
        providers: [tree_service_1.TreeFactory]
    }),
    __metadata("design:paramtypes", [tree_service_1.TreeFactory])
], TreeListComponent);
exports.TreeListComponent = TreeListComponent;
;
//The concrete class tree contains all variables needed for a Tree object
//Including the child_tree which will be wrapped with all the decorators needed
//to collect data
var Tree = (function () {
    function Tree(lat, long, child_tree, special_events, hidden) {
        this.lat = lat;
        this.long = long;
        this.child_tree = child_tree;
        this._special_events = special_events;
        this._number_of_events = special_events.length;
        this.hidden = hidden;
    }
    // Checks to see if collection is leagal
    Tree.prototype.canCollect = function (curLat, curLong) {
        // TODO get user location and test to see if in bounds
        return true;
    };
    Object.defineProperty(Tree.prototype, "special_events", {
        // Reports any special events occuring on the tree
        get: function () {
            return this._special_events;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tree.prototype, "number_of_events", {
        // Reports the number of events on a tree
        get: function () {
            return this._number_of_events;
        },
        enumerable: true,
        configurable: true
    });
    // Calls the collect data method of the child tree
    // These calls will be repated all the way down until the lowest tree is found
    // Currently the methods just return strings reporting the kind of tree
    // Which the call was completed in
    Tree.prototype.collectData = function () {
        return this.child_tree.collectData();
    };
    return Tree;
}());
exports.Tree = Tree;
// DecoratorTree objects are the child_trees of the concrete tree class
// There function is to call the specific collectData methods for each data point
var DecoratorTree = (function () {
    function DecoratorTree(child_tree) {
        this.child_tree = child_tree;
    }
    return DecoratorTree;
}());
exports.DecoratorTree = DecoratorTree;
/*------NEW DECORATORS MUST BE IMPLEMENTED TO EXTEND DECORATOR TREE------*/
var FallingTree = (function (_super) {
    __extends(FallingTree, _super);
    function FallingTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FallingTree.prototype.collectData = function () {
        var data = 'I am  Falling tree\n';
        if (this.child_tree !== null) {
            data = data + ' ' + this.child_tree.collectData();
        }
        return data;
    };
    return FallingTree;
}(DecoratorTree));
exports.FallingTree = FallingTree;
var FrutingTree = (function (_super) {
    __extends(FrutingTree, _super);
    function FrutingTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FrutingTree.prototype.collectData = function () {
        var data = 'I am  Fruting tree\n';
        if (this.child_tree !== null) {
            data = data + ' ' + this.child_tree.collectData();
        }
        return data;
    };
    return FrutingTree;
}(DecoratorTree));
exports.FrutingTree = FrutingTree;
var FloweringTree = (function (_super) {
    __extends(FloweringTree, _super);
    function FloweringTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FloweringTree.prototype.collectData = function () {
        var data = 'I am  Flowering tree\n';
        if (this.child_tree !== null) {
            data = data + ' ' + this.child_tree.collectData();
        }
        return data;
    };
    return FloweringTree;
}(DecoratorTree));
exports.FloweringTree = FloweringTree;
var PineConeTree = (function (_super) {
    __extends(PineConeTree, _super);
    function PineConeTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PineConeTree.prototype.collectData = function () {
        var data = 'I am  Pine Cone tree\n';
        if (this.child_tree !== null) {
            data = data + ' ' + this.child_tree.collectData();
        }
        return data;
    };
    return PineConeTree;
}(DecoratorTree));
exports.PineConeTree = PineConeTree;
//# sourceMappingURL=tree.component.js.map