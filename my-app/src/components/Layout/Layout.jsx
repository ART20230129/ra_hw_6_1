import { FormClock } from "../FormClock/FormClock";
import { useState } from "react";
import { Clock } from '../Clock'
import { v4 } from 'uuid'
import classes from './layout.module.css'

export const Layout = () => {
	const [clocks, setClocks] = useState([])
	
	//доавление новых часов
	const addClock = (form)=> {
		setClocks((prevState) => [...prevState,{
			id: v4(),
			name: form.name,
			timezone: form.timezone
		}])		
	}

	//удаление выбранных часов
	const onDelete = (id)=>{
		setClocks(clocks.filter((el) => el.id !== id))
	}

	return(
			<div>
				<FormClock  addClock={addClock}/>
				<div className={classes["clocks-container"]}>
					{clocks.map(item => (
					<Clock key={item.id} name={item.name} timezone={item.timezone} onDelete={() => onDelete(item.id)}/>
				))}
				</div>
				

			</div>
			
	)
        
}