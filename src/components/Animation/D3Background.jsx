import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const D3Background = () => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", "0 0 100 100")
      .attr("preserveAspectRatio", "none");

    const circles = svg.selectAll("circle")
      .data(d3.range(10))
      .join("circle")
      .attr("cx", () => Math.random() * 100)
      .attr("cy", () => Math.random() * 100)
      .attr("r", () => Math.random() * 4)
      .attr("fill", "white")
      .attr("opacity", () => Math.random() * 0.2 + 0.1)
      .attr("stroke", "none");

    const animate = () => {
      circles
        .attr("cx", () => Math.random() * 100)
        .attr("cy", () => Math.random() * 100)
        .attr("opacity", () => Math.random() * 0.2 + 0.1);

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div ref={ref} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
  );
};
