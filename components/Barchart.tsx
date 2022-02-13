import React from "react";
import useD3 from "../hooks/D3hook";
import * as d3 from "d3";
import { NumberValue } from "d3";

export default function BarChart({ data }: any) {
  const ref = useD3(
    (svg: any) => {
      const height = 500;
      const width = 500;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };

      const x = d3
        .scaleBand()
        .domain(data.map((d: any) => d.date))
        .rangeRound([margin.left, width / 2.5])
        .padding(0.01);

      const y1 = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, (d: any) => d.amount),
        ] as Iterable<NumberValue>)
        .rangeRound([height - margin.bottom, margin.top]);

      const xAxis = (g: any) =>
        g.attr("transform", `translate(0,${height - margin.bottom})`).call(
          d3
            .axisBottom(x)
            .tickValues(
              d3
                .ticks(
                  d3.min(x.domain()) as unknown as number,
                  d3.max(x.domain()) as unknown as number,
                  width / 40
                )
                .filter(
                  (v) => x(v as unknown as string) !== undefined
                ) as Iterable<string>
            )
            .tickSizeOuter(0)
        );

      const y1Axis = (g: any) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .style("color", "#065f46")
          .call(d3.axisLeft(y1).ticks(null, "s"))
          .call((g: any) => g.select(".domain").remove())
          .call((g: any) =>
            g
              .append("text")
              .attr("x", -margin.left)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text(data.y1)
          );

      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(y1Axis);

      svg
        .select(".plot-area")
        .attr("fill", "#065f46")
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", (d: any) => x(d.date))
        .attr("width", width / 10)
        .attr("y", (d: any) => y1(d.amount))
        .attr("height", (d: any) => y1(0) - y1(d.amount));
    },
    [data.length]
  );

  return (
    <svg
      ref={ref}
      style={{
        height: 500,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
}
