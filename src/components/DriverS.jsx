import React, { useEffect, useState } from 'react';
import Button from './Button';

export default function DriverS() {
    const handleSubmit = () =>{
        console.log("Submitted")
    }
  return (
    <>
    <h1>F1 Driver Search</h1>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="name, number or team..."/>
        <Button className={"searchbtn"} label={"Search"} />
    </form>
    </>
  )
}
