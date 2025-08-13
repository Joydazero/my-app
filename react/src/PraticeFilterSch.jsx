import React, { useState } from "react";

function PraticeFilterSch() {
    const [products] = useState([
        { id: 1, name: "사과 주스" },
        { id: 2, name: "바나나 스무디" },
        { id: 3, name: "딸기 주스" },
    ]);
    const [keyword, setKeyword] = useState("");
    const filtered = products.filter( (product) => product.name.includes(keyword));
        return(
        <>
            <input type="text"  onChange={(e) => setKeyword(e.target.value)} placeholder="검색어" />
            <ul>
                {
                    filtered.map((p)=>{
                        return(
                            <>
                                <ul>
                                    <li key={p.id}>{p.name}</li>
                                </ul> 
                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default PraticeFilterSch ;