import React from 'react'
import { Card,CardContent,Typography } from '@mui/material';

function InfoBox({title,cases,total}) {
    return (
        <Card  className='InfoBox' >

         <CardContent>

        <Typography className='infoBox_title'  color='primary' >
        {title}
        </Typography>

        <h2 className='infoBox_cases' >{cases}</h2>
     
        <Typography  className='infoBox_total'   color='primary' >
            {total}Total
        </Typography>

        </CardContent >

        </Card>
    )
}

export default InfoBox





// import React,{useState,useEffect} from 'react'

// const Api = () => {
// const [data,setData] =useState([])

//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => setData(json))

//     console.log(data)

//     useEffect(() => {
//         return () => {
//         setData()
            
//         }
//     }, [])

//     console.log(data)
  
//     return (
//         <>
//         <h1 className="text-center text-danger">Api with fetch and Axios</h1>

//         <div>All Deaths</div>
//             {
//                 data.length >0 ? data.map((val) => {
//                     return (
//                     <p>{val.death}</p>
//                     )
//                 }):<p>No Data</p>
//             }
            
//         </>
//     )




// }
// export default Api;