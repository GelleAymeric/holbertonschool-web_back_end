#!/usr/bin/env python3
"""Concurrent coroutines"""

import asyncio
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Return the list of all the delays

    Args:
        n (int): The number of times to call wait_random
        max_delay (int): The maximum delay value for wait_random

    Returns:
        List[float]: A list of delays in the order they were completed
    """
    delays = [wait_random(max_delay) for _ in range(n)]
    return [await delay for delay in asyncio.as_completed(delays)]
