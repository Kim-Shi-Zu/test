"""Network topology data models.

This module defines the data models for different network topologies including
Star, Bus, Ring, and Mesh networks.
"""
from dataclasses import dataclass
from typing import List, Tuple


@dataclass
class BaseTopology:
    """Base class for all network topologies."""
    name: str
    nodes: int
    edges: List[Tuple[int, int]]

    def __post_init__(self):
        """Validate the topology configuration."""
        if self.nodes < 2:
            raise ValueError("Network must have at least 2 nodes")


@dataclass
class StarTopology(BaseTopology):
    """Star topology where all nodes connect to a central hub."""
    def __post_init__(self):
        super().__post_init__()
        self.edges = [(0, i) for i in range(1, self.nodes)]


@dataclass
class BusTopology(BaseTopology):
    """Bus topology where nodes are connected in a linear fashion."""
    def __post_init__(self):
        super().__post_init__()
        self.edges = [(i, i + 1) for i in range(self.nodes - 1)]


@dataclass
class RingTopology(BaseTopology):
    """Ring topology where each node connects to exactly two other nodes."""
    def __post_init__(self):
        super().__post_init__()
        self.edges = [(i, (i + 1) % self.nodes) for i in range(self.nodes)]


@dataclass
class MeshTopology(BaseTopology):
    """Mesh topology where each node connects to every other node."""
    def __post_init__(self):
        super().__post_init__()
        self.edges = [(i, j) 
                     for i in range(self.nodes) 
                     for j in range(i + 1, self.nodes)]