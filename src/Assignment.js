import React, { setState } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default function Assignment({ assignment, checkAssignment }) {
  function checkClicked() {
    checkAssignment(assignment.id);
  }

  function listItemClicked() {
    console.log('clicked');
  }

  return (
    <ListGroup>
      <ListGroupItem
      //onClick={listItemClicked}
      //style={{ backgroundColor: this.state.color }}
      >
        <input
          className="mr-3"
          type="checkbox"
          checked={assignment.complete}
          onChange={checkClicked}
        />
        {assignment.name}
      </ListGroupItem>
    </ListGroup>
  );
}
