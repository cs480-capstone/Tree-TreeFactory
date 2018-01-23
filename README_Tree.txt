This document explains the Tree object and how it is created. For specifics see the comments on both tree.component.ts and tree.service.ts. 
A tree object starts off as a entry in a JSON file. A sample JSON file, called tree.json will be provided to show the format. Each tree
will be an entry in the array within the JSON file. Fig. 1 shows an example entry.
        Fig 1.
        {
            "lat" : 1,
            "long" : 1,
            "decs" : ["fl","fw","fr"],
            "special" : ["wild"],
            "hidden" : false
        },
lat and long refer to latitude and longitutde. decs is an array with containg the ID for the applicable decorators (Footnote 1).
special is an array wich contians the ID of any applicable special events. This JSON entry will be parsed into a sapling object literal.
The sapling serves as a buffer between the raw JSON data and a proper Tree object. A list of these saplings is passed to the tree.component.
Once recivied they are instanciated into proper Trees. The speciciations of these Tree contain all the same fields as a sapling except instead of 
an array of decs it contains a child_tree. This child_tree is a wrapped decorator class and is used to call the collectData methods. 

Footnotes 
    1.
    decorators - decorators will be saved as strings. Currently the implemented decorators are 
        {fl = FallingTree, fw = FloweringTree, fr = FrutingTree, pn = PineConeTree}
    each decorator corresponds with a data point to be collected. The decorators will be passed as elements in this array.
    In order to add new decorator types, and by consqeunce new data points to be collected, two things must be done. First,
    the switch statment in the wrapTrees() method in tree.component must be updated in order to handle this new dec. Second, the 
    dec must be implemented as a subclass of DecoratorTree. 