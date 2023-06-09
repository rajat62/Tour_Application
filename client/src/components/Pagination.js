import React from 'react'
import {
      MDBPagination,
      MDBPaginationItem,
      MDBBtn
} from "mdb-react-ui-kit"
import { current } from '@reduxjs/toolkit';
const Pagination = ({setCurrentPage, currentPage, numberOfPages, dispatch}) => {

      const renderPagination =()=>{
            if((currentPage=== numberOfPages &&currentPage===1) || numberOfPages===0) return (<></>);

            else if(currentPage===1){
                  return (
                        <MDBPagination center className='mb-0'>
                              <MDBPaginationItem>
                                    <p className='fw-bold mt-1'>1</p>
                              </MDBPaginationItem>
                              <MDBPaginationItem>
                                    <MDBBtn rounded className='mx-2'
                                    onClick={()=>dispatch(setCurrentPage(currentPage+1))}>
                                          Next
                                    </MDBBtn>
                              </MDBPaginationItem>
                        </MDBPagination>
                  )
            }
            else if (currentPage !== numberOfPages){
                  return (
                        <MDBPagination center className='mb-0'>
                               <MDBPaginationItem>
                                    <MDBBtn rounded className='mx-2'
                                    onClick={()=>dispatch(setCurrentPage(currentPage-1))}>
                                          Previous
                                    </MDBBtn>
                              </MDBPaginationItem>
                              <MDBPaginationItem>
                                    <MDBBtn rounded className='mx-2'
                                    onClick={()=>dispatch(setCurrentPage(currentPage+1))}>
                                          Next
                                    </MDBBtn>
                              </MDBPaginationItem>
                              <MDBPaginationItem>
                                    <p className='fw-bold mt-1'>{currentPage}</p>
                              </MDBPaginationItem>
                             
                        </MDBPagination>
                  )
            }
            else{
                  return (
                        <MDBPagination center className='mb-0'>
                               <MDBPaginationItem>
                                    <MDBBtn rounded className='mx-2'
                                    onClick={()=>dispatch(setCurrentPage(currentPage-1))}>
                                          Previous
                                    </MDBBtn>
                              </MDBPaginationItem>
                              <MDBPaginationItem>
                                    <p className='fw-bold mt-1'>{currentPage}</p>
                              </MDBPaginationItem>
                        </MDBPagination>
                  )
            }
      }

  return (
    <div className='mt-4'>{
            renderPagination()
      }</div>
  )
}

export default Pagination