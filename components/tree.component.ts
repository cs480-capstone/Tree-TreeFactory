import { Component } from '@angular/core';
import { TreeFactory } from '../services/tree.service';

@Component({
    selector: 'tree',
    templateUrl: `./tree.html`,
    providers: [TreeFactory]
})
/*
* Tree component contains the primary logic for the tree classes
* It contains the tree class and all of its decorator classes
* It also turns saplings into proper Tree objects
*/

export class TreeListComponent
{
    //List of created trees
    tree_list : Tree[];

    constructor(private treeFactory : TreeFactory)
    {   
        this.tree_list = [];

        // Gets saplings
        let sapling = treeFactory.getTrees();

        // Calls plant trees with spalings
        this.plantTrees(sapling);
    }

    //planTrees loops through a list of saplings and turns them into trees
    plantTrees(saplings : sapling[])
    {
        //Loops through list
        for(let i = 0; i < saplings.length; i++)
        {
            //and pushes instanciated objects onto the tree_list
            this.tree_list.push(new Tree(saplings[i].lat,saplings[i].long, this.wrapTrees(saplings[i]), saplings[i].special, saplings[i].hidden);
        }
    }


    //This recursive method wraps the tree object in its decorator classes
    //The decorator list of each sapling is treated like a stack
    //The top element is popped off and used to create the 
    wrapTrees(target : sapling) : DecoratorTree  
    {   
        //Base case
        //Sets innermost decorator class's child to null
        if(target.decs.length === 0)
        {
            return null;
        }
        //Recursive case 
        //Wrapping still reqruied 
        /*------NEW DECORATORS MUST BE ADDED TO THIS SWITCH------*/
        switch(target.decs.pop())
            {
                case 'fl':
                    return new FallingTree(this.wrapTrees(target));
                case 'fw':
                    return new FloweringTree(this.wrapTrees(target))
                case 'fr':
                    return new FrutingTree(this.wrapTrees(target));
                case 'pn':
                    return new PineConeTree(this.wrapTrees(target));
            }  
        }
};

//interface serves as a buffer between raw JSON and Tree objects
interface sapling
{
    lat : number,
    long : number,
    decs : string[],
    special : string[],
    hidden : boolean
}

//The concrete class tree contains all variables needed for a Tree object
//Including the child_tree which will be wrapped with all the decorators needed
//to collect data
export class Tree
{
    lat : number;
    long : number;
    child_tree : DecoratorTree  ;
    _special_events : string[];
    _number_of_events : number;
    hidden : boolean;

    constructor(lat : number, long : number, child_tree : DecoratorTree  , special_events : string[], hidden : boolean)
    {
        this.lat = lat;
        this.long = long;
        this.child_tree = child_tree; 
        this._special_events = special_events;
        this._number_of_events = special_events.length;
        this.hidden = hidden;
    }

    // Checks to see if collection is leagal
    public canCollect(curLat : number, curLong : number) : boolean 
    {
        // TODO get user location and test to see if in bounds
        return true;
    }

    // Reports any special events occuring on the tree
    public get special_events() : string[]
    {
        return this._special_events;
    }

    // Reports the number of events on a tree
    public get number_of_events() : number
    {
        return this._number_of_events;
    }
    
    // Calls the collect data method of the child tree
    // These calls will be repated all the way down until the lowest tree is found
    // Currently the methods just return strings reporting the kind of tree
    // Which the call was completed in
    public collectData() : string
    {
        return this.child_tree.collectData();
    }
}

// DecoratorTree objects are the child_trees of the concrete tree class
// There function is to call the specific collectData methods for each data point
export abstract class DecoratorTree  
{

    child_tree : DecoratorTree  ;

    constructor(child_tree : DecoratorTree)
    {
        this.child_tree = child_tree; 
    }

    public abstract collectData() : string;
    
}

/*------NEW DECORATORS MUST BE IMPLEMENTED TO EXTEND DECORATOR TREE------*/

export class FallingTree extends DecoratorTree  
{
    public collectData() : string
    {
        let data = 'I am  Falling tree\n';
        if(this.child_tree !== null)
        {
            data = data + ' ' + this.child_tree.collectData()
        }
        return data;
    }
}

export class FrutingTree extends DecoratorTree  
{

    public collectData() : string
    {
        let data = 'I am  Fruting tree\n';
        if(this.child_tree !== null)
        {
            data = data + ' ' + this.child_tree.collectData()
        }
        return data;
    }
}

export class FloweringTree extends DecoratorTree  
{

    public collectData() : string
    {
        let data = 'I am  Flowering tree\n';
        if(this.child_tree !== null)
        {
            data = data + ' ' + this.child_tree.collectData()
        }
        return data;
    }
    
}

export class PineConeTree extends DecoratorTree  
{

    public collectData() : string
    {
        let data = 'I am  Pine Cone tree\n';
        if(this.child_tree !== null)
        {
            data = data + ' ' + this.child_tree.collectData()
        }
        return data;
    }
}