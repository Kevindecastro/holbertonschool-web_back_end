#!/usr/bin/env python3
""" 8-lists all documents in a MongoDB collection"""


def list_all(mongo_collection):
    return list(mongo_collection.find())
