#!/usr/bin/env python3
"""Module for summing a list of numbers."""

from typing import List

def sum_list(input_list: list[float]) -> float:
    """
    Calculate the sum of all elements in a list of numbers.

    This function takes a list of floating-point numbers and returns
    their sum.

    Parameters:
    input_list (list of float): A list of numbers to sum.

    Returns:
    float: The sum of the numbers in the input list.
    """
    return sum(input_list)
