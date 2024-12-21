import React from 'react'

const Id = (props: any) => {
    console.log(props);
  return (
    <div className='bg-green-200 text-red-950 h-screen w-full text-8xl font-extrabold flex justify-center items-center'>
        {props.params.id}
    </div>
  )
}

export default Id

