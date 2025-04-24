"""ASCII renderer for network topologies.

This module provides functionality to render network topologies as ASCII diagrams
in the terminal.
"""
import math
from typing import List, Tuple

from .models import BaseTopology, StarTopology, BusTopology, RingTopology


def calculate_positions(topology: BaseTopology) -> List[Tuple[int, int]]:
    """Calculate node positions based on topology type.
    
    Args:
        topology: The network topology to calculate positions for.
    
    Returns:
        List of (x, y) coordinates for each node.
    """
    if isinstance(topology, StarTopology):
        # Center node at origin, others in a circle
        positions = [(40, 10)]  # Hub at center
        if topology.nodes > 1:
            radius = 8
            for i in range(1, topology.nodes):
                angle = 2 * math.pi * (i - 1) / (topology.nodes - 1)
                x = int(40 + radius * math.cos(angle))
                y = int(10 + radius * math.sin(angle))
                positions.append((x, y))
        return positions
    
    elif isinstance(topology, BusTopology):
        # Nodes in a horizontal line
        return [(35 + i * 10, 10) for i in range(topology.nodes)]
    
    elif isinstance(topology, RingTopology):
        # Nodes in a circle
        radius = 8
        positions = []
        for i in range(topology.nodes):
            angle = 2 * math.pi * i / topology.nodes
            x = int(40 + radius * math.cos(angle))
            y = int(10 + radius * math.sin(angle))
            positions.append((x, y))
        return positions
    
    else:  # Mesh or unknown topology
        # Position nodes in a circle for mesh
        radius = 8
        positions = []
        for i in range(topology.nodes):
            angle = 2 * math.pi * i / topology.nodes
            x = int(40 + radius * math.cos(angle))
            y = int(10 + radius * math.sin(angle))
            positions.append((x, y))
        return positions


def render_topology(topology: BaseTopology) -> str:
    """Render a topology as an ASCII diagram.
    
    Args:
        topology: The network topology to render.
    
    Returns:
        ASCII string representation of the topology.
    """
    positions = calculate_positions(topology)
    width, height = 80, 20
    canvas = [[' ' for _ in range(width)] for _ in range(height)]
    
    # Draw edges
    for edge in topology.edges:
        x1, y1 = positions[edge[0]]
        x2, y2 = positions[edge[1]]
        # Simple line drawing
        dx = x2 - x1
        dy = y2 - y1
        steps = max(abs(dx), abs(dy))
        if steps == 0:
            continue
        x_inc = dx / steps
        y_inc = dy / steps
        x, y = x1, y1
        for _ in range(int(steps)):
            if 0 <= int(x) < width and 0 <= int(y) < height:
                canvas[int(y)][int(x)] = '-'
            x += x_inc
            y += y_inc
    
    # Draw nodes
    for i, (x, y) in enumerate(positions):
        if 0 <= x < width and 0 <= y < height:
            canvas[y][x] = str(i)
    
    # Convert to string
    return '\n'.join(''.join(row) for row in canvas)