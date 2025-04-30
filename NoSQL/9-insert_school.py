#!/usr/bin/env python3
""" 9-Module to insert a document into a MongoDB collection """


def insert_school(mongo_collection, **kwargs):
    """Inserts a new document in a collection

    Args:
        mongo_collection: The pymongo collection object
        **kwargs: Key-value pairs representing fields of the document

    Returns:
        The _id of the new document
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
