#!/usr/bin/env python3
""" Module for element length. """


from typing import list, tuple


def element_length(lst: list[str]) -> list[tuple[str, int]]:
    """
    Calculate the length of each element in a list.

    Parameters:
    lst (list of str): A list of strings to process.

    Returns:
    list of tuple: A list of tuples containing a string and its length.
    """
    return [(i, len(i)) for i in lst]
