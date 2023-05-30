migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aa6q6c1yhtixb4q")

  // remove
  collection.schema.removeField("jymdpxf4")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aa6q6c1yhtixb4q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jymdpxf4",
    "name": "post",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "oqhwx9smup60dh2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
