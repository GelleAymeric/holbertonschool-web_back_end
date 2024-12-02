#!/usr/bin/env python3
"""Module for summing a mixed list of numbers."""

from typing import List, Union

def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Calculate the sum of all elements in a list of numbers.

    This function takes a list of numbers and returns their sum.
    The list can contain a mix of integers and floating-point numbers.

    Parameters:
    mxd_lst (list of int and float): A list of numbers to sum.

    Returns:
    float: The sum of the numbers in the input list.
    """
    return sum(mxd_lst)
