import React, { Component } from 'react';
import {
  Container,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import { Link } from 'react-router';
import './style.css';

class FreeBoard extends Component {
  render() {
    return (
      <Container>
        <div className="flex">
          <div>
            <Table hover>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                  <th>조회수</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>10</span>
                  </td>
                  <td>가나다</td>
                  <td>김범석</td>
                  <td>김범석</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <span>10</span>
                  </td>
                  <td>가나다</td>
                  <td>김범석</td>
                  <td>김범석</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <span>10</span>
                  </td>
                  <td>가나다</td>
                  <td>김범석</td>
                  <td>김범석</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <span>10</span>
                  </td>
                  <td>가나다</td>
                  <td>김범석</td>
                  <td>김범석</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <span>10</span>
                  </td>
                  <td>가나다</td>
                  <td>김범석</td>
                  <td>김범석</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>
                    <span>10</span>
                  </td>
                  <td>가나다</td>
                  <td>김범석</td>
                  <td>김범석</td>
                  <td>1</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <Pagination aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
          </Pagination>
        </div>
        <button>
          <Link to="/writeboard">글쓰기</Link>
        </button>
      </Container>
    );
  }
}

export default FreeBoard;
