# Etch-a-Sketch-theOdinProject

A browser-based Etch-A-Sketch project built for The Odin Project Foundations course.

The project creates a flexible drawing grid using JavaScript and Flexbox. Users can hover over squares to create a pixel-style sketch, generate a new grid size, and refresh the sketch.

## Features

- Creates a default `16x16` grid when the page loads
- Generates all grid squares with JavaScript
- Uses Flexbox to arrange squares into a grid
- Allows users to choose a new grid size from `1` to `100`
- Keeps the sketch area the same size at `960px`
- Changes square colors on mouse hover
- Uses random RGB colors
- Adds progressive darkening with each hover interaction
- Refresh button clears the sketch while keeping the current grid size

## Built With

- HTML
- CSS
- JavaScript

## How It Works

The main function creates one square at a time, then a loop repeats that process until the full grid is created.

For example:

```js
size * size