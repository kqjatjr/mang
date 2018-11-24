import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './style.css';

class WriteBoard extends Component {
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <br /> <br />
            <h5>제목</h5>
            <Input className="email" placeholder="제목" />
          </FormGroup>
          <FormGroup>
            <h5>본문</h5>
          
          </FormGroup>
          <br />
          <FormGroup>
            <h5>파일첨부</h5>
            <Input type="file" name="file" id="exampleFile" />
          </FormGroup>
          <br /> <br />
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default WriteBoard;
