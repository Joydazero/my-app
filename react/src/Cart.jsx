import React from "react";
import { useState } from "react";

function Cart() {
    const [count, setCount ] = useState(0);
    const [products, setProduct] = useState([
        { id: 1, name: '무선 블루투스 이어폰', price: 59000, img: '/sample.png' },
        { id: 2, name: '게이밍 키보드', price: 79000, img: '/sample.png' },
        { id: 3, name: '스마트 워치', price: 129000, img: '/sample.png' },
        { id: 4, name: '핸디 청소기', price: 89000, img: '/sample.png' },
        { id: 5, name: 'LED 스탠드', price: 35000, img: '/sample.png' },
        { id: 6, name: '무선 마우스', price: 29000, img: '/sample.png' },
        { id: 7, name: '아이폰 충전 케이블', price: 12000, img: '/sample.png' },
        { id: 8, name: 'USB 허브 4포트', price: 22000, img: '/sample.png' },
        { id: 9, name: '커피 원두 1kg', price: 45000, img: '/sample.png' },
        { id: 10, name: '무드등 가습기', price: 69000, img: '/sample.png' },
        { id: 11, name: '라면 5개입', price: 5500, img: '/sample.png' },
        { id: 12, name: '고양이 사료 2kg', price: 29000, img: '/sample.png' },
    ]);
    const [cartItems, setCartItems] = useState([]);
    const [ cartCount, setCartCount ] = useState(0);
   
    const addToCart = (item) =>{
        setCartItems( (prev) => [...prev, item])   
    }
    return(
      <>
        <div className="cart">
            <h2>장바구니</h2>
            <div className="total">
                <div className="total-info">

                </div>
            </div>
            <div className="cart-list">
                { cartItems.length === 0 ? (
                    <p>장바구니가 비어있습니다.</p>
                ) : (
                    cartItems.map( (el,index) =>{
                    return(
                        <>                        
                        <div  className="cart-item">
                            <div className="img">
                                    <img src={el.img} alt="" />
                            </div>
                                <h3>{el.name}</h3>          
                                <p><span>{el.price}</span><span className="won">원</span></p>
                                <div className="btns">
                                    <button className="count count-decrease" onClick={ ()=>{                                         

                                    }}>-</button> 
                                    {count}
                                    <button className="count count-increase" onClick={ ()=>{
                                    }}>+</button>                                
                                    <button className="btn del-btn" id="delBtn">삭제</button>
                                    <button className="add-cart" id="addCartBtn" onClick={()=>addToCart(item) }>담기</button>
                                </div>        
                        </div>
                        </>
                    )
                })
                
                )}
            
            </div>
        </div>
        <div className="product-list">
            {
                products.map((item) => {                
                    return(
                        <div className="product-con" key={item.id}>
                            <div className="img">
                                <img src={item.img} alt="" />
                            </div>
                            <h3>{item.name}</h3>          
                            <p><span>{item.price}</span><span className="won">원</span></p>
                            <div className="btns">
                                <button className="count count-decrease" onClick={ ()=>{ count <= 0 ?  null : setCount (count -1 )}}>-</button> 
                                 {count}
                                 <button className="count count-increase" onClick={ ()=>{setCount (count +1 )}}>+</button>                                
                                <button className="btn del-btn" id="delBtn">삭제</button>
                                <button className="add-cart" id="addCartBtn" onClick={()=>addToCart(item) }>담기</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </>  
    )
}

export default Cart;