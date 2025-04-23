#!/usr/bin/env python3
"""Module for summing a list of floats with type annotations"""

from typing import List

def sum_list(input_list: List[float]) -> float:
    """Sum all elements in a list of floats"""
    return sum(input_list)
