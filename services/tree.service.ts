import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

/*
* Tree factory creates a list of "saplings". Saplings are a buffer between Tree Objects
* and JSON data. This list is then sent to the component for instantiation
*/

@Injectable()
export class TreeFactory
{
    saplings : sapling[];

    //constructor reads from dummy json file until data can be pulled from data base
    constructor(private http: Http)
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
                lat : 1,
                long : 1,
                decs : ["fl","fw","fr"],
                special : ["wild"],
                hidden : false
            },
            {
                lat : 10,
                long : 14,
                decs : ["fl"],
                special : [],
                hidden : true
            },
            {
                lat : 1,
                long : 1,
                decs : ["fw","pn"],
                special : ["fire"],
                hidden : false
            }
        ]
        
    }

    //Returns the sapling list to the TreeComponent
    getTrees() : sapling[]
    {
        return this.saplings;
    }
}
//interface serves as a buffer between raw JSON and Tree objects
interface sapling
{
    lat : number,
    long : number,
    decs : string[],
    special : string[],
    hidden : boolean
}



