migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oqhwx9smup60dh2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uul5uife",
    "name": "comments",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "aa6q6c1yhtixb4q",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oqhwx9smup60dh2")

  // remove
  collection.schema.removeField("uul5uife")

  return dao.saveCollection(collection)
})
