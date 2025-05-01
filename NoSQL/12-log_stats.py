#!/usr/bin/env python3
""" 12-log_stats """
from pymongo import MongoClient


def log_stats():
    """
    Displays statistics about Nginx logs stored in the 'nginx' collection.

    This includes:
        - Total number of logs.
        - Number of logs for each HTTP method.
        - Number of logs with method=GET and path=/status.

    Returns:
        None
    """
    # Connect to MongoDB
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client.logs
    collection = db.nginx

    # Get total number of logs
    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    # Methods to count
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")

    # Count each method
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # Count GET requests to /status
    status_count = collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{status_count} logs with method=GET")
    print(f"\tpath=/status")


if __name__ == "__main__":
    log_stats()
