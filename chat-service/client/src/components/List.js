import React from 'react'
import { Link } from 'react-router-dom'

function List() {
  return (
    <div className="chat-list" style={{ float: 'left'}}>
      <ul>
        <Link to="/">
          <li>
            <span className="list-username">홍길동</span>
            <span className="list-time">23:00</span>
            <span className="list-message">[쿠팡] 로켓배송 1박스 문 앞(으)로 배송완료했습니다.</span>
          </li>
        </Link>
        <Link to="/1">
          <li>
            <span className="list-username">홍길동</span>
            <span className="list-time">23:00</span>
            <span className="list-message">[쿠팡] 로켓배송 1박스 문 앞(으)로 배송완료했습니다.</span>
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default List
