#!/usr/bin/env python3
""" Module for element length. """


from typing import List, Tuple, Sequence, Iterable


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Calculate the length of each element in a list.

    Parameters:
    lst (list of str): A list of strings to process.

    Returns:
    list of tuple: A list of tuples containing a string and its length.
    """
    return [(i, len(i)) for i in lst]
