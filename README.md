# wallcology2015-brainstorm
Brainstorm tool for Wallcology 2015 run in Toronto

This repo compromises the tools needed to facilitate the brainstorming part of the Wallcology 2015 run.


## Dev notes
To import scaffolding to local Mongo, eg:

    mongoimport -d wallcology2015-ben -c users --jsonArray scaffolding/pupils-ben.json
    
    mongoimport -d wallcology2015-ben -c states --jsonArray scaffolding/state.json
