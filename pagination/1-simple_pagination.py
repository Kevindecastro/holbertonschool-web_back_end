#!/usr/bin/env python3
"""Pagination simple du dataset des prénoms de bébés populaires"""

import csv
import math
from typing import List, Tuple


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


class Server:
    """Classe serveur pour paginer un dataset de prénoms populaires"""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Retourne le dataset en cache (sans l'en-tête)"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]  # Supprime l'en-tête
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Retourne une page du dataset

        Args:
            page (int): numéro de la page (1-indexé)
            page_size (int): nombre d'éléments par page

        Returns:
            List[List]: une sous-liste du dataset correspondant
                        à la page demandée
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start, end = index_range(page, page_size)
        dataset = self.dataset()

        if start >= len(dataset):
            return []

        return dataset[start:end]
