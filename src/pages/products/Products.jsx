import React, { useState } from 'react'
import "./products.css"
import { ProductLists } from '../../dummyData'
import { DataGrid } from '@mui/x-data-grid'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

export const Products = () => {
    const [data,setData] = useState(ProductLists);

    const handleDelete = (id) => {
        setData(data.filter(item=>item.id !== id))
    }

    const userColumns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 120
        },
        {
            field: 'product',
            headerName: 'Product', 
            width: 200, 
            renderCell: (params) => {
                return (
                    <div className='productListUser'>
                        <img className='productNameImg' src={params.row.avatar} alt="" />
                        {params.row.name}
                    </div>
                )
            }
        },
        {
            field: 'stocks',
            headerName: 'Stock',
            width: 200,
        },
        {
            field: 'status', 
            headerName: 'Status', 
            width: 160, 
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
        },
        { 
            field: 'price', 
            headerName: 'Price', 
            width: 200 
        },
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params)=> {
                return (
                    <div className='divButton'>
                    <Link to={"/products/" + params.row.id}>
                        <button className="productEditsButton"><EditIcon/></button>
                    </Link>
                    <button className="productDeleteButton" onClick={()=>handleDelete(params.row.id)}><DeleteIcon/></button>
                    </div>
                )
            }
        },
    ];

    return (
        <div className='products'>
            <DataGrid
                rows={data}
                columns={userColumns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[0, 5, 10]}
                checkboxSelection
            />
        </div>
    )
}
