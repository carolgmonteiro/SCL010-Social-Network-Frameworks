import React, { Component, Fragment } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    return (
      <Fragment>
        <h1>Events</h1>
        {this.props.events.map(event => (
          <EventListItem key={event.id} event={event} />
        ))}
      </Fragment>
    );
  }
}

export default EventList;
