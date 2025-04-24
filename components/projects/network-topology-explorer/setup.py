from setuptools import setup, find_packages # type: ignore

setup(
    name="nettopo",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[],  # No external dependencies required
    entry_points={
        'console_scripts': [
            'nettopo=nettopo.cli:main',
        ],
    },
    author="GitHub Copilot",
    author_email="copilot@github.com",
    description="A tool for exploring and visualizing network topologies",
    long_description=open('README.md').read(),
    long_description_content_type="text/markdown",
    keywords="network topology visualization cli",
    python_requires=">=3.7",
    classifiers=[
        "Development Status :: 3 - Alpha",
        "Intended Audience :: Education",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Topic :: Education",
        "Topic :: System :: Networking",
    ],
)