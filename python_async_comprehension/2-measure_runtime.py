#!/usr/bin/env python3
""""Measure the runtime of async_comprehension four times in parallel"""

import asyncio
from time import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Measure the runtime of async_comprehension four times in parallel"""
    start = time()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end = time()
    return end - start
