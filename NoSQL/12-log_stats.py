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
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client.logs
    collection = db.nginx

    # Total logs count
    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    # Methods count
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # Status check count
    status_check = collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{status_check} status check")


if __name__ == "__main__":
    log_stats()
