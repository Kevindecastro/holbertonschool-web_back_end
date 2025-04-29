#!/usr/bin/env python3
"""
Pagination hypermédia résiliente aux suppressions
"""

import csv
import math
from typing import List, Dict


class Server:
    """Classe serveur pour paginer un dataset de prénoms de bébés populaires"""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Charge le dataset et le met en cache (sans l'en-tête)"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]  # Supprimer l'en-tête
        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Indexe le dataset en mémoire avec des clés numériques stables"""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {i: row for i, row in enumerate(dataset)}
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Retourne une page du dataset à partir d’un index donné,
        même si des lignes ont été supprimées

        Args:
            index (int): Index de départ
            page_size (int): Nombre d’éléments à récupérer

        Returns:
            dict: Contient index, next_index, page_size et data
        """
        assert isinstance(index, int) and index >= 0
        assert isinstance(page_size, int) and page_size > 0

        indexed_data = self.indexed_dataset()
        assert index < len(self.dataset())  # s’assurer que l’index est valide

        data = []
        current_index = index

        # Remplir `data` jusqu’à page_size éléments valides
        while len(data) < page_size and current_index < len(self.dataset()):
            if current_index in indexed_data:
                data.append(indexed_data[current_index])
            current_index += 1

        return {
            "index": index,
            "data": data,
            "page_size": len(data),
            "next_index": current_index
        }
