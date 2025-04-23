#!/usr/bin/env python3
"""Module for creating a multiplier function with type annotations"""


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by a multiplier"""
    def multiplier_function(x: float) -> float:
        return x * multiplier
    return multiplier_function
