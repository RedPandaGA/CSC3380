import json 

jsonfile = open("F:\GitHubMain\Classes\CSC3380\SQLDev\ingredients.json", "r")

jsondata = json.load(jsonfile)

single = jsondata[1]

#print(single["possibleUnits"][0])

databasefile = open("F:\GitHubMain\Classes\CSC3380\SQLDev\databasejson.json", "r")

dbjson = json.load(databasefile)

found = False
categorynum = -1

for i in dbjson:
    categorynum += 1
    if(i["category"]==single["aisle"]):
        found = True

if(found == True):
    ingredientlist = dbjson[categorynum]["ingredients"]
    for x in ingredientlist:
        if(x["name"]==single["name"]):
            print("error: ingredient already found")
        else:
            ingredientlist.append()
