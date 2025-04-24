"""Command-line interface for the network topology explorer.

This module provides the CLI interface for exploring and visualizing network
topologies.
"""
import argparse
import sys
from typing import List

from . import models
from .renderer import render_topology


def create_topology(topology_type: str, nodes: int) -> models.BaseTopology:
    """Create a topology instance based on the type and number of nodes.
    
    Args:
        topology_type: The type of topology to create (star, bus, ring, mesh)
        nodes: Number of nodes in the topology
        
    Returns:
        An instance of the appropriate topology class
        
    Raises:
        ValueError: If the topology type is unknown
    """
    topology_map = {
        'star': models.StarTopology,
        'bus': models.BusTopology,
        'ring': models.RingTopology,
        'mesh': models.MeshTopology,
    }
    
    if topology_type not in topology_map:
        raise ValueError(f"Unknown topology type: {topology_type}")
        
    topology_class = topology_map[topology_type]
    return topology_class(name=topology_type, nodes=nodes, edges=[])


def list_topologies() -> None:
    """Print available topology types and their descriptions."""
    print("Available network topology types:\n")
    print("star  - All nodes connect to a central hub node")
    print("bus   - Nodes are connected in a linear chain")
    print("ring  - Each node connects to exactly two other nodes in a circle")
    print("mesh  - Each node connects to every other node")


def describe_topology(topology_type: str) -> None:
    """Print a detailed description of a specific topology type.
    
    Args:
        topology_type: The type of topology to describe
    """
    descriptions = {
        'star': """Star Topology:
- All nodes connect directly to a central hub
- Easy to add/remove nodes
- Single point of failure at the hub
- Commonly used in home/office networks""",
        
        'bus': """Bus Topology:
- All nodes connect to a single backbone cable
- Simple and cost-effective
- Limited by cable length and number of nodes
- Historic topology, less common today""",
        
        'ring': """Ring Topology:
- Each node connects to exactly two neighbors
- Data flows in one direction
- No central bottleneck
- Failure of one node can affect the network""",
        
        'mesh': """Mesh Topology:
- Each node connects to every other node
- Highly redundant and fault-tolerant
- Complex and expensive to implement
- Common in wireless and backbone networks"""
    }
    
    if topology_type not in descriptions:
        print(f"Unknown topology type: {topology_type}")
        sys.exit(1)
        
    print(descriptions[topology_type])


def main(args: List[str] = None) -> None:
    """Main entry point for the CLI.
    
    Args:
        args: Command line arguments (uses sys.argv if None)
    """
    parser = argparse.ArgumentParser(
        description="Network Topology Explorer - Visualize and learn about "
                  "different network topologies"
    )
    
    subparsers = parser.add_subparsers(dest='command', required=True)
    
    # List command
    subparsers.add_parser(
        'list',
        help="List available topology types"
    )
    
    # Describe command
    describe_parser = subparsers.add_parser(
        'describe',
        help="Show detailed description of a topology type"
    )
    describe_parser.add_argument(
        'topology',
        choices=['star', 'bus', 'ring', 'mesh'],
        help="Type of topology to describe"
    )
    
    # Render command
    render_parser = subparsers.add_parser(
        'render',
        help="Generate ASCII visualization of a topology"
    )
    render_parser.add_argument(
        'topology',
        choices=['star', 'bus', 'ring', 'mesh'],
        help="Type of topology to render"
    )
    render_parser.add_argument(
        '--nodes',
        type=int,
        default=4,
        help="Number of nodes in the topology (default: 4)"
    )
    
    args = parser.parse_args(args)
    
    if args.command == 'list':
        list_topologies()
    elif args.command == 'describe':
        describe_topology(args.topology)
    elif args.command == 'render':
        try:
            topology = create_topology(args.topology, args.nodes)
            print(f"\n{args.topology.title()} topology with {args.nodes} nodes:\n")
            print(render_topology(topology))
        except ValueError as e:
            print(f"Error: {e}", file=sys.stderr)
            sys.exit(1)


if __name__ == '__main__':
    main()