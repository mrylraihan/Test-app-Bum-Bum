import React from 'react'
import Details from './Details'

function Group({data}) {
  return (
		<div className='app'>
			<h1>{data.header}</h1>
			{data.BodyData.map(ele=>{
                return <Details title={ele.title} value={ele.title} type={ele.type} date={ele.date} complication={ele.complication}/>
            })}
		</div>
	)
}

export default Group