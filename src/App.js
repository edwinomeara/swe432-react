import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import uuidv4 from 'uuid/v4';
import AssignmentList from './AssignmentList';
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Grid } from 'react-bootstrap';

const LocalStorageKey = 'assignmentApp.assignments';

function App() {
  const [assignments, setAssignments] = useState([]);
  const assignmentName = useRef();

  //loads the assignments
  useEffect(() => {
    const storedAssignments = JSON.parse(localStorage.getItem(LocalStorageKey));
    if (storedAssignments) setAssignments(storedAssignments);
  }, []);

  //stores the assignments in local storage
  useEffect(() => {
    localStorage.setItem(LocalStorageKey, JSON.stringify(assignments));
  }, [assignments]);

  //adding assignments
  function addAssignment(e) {
    const name = assignmentName.current.value;
    if (name === '') return;
    setAssignments(prevAssignments => {
      return [...prevAssignments, { id: uuidv4(), name, complete: false }];
    });
    assignmentName.current.value = null;
  }

  //check assignment
  function checkAssignment(id) {
    const newAssignments = [...assignments];
    const assignment = newAssignments.find(assignment => assignment.id === id);
    assignment.complete = !assignment.complete;
    setAssignments(newAssignments);
  }

  //remove assignment
  function removeAssignment() {
    const newAssignments = assignments.filter(
      assignment => !assignment.complete
    );
    setAssignments(newAssignments);
  }

  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
            <input
              className="userInput"
              ref={assignmentName}
              type="text"
              placeholder="Type in assignment here"
            />
          </Col>
          <Col>
            <Button className="" variant="primary" onClick={addAssignment}>
              Add Assignment To List
            </Button>
          </Col>
          <Col>
            <Button className="" variant="danger" onClick={removeAssignment}>
              Remove Completed Assignments
            </Button>
          </Col>
        </Row>
      </Container>

      <Container fluid="md" className="mt-3 mb-3">
        <Row>
          <Col>
            <div>
              <label className="text1">Assignments you need to complete:</label>
              <label className="text2">
                {assignments.filter(assignment => !assignment.complete).length}
              </label>
            </div>
          </Col>
        </Row>
      </Container>

      <AssignmentList
        assignments={assignments}
        checkAssignment={checkAssignment}
      />
    </>
  );
}

export default App;
