import React, { Component } from 'react';
import { Link } from 'react-router';
import { Nav } from 'reactstrap';
import './Page.css';

class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <aside className="main">
            <Link to="mission">
              <table>
                <br />
                <h5>롯데리아가서 불고기버거 3개 먹기</h5>
                <h5>현제 남은 시간은 00시00분 입니다.</h5>
                <h5>현제 남은 시간은 00시00분 입니다.</h5>
              </table>
            </Link>
          </aside>
          <aside className="aside aside-1">
            <table>
              <thead>
                <tr>
                  <th>공지사항 /+</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>최초 공지사항입니다.</th>
                </tr>
                <tr>
                  <th>게시글 관련</th>
                </tr>
                <tr>
                  <th>낙서장 공지입니다.</th>
                </tr>
              </tbody>
            </table>
          </aside>
          <aside className="aside aside-2">
            {' '}
            <table>
              <thead>
                <tr>
                  <th>갤러리 /+</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>동네형 </th>
                </tr>
                <tr>
                  <th>요즘 근황 </th>
                </tr>
                <tr>
                  <th>피카츄 실사화 실화?</th>
                </tr>
              </tbody>
            </table>
          </aside>
        </div>
        <div className="wrapper">
          <aside className="middle">
            <table>
              <thead>
                <tr>
                  <th>자유게시판 /+</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>오늘 추천좀</th>
                </tr>
                <tr>
                  <th>오늘 저녁 이거임</th>
                </tr>
                <tr>
                  <th>큰일날뻔한 썰</th>
                </tr>
              </tbody>
            </table>
          </aside>
          <div />
          <aside className="aside aside-1">
            <table>
              <thead>
                <tr>
                  <th>팁게시판 /+</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>밥먹을때 이거로 먹으면</th>
                </tr>
                <tr>
                  <th>팁게시판 ?</th>
                </tr>
                <tr>
                  <th>1빠 </th>
                </tr>
              </tbody>
            </table>
          </aside>
          <aside className="aside aside-2">
            {' '}
            <table>
              <thead>
                <tr>
                  <th>거래게시판 /+</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1인용 탁상 팝니다.</th>
                </tr>
                <tr>
                  <th> </th>
                </tr>
                <tr>
                  <th> </th>
                </tr>
              </tbody>
            </table>
          </aside>
          <aside className="aside aside-2">
            {' '}
            <table>
              <thead>
                <tr>
                  <th>질문게시판 /+</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>이거 어떻게 해야하나요?</th>
                </tr>
                <tr>
                  <th>누군가 계속 처다봐요ㅠㅠ</th>
                </tr>
                <tr>
                  <th>이걸? </th>
                </tr>
              </tbody>
            </table>
          </aside>
        </div>
        <div className="wrapper">
          <aside className="aside aside-1">
            <table>
              <thead>
                <tr>
                  <th>후기게시판 /+</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>롯데리아 신상버거 후기</th>
                </tr>
                <tr>
                  <th>백종원 우동집 후기</th>
                </tr>
                <tr>
                  <th>미스터 피자 신상 후기</th>
                </tr>
              </tbody>
            </table>
          </aside>
          <aside className="aside aside-2">
            {' '}
            <table>
              <thead>
                <tr>
                  <th>요리법게시판 /+</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>이렇게 요리해보세요</th>
                </tr>
                <tr>
                  <th>계란 후라이 리얼 이쁘게 만들기</th>
                </tr>
                <tr>
                  <th>부추전 만들기</th>
                </tr>
              </tbody>
            </table>
          </aside>
        </div>
      </div>
    );
  }
}

export default MainPage;
