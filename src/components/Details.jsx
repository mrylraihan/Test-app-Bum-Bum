import React from 'react'

function Details({ title, value, type,date, complication }) {
	return (
		<div className='container'>
			<p className='flow'>
				<label>{title}:</label>
                {complication?<span>From:{complication}-To:{date}</span> :<span>Dos:{date}</span>}
                
			</p>
			<p>
				<input type={type ? type : 'text'} placeholder={value} />
			</p>
		</div>
	)
}

export default Details
