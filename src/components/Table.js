import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { FaSearch } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom'
const Table = () => {

    const columns=[
        {
            name:'ID',
            selector:row=>row.id,
            sortable:true
        },
        {
            name:'Name',
            selector:row=>row.name,
            sortable:true
        },
        {
            name:'Pack Size',
            selector:row=>row.packSize,
            sortable:true
        },
        {
            name:'Category',
            selector:row=>row.category,
            sortable:true
        },
        {
            name:'MRP',
            selector:row=>row.mrp,
            sortable:true
        },
        {
            name:'Image',
            selector:row=>row.image,
            sortable:true
        },
        {
            name:'Status',
            selector:row=>row.status,
            sortable:true,
            cell: row => (
                <div
                  className={`text-white px-2 py-1 rounded ${
                    row.status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                  }`}
                >
                  {row.status}
                </div>
              ),
        }

    ]

    const tableData=[
        {
            id:1,
            name:'sagar',
            packSize:12,
            category:'Engg',
            mrp:200,
            image:"",
            status:'Broken'
        },
        {
            id:2,
            name:'sagar2',
            packSize:12,
            category:'Engg',
            mrp:200,
            image:"",
            status:'Broken'
        },
        {
            id:3,
            name:'tare',
            packSize:12,
            category:'Engg',
            mrp:200,
            image:"",
            status:'Broken'
        },
    ]

    const [records,setRecords]= useState(tableData)

    const handleFilter =(e)=>{
        const newData = tableData.filter(row =>{
            return row.name.includes(e.target.value)
        })

        setRecords(newData)
    }
    const customStyles = {
        rows: {
          style: {
            backgroundColor: '#f3f4f6',
            margin: '5px 0' // Set white background color for all rows
          },
        },
      };
  return (
    <div className='container mt-5'>
         <div className="flex items-center justify-between  p-4">
  {/* Icon */}
  <div className="flex items-center space-x-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
    <h3 className='font-bold pl-10'>Category</h3>
  
  </div>
  <div className='w-[170px] md:w-[400px] md:h-10 h-6 flex items-center  border border-gray-300 rounded-lg  focus:border-purple-900'>
          <span className="flex text-sm md:text-xl ml-6 text-slate-400 md:pr-4 pr-2 cursor-pointer hover:text-slate-500">
            <FaSearch />
            </span>
          <input type="text" onChange={handleFilter} className=" w-full outline-none h-full rounded-full text-[10px] md:text-xl text-center" placeholder='' />
        </div>

  {/* Button */}
  <Link to="/addNewProduct">
  <button className="bg-purple-800 hover:bg-purple-600 text-white font-semibold py-1 px-4 rounded-lg shadow-md">
    Add New
  </button>
  </Link>
</div>
      <DataTable
        columns={columns}
        data={tableData}
        customStyles={customStyles}
        fixedHeader
        pagination
        >

        </DataTable>
    </div>
  )
}

export default Table
