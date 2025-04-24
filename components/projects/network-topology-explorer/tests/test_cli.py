"""Tests for command-line interface."""
import pytest # type: ignore
from nettopo.cli import main, create_topology, list_topologies, describe_topology


def test_create_topology_valid():
    """Test creating valid topology instances."""
    topo = create_topology('star', 4)
    assert topo.name == 'star'
    assert topo.nodes == 4

    topo = create_topology('bus', 3)
    assert topo.name == 'bus'
    assert topo.nodes == 3


def test_create_topology_invalid():
    """Test creating topology with invalid type."""
    with pytest.raises(ValueError):
        create_topology('invalid', 4)


def test_list_topologies(capsys):
    """Test listing available topologies."""
    list_topologies()
    captured = capsys.readouterr()
    assert 'star' in captured.out
    assert 'bus' in captured.out
    assert 'ring' in captured.out
    assert 'mesh' in captured.out


def test_describe_topology_valid(capsys):
    """Test describing valid topology types."""
    describe_topology('star')
    captured = capsys.readouterr()
    assert 'Star Topology:' in captured.out
    assert 'hub' in captured.out.lower()


def test_describe_topology_invalid(capsys):
    """Test describing invalid topology type."""
    with pytest.raises(SystemExit):
        describe_topology('invalid')
    captured = capsys.readouterr()
    assert 'Unknown topology type' in captured.out


def test_main_list(capsys):
    """Test main function with list command."""
    main(['list'])
    captured = capsys.readouterr()
    assert 'Available network topology types' in captured.out


def test_main_describe(capsys):
    """Test main function with describe command."""
    main(['describe', 'star'])
    captured = capsys.readouterr()
    assert 'Star Topology:' in captured.out


def test_main_render(capsys):
    """Test main function with render command."""
    main(['render', 'star', '--nodes', '3'])
    captured = capsys.readouterr()
    assert 'Star topology with 3 nodes' in captured.out


def test_main_render_invalid_nodes():
    """Test main function with invalid node count."""
    with pytest.raises(SystemExit):
        main(['render', 'star', '--nodes', '1'])