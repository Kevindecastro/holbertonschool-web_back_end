#!/usr/bin/env python3
"""Compréhension asynchrone pour collecter 10 nombres générés"""

import asyncio
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Collecte 10 nombres générés de manière asynchrone et
    retourne la liste"""
    return [i async for i in async_generator()]
