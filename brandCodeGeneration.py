import copy
import json
from io import StringIO

# A script to help generate more brands and clean up in the brand database
if __name__ == '__main__':
	databasePath = "brands.json"
	codePath = "script.js"

	brandCodeTemplate = """	{
        "name": "$name$",
        "details": {
            "Country": "$country$"
        }
    }"""
	# brandCodeTemplate = """	{
    #     "name": "$name$",
    #     "details": {
    #         "Country": "$country$",
	# 		"Owned by": "Coca-Cola Company"
    #     }
    # }"""

	# Generate new brand code
	newBrandsToAdd = [
		# ["Audi", "Germany"],
	]
	newCodeToAdd = ""
	for brand in newBrandsToAdd:
		brandCode = copy.deepcopy(brandCodeTemplate)
		brandCode = brandCode.replace("$name$", brand[0])
		brandCode = brandCode.replace("$country$", brand[1])
		newCodeToAdd += ",\n" + brandCode

	# Add the new brands
	with open(databasePath, "r") as f:
		databaseData = f.read()
		databaseData = databaseData.replace("\n]", newCodeToAdd + "\n]")

	brands = json.load(StringIO(databaseData))

	# Remove duplicate brands
	uniqueBrands = list({brand['name']: brand for brand in brands}.values())

	# Sort database in alphabetical order
	sortedBrands = sorted(uniqueBrands, key=lambda x: x['name'])

	databaseData = json.dumps(sortedBrands, indent=4)

	with open(databasePath, "w") as f:
		f.write(databaseData)
		
	# Insert the database data into the script code
	with open(codePath, "r") as f:
		codeContent = f.read()
	
	# Get code before and after generated section
	startOfGeneratedSection = "// Start of auto generated brand data"
	endOfGeneratedSection = "// End of auto generated brand data"
	beforeGeneratedSection = codeContent.split(startOfGeneratedSection)[0]
	afterGeneratedSection = codeContent.split(endOfGeneratedSection)[1]
	
	# Insert new generated section
	newCodeContent = (beforeGeneratedSection + startOfGeneratedSection +
					  "\n" + databaseData + "\n" + endOfGeneratedSection +
					   afterGeneratedSection)
	with open(codePath, "w") as f:
		f.write(newCodeContent)