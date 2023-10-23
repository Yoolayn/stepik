print(db.getMongo().getDBNames())
print(db.getMongo().getDBNames().map(
    name => db.getSiblingDB(name).getCollectionNames()
))
