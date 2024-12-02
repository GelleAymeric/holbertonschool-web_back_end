#!/usr/bin/env python3
"""Module for mathematical operations, including the floor function."""

def floor(n: float) -> int:
    """
    Convert a floating-point number to an integer by truncating the decimal part.

    This function behaves similarly to the built-in int() function, which truncates
    the decimal part of a floating-point number, effectively rounding towards zero.

    Parameters:
    n (float): The floating-point number to convert.

    Returns:
    int: The integer part of `n`, truncating any decimal digits.
    """

    return int(n)
