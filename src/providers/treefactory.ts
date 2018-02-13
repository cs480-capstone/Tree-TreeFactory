import {Injectable} from '@angular/core';
//import {Http} from '@angular/http';

/*
* Tree factory creates a list of "saplings". Saplings are a buffer between Tree Objects
* and JSON data. This list is then sent to the component for instantiation
*/

@Injectable()
export class TreeFactory
{
    saplings : Sapling[];

    //constructor reads from dummy json file until data can be pulled from data base
    constructor()
    { 
        //This is the format of the get request. I couldnt figure out how to use it 
        //with a local JSON file but when the database is up the URL of the data 
        //simply needs to be inserted

        /*this.http.get('http://localhost:3000/assets/tree.json').subscribe(saplings => {
            this.saplings = saplings['saplings']
        });*/
        //Since I coudlnt accses a local JSON file I skipped parsing and crated the 
        //sapling array exactly as it would have been parsed from tree.json
        this.saplings =
        [ 
            {
                lat : 47.002927,
                long : -120.537427,
                decs : ["fl","fw","fr"],
                special : ["wild"],
                hidden : false
            }
        ]
        
    }

    //Returns the sapling list to the TreeComponent
    getTrees() : Sapling[]
    {
        return this.saplings;
    }
}
//interface serves as a buffer between raw JSON and Tree objects
export interface Sapling
{
    lat : number,
    long : number,
    decs : string[],
    special : string[],
    hidden : boolean
}