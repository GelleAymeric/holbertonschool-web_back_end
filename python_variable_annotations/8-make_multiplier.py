#!/usr/bin/env python3
"""Module function for creating a multiplier function."""


def make_multiplier(multiplier: float) -> callable:
    """
    Create a function that multiplies a number by a given multiplier.

    Parameters:
    multiplier (float): The value to multiply by.

    Returns:
    callable: A function that multiplies a number by the given multiplier.
    """
    def mul(n: float) -> float:
        """
        Multiply a number by a given multiplier.

        Parameters:
        n (float): The number to multiply.

        Returns:
        float: The product of `n` and the multiplier.
        """
        return n * multiplier

    return mul
