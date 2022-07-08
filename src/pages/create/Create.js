import './create.css';
import { Button, Col, Container, Row, Form, FormLabel, FormSelect } from 'react-bootstrap';
import React from 'react';
import {useDropzone} from 'react-dropzone';

const Create = (props) => {

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: 'image/jpeg,image/png'
  });

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map(e => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <Container>
      <Row className='create section__padding'>
        <Col className="create-container">
          <h1>Create new license sale.</h1>
          <Row>
            <Col>
              <p className='upload-file'>License icon</p>
              <Col className="upload-img-show">
                <section className="container">
                  <Col {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                    <em>(Only *.jpeg and *.png images will be accepted)</em>
                  </Col>
                  <aside>
                    <h4>Accepted files</h4>
                    <ul>{acceptedFileItems}</ul>
                    <h4>Rejected files</h4>
                    <ul>{fileRejectionItems}</ul>
                  </aside>
                </section>
              </Col>
            </Col>
          </Row>
        <Form className='writeForm' autoComplete='off'>
        <Row>
          <Col className="formGroup">
            <FormLabel>Title</FormLabel>
            <input type="text" placeholder='Licence title' autoFocus={true} />
          </Col>
          <Col className="formGroup">
            <FormLabel>N° licenses to sell</FormLabel>
            <input type="text" placeholder='10000'></input>
          </Col>
        </Row>
        <Row>
          <Row>
            <Col className="formGroup">
              <FormLabel>External link</FormLabel>
              <input type="text" placeholder='http//yoursite.io/program' autoFocus={true} />
            </Col>
            <Col className="formGroup">
              <FormLabel>Sale start</FormLabel>
              <input type="date" placeholder='select' ></input>
              <FormLabel>Sale end</FormLabel>
              <input type="date" placeholder='select' ></input>
            </Col>
          </Row>
        </Row>
        <Row>
          <Col className="formGroup">
            <FormLabel>Description</FormLabel>
            <input type="text" placeholder='Description of your licence' autoFocus={true} />
          </Col>
          <Col className="formGroup">
            <FormLabel>Price</FormLabel>
              <Col className="twoForm">
                <input type="text" placeholder='Price'/>
                <FormSelect>
                  <option value="ETH">ETH</option>
                  <option value="BTC">BTC</option>
                  <option value="LTC">LTC</option>
                </FormSelect>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col className="formGroup">
              <FormLabel>Collection</FormLabel>
              <input type="text" placeholder='This is the collection where your item will appear.' autoFocus={true} />
            </Col>
            <Col className="formGroup">
              <FormLabel>Royalties</FormLabel>
              <input type="text" placeholder='10'></input>
              <p>Suggested: 0%, 10%, 20%, 30%. Maximum is 50%</p>
            </Col>
          </Row>
          <Button className='writeButton'>Create Item</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
};

export default Create;
