"""Tests for network topology renderer."""
from nettopo.models import StarTopology, BusTopology
from nettopo.renderer import render_topology, calculate_positions


def test_calculate_positions_star():
    """Test position calculation for star topology."""
    topo = StarTopology(name='star', nodes=3, edges=[])
    positions = calculate_positions(topo)
    
    # Should have exactly one position per node
    assert len(positions) == 3
    
    # Hub should be at center position
    hub_x, hub_y = positions[0]
    assert hub_x == 40
    assert hub_y == 10
    
    # Other nodes should be equidistant from hub
    distances = []
    for x, y in positions[1:]:
        dx = x - hub_x
        dy = y - hub_y
        distance = (dx * dx + dy * dy) ** 0.5
        distances.append(distance)
    
    # All nodes should be same distance from hub
    assert len(set(int(d) for d in distances)) == 1


def test_calculate_positions_bus():
    """Test position calculation for bus topology."""
    topo = BusTopology(name='bus', nodes=3, edges=[])
    positions = calculate_positions(topo)
    
    # Should have exactly one position per node
    assert len(positions) == 3
    
    # All nodes should be at same y-coordinate
    y_coords = [y for _, y in positions]
    assert len(set(y_coords)) == 1
    
    # X coordinates should be evenly spaced
    x_coords = [x for x, _ in positions]
    diffs = [x_coords[i+1] - x_coords[i] for i in range(len(x_coords)-1)]
    assert len(set(diffs)) == 1  # All differences should be equal


def test_render_topology():
    """Test topology rendering produces valid ASCII output."""
    topo = StarTopology(name='star', nodes=3, edges=[])
    output = render_topology(topo)
    
    # Output should be a multi-line string
    assert isinstance(output, str)
    assert '\n' in output
    
    # Should contain node numbers
    for i in range(3):
        assert str(i) in output
    
    # Should contain connection lines
    assert '-' in output