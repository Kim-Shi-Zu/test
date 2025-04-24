"""Tests for network topology models."""
import pytest # type: ignore

from nettopo.models import (
    StarTopology,
    BusTopology,
    RingTopology,
    MeshTopology
)


def test_star_topology():
    """Test star topology edge generation."""
    topo = StarTopology(name='star', nodes=4, edges=[])
    assert len(topo.edges) == 3  # 3 edges from hub to other nodes
    assert all(edge[0] == 0 for edge in topo.edges)  # All edges start at hub
    assert set(edge[1] for edge in topo.edges) == {1, 2, 3}


def test_bus_topology():
    """Test bus topology edge generation."""
    topo = BusTopology(name='bus', nodes=4, edges=[])
    assert len(topo.edges) == 3  # 3 edges connecting 4 nodes linearly
    assert topo.edges == [(0, 1), (1, 2), (2, 3)]


def test_ring_topology():
    """Test ring topology edge generation."""
    topo = RingTopology(name='ring', nodes=4, edges=[])
    assert len(topo.edges) == 4  # 4 edges connecting nodes in a circle
    assert topo.edges == [(0, 1), (1, 2), (2, 3), (3, 0)]


def test_mesh_topology():
    """Test mesh topology edge generation."""
    topo = MeshTopology(name='mesh', nodes=4, edges=[])
    assert len(topo.edges) == 6  # n*(n-1)/2 edges for fully connected mesh
    # Check each node connects to every other node
    nodes = set(range(4))
    for i in range(4):
        connected = {edge[1] for edge in topo.edges if edge[0] == i}
        connected.update(edge[0] for edge in topo.edges if edge[1] == i)
        assert connected == nodes - {i}


def test_invalid_node_count():
    """Test validation of minimum node count."""
    with pytest.raises(ValueError):
        StarTopology(name='star', nodes=1, edges=[])