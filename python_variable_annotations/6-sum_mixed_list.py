#!/usr/bin/env python3
"""Module for summing a mixed list of numbers."""


def sum_mixed_list(input_list: list) -> float:
    """
    Calculate the sum of all elements in a list of numbers.

    This function takes a list of numbers and returns their sum.
    The list can contain a mix of integers and floating-point numbers.

    Parameters:
    input_list (list): A list of numbers to sum.

    Returns:
    float: The sum of the numbers in the input list.
    """
    return sum(input_list)
