import React, { useEffect } from "react";
import * as d3 from "d3";
import '../App.css';

const AppOther1 = () => {
  useEffect(() => {
      const svg = d3.select("#area");
      svg.selectAll('*').remove();

      svg
        .append("circle")
        .attr("cx", 40)
        .attr("cy", 40)
        .attr("r", 40)
        .style("fill", "blue");
      svg
        .append("circle")
        .attr("cx", 120)
        .attr("cy", 40)
        .attr("r", 40)
        .style("fill", "red");
      svg
        .append("circle")
        .attr("cx", 80)
        .attr("cy", 110)
        .attr("r", 40)
        .style("fill", "green");
    }, []);
  
    return (
      <div className='App'>
        <header className='App-header'>
        <svg className="App-logo" id="area" height={150} width={160}/>
        </header>
      </div>
    );
  }

export  default AppOther1;