import React, { useEffect } from 'react'
import {
  MDBCol, MDBContainer, MDBRow, MDBTypography
} from "mdb-react-ui-kit";
import{useSelector, useDispatch} from "react-redux";
import {getTours, setCurrentPage} from "../Redux/feature/tourSlice"
import CardTour from '../components/CardTour';
import Spinner from '../components/Spinner';
import Pagination from '../components/Pagination';
const Home = () => {

  const {tours, loading, currentPage, numberOfPages} = useSelector((state)=> ({...state.tour}))
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getTours(currentPage));
  }, [currentPage])
  
  if(loading){
    return <Spinner/>
  }

  return (
    <div style={{
      margin:"auto",
      padding:"15px",
      maxWidth:"1000px",
      alignContent:"center"
  }}>
    <MDBRow className='mt-5'>
        {
          tours.length === 0 &&(
            <MDBTypography className='text-center mb-0' tag="h2">
              No Tours Found
            </MDBTypography>
          )
        }
      <MDBCol>
        <MDBContainer>
          <MDBRow className='row-cols-1 row-cols-md-3 g-2 mt-2'>
            {tours && tours.map((item,index)=>{
             return <CardTour key={index} {...item}/>
            })}
          </MDBRow>
        </MDBContainer>
      </MDBCol>
    </MDBRow>
    <Pagination
      setCurrentPage={setCurrentPage}
      numberOfPages={numberOfPages}
      currentPage={currentPage}
      dispatch={dispatch}
    />
  </div>
  )
}

export default Home