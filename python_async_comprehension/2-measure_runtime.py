#!/usr/bin/env python3
"""
Mesure du temps pour exécuter quatre compréhensions asynchrones en parallèle
"""

import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Exécute async_comprehension 4 fois en parallèle et
    mesure le temps total d'exécution
    """
    start_time = time.perf_counter()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    end_time = time.perf_counter()
    return end_time - start_time
