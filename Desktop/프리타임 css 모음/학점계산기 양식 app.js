import React, { useState } from 'react';
import { Row, Card, Table, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [subjects, setSubjects] = useState([
    { subject: '', score: '', grade: '', isMajor: false },
  ]);

  const handleAddRow = () => {
    setSubjects([...subjects, { subject: '', score: '', grade: '', isMajor: false }]);
  };

  return (
    <div className='my-5 mx-5'>
      <h1 className='text-center mb-5'>학점 계산기 페이지</h1>
      <Row className='justify-content-center'>
        <Card className='p-3'>
          <div className='Button text-end'>
            <Button variant="success" size="sm">
              계산하기
            </Button>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className='text-center'>과목</th>
                <th className='text-center'>점수</th>
                <th className='text-center'>학점</th>
                <th className='text-center'>전공</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr key={index}>
                  <td className='text-center'>
                    <Form.Control value={subject.subject} />
                  </td>
                  <td className='text-center'>
                    <Form.Control value={subject.score} />
                  </td>
                  <td className='text-center'>
                    <Form.Control value={subject.grade} />
                  </td>
                  <td className='text-center'>
                    <input type="checkbox" checked={subject.isMajor} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
		  
          <div className='Button text-end'>
            <Button id="add" variant="warning" size="sm" onClick={handleAddRow}>
              추가
            </Button>
          </div>
          <Table>
            <tr>
              <th className='text-center'>총</th>
              <th className='text-center'>0</th>
              <th className='text-center'>이수학점</th>
              <th className='text-center'>0</th>
              <th className='text-center'>학점변환</th>
              <th className='text-center'>0</th>
              <th className='text-center'>
                <div>
                  <Button variant="primary" size="lg">
                    저장
                  </Button>
                </div>
              </th>
            </tr>
          </Table>
        </Card>
      </Row>
    </div>
  );
}

export default App;
