# Network Topology Explorer

A command-line tool for exploring and visualizing different network topology types including Star, Bus, Ring, and Mesh networks.

## Installation

```bash
# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install the package
pip install .
```

## Usage

The `nettopo` CLI tool provides several commands to work with network topologies:

```bash
# List available topology types
nettopo list

# Get detailed description of a specific topology
nettopo describe star
nettopo describe bus
nettopo describe ring
nettopo describe mesh

# Render an ASCII visualization of a topology
nettopo render star --nodes 5
nettopo render bus --nodes 4
nettopo render ring --nodes 6
nettopo render mesh --nodes 4
```

## Development

```bash
# Install development dependencies
pip install -r requirements-dev.txt

# Run tests
pytest
```

## License

MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.