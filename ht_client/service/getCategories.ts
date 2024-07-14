import axiosClient from '../config/axiosClient'
import React from 'react'

let data:any
React.useEffect(()=>{
  const getCategories = async () => {
    const res = await axiosClient.get('localhost:9999/categories/all')
    console.log(res.data);
    data = res.data
  }
  getCategories()
}, [])

export default {data}