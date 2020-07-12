import React, { Component } from "react";
import Shuffle from "shufflejs";

import { Filters } from "components";
import { ProjectGrid } from "containers";

class ProjectShuffle extends Component {
  constructor(props) {
    super(props);
    this.shuffler = React.createRef();
    this.sizer = React.createRef();
    this.active = undefined;
  }

  componentDidMount() {
    this.shuffle = new Shuffle(this.shuffler.current, {
      itemSelector: ".project-item",
      sizer: this.sizer.current,
    });
  }

  componentDidUpdate() {
    // Notify shuffle to dump the elements it's currently holding and consider
    // all elements matching the `itemSelector` as new.
    this.shuffle.resetItems();
  }

  componentWillUnmount() {
    // Dispose of shuffle when it will be removed from the DOM.
    this.shuffle.destroy();
    this.shuffle = null;
  }

  handleFilterClick(evt, filterGroup) {
    const btn = evt.currentTarget;

    btn.classList.add("active");

    if (this.active && this.active !== btn) {
      this.active.classList.remove("active");
    }

    this.active = btn;

    // Shuffle.ALL_ITEMS
    this.shuffle.filter(filterGroup);
  }

  render() {
    const { filters, projects } = this.props;
    return (
      <>
        <Filters
          className="top_30 bottom_15"
          filters={filters}
          showAllClick={(evt) => this.handleFilterClick(evt, Shuffle.ALL_ITEMS)}
          filterClick={(evt, grp) => this.handleFilterClick(evt, grp)}
        />
        <ProjectGrid
          shuffler={this.shuffler}
          sizer={this.sizer}
          projects={projects}
        />
      </>
    );
  }
}

export default ProjectShuffle;
