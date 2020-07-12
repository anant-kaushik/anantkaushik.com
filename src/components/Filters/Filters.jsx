import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import "./Filters.css";

const Filters = ({ className, filters, showAllClick, filterClick }) => (
  <div className={"filters-group-wrap " + className}>
    <div className="filters-group">
      <ButtonGroup className="filter-options">
        <Button className="filter" onClick={showAllClick}>
          All
        </Button>
        {filters.map((filter, key) => (
          <Button
            className="filter"
            key={key}
            onClick={(evt) => filterClick(evt, filter.toLowerCase())}
          >
            {filter}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  </div>
);

export default Filters;
