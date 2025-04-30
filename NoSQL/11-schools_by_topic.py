#!/usr/bin/env python3
""" 11-returns the list of school having a specific topic"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns list of schools with a specific topic

    Args:
        mongo_collection: pymongo collection object
        topic (str): topic to search for

    Returns:
        List of documents (schools) matching the topic.
    """
    return list(mongo_collection.find({"topics": topic}))
