import React from 'react';
import Assignment from './Assignment';
import { Container, Row, Col, Grid } from 'react-bootstrap';

export default function AssignmentList({ assignments, checkAssignment }) {
  return assignments.map(assignment => {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Assignment
              key={assignment.id}
              checkAssignment={checkAssignment}
              assignment={assignment}
            />
          </Col>
        </Row>
      </Container>
    );
  });
}
