#!/usr/bin/env python3
"""Module for type-annotated function to_kv."""


from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Returns a tuple with a string and an integer.

    This function takes a string and an integer and returns a tuple
    containing the string and the square of the integer.

    Parameters:
    k (str): The string to include in the tuple.
    v (int): The integer to square and include in the tuple.

    Returns:
    tuple: A tuple containing the string `k` and the square of `v`.
    """
    return (k, v * v)
