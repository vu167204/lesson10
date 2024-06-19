import React from 'react'

export default function nvqCategorylist({rendernvqCategories, onAddNew}) {
    console.log("rendernvqCategories: ",  rendernvqCategories);

    let nvqCategoryElement = rendernvqCategories.map((nvqCategory,index) => {
        return(
            <tr key={index}>
                <th>{index+1}</th>
                <td>{nvqCategory.nvqId}</td>
                <td>{nvqCategory.nvqCategoryName}</td>
                <td>{nvqCategory.nvqCategoryStatus===true?"Hiển thị":"Tạm Khóa"}</td>
            </tr>
        )
    })

    const nvqHandleAdd = () =>{
        onAddNew(true);
    }
    return (
        <div className='container m-2'>
            <h2>Danh sách loại sản phẩm</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã Loại</th>
                        <th>Tên Loại</th>
                        <th>Trạng Thái</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {nvqCategoryElement}
                </tbody>

            </table>
            <button className='btn btn-primary' onClick={nvqHandleAdd}>Thêm mới </button>
        </div>
    )
}
