import React, { useState } from 'react'
import "./userlist.css"
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../dummyData';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';


export const UserList = () => {

    const [data,setData] = useState(userRows);

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
            field: 'username',
            headerName: 'User Name', 
            width: 200, 
            renderCell: (params) => {
                return (
                    <div className='userName'>
                        <img className='userNameImg' src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
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
            field: 'transactions', 
            headerName: 'Transactions', 
            width: 200 
        },
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params)=> {
                return (
                    <div className='divButton'>
                    <Link to={"/user/" + params.row.id}>
                        <button className="editButton"><EditIcon/></button>
                    </Link>
                    <button className="deleteButton" onClick={()=>handleDelete(params.row.id)}><DeleteIcon/></button>
                    </div>
                )
            }
        },
    ];

    return (
        <div className='userList'>
            <DataGrid
                rows={data}
                columns={userColumns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[0, 5,10]}
                checkboxSelection
            />

        </div>
    )
}
