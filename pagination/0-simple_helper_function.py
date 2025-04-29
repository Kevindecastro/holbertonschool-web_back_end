#!/usr/bin/env python3
"""Module pour la fonction d'aide à la pagination simple"""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Retourne un tuple contenant l'index de début et de fin pour la pagination

    Args:
        page (int): Le numéro de la page (commençant à 1)
        page_size (int): Le nombre d'éléments par page

    Returns:
        Tuple[int, int]: L'index de début et l'index de fin
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
