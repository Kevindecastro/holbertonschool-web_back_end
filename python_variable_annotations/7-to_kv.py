#!/usr/bin/env python3
"""Module for creating a tuple from a string and int/float"""

from typing import Union, Tuple

def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Create a tuple with a string and the square of a number"""
    return (k, v ** 2)
