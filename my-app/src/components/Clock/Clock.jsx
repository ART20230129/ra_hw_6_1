import moment from 'moment';
import { useState, useEffect} from 'react';
import classes from './clock.module.css'

export const Clock = (props) => {
	const { name, timezone, onDelete} = props;
	//utcOffset — это значение, которое указывает разницу во времени 
	//между определённой временной зоной и временем по всемирному координированному времени (UTC)
	const mom = moment().utcOffset(Number(timezone*60)).format('HH:mm:ss')
	//console.log('mom ', mom);
	//Создаем сотояние для хранения времени данных часов, чтобы потом изменять с интеррвалом через setTime
	const [time, setTime] = useState(mom)
	console.log(time);
	
	//обновляем время через каждую секунду
	useEffect(()=>{
		const interval = setInterval(()=>{
			setTime(moment().utcOffset(Number(timezone*60)).format('HH:mm:ss'))
		}, 1000)

		// Очистка интервала при размонтировании, например при удалении из DOM этого элемента
		return ()=> clearInterval(interval)
	},[timezone])
	
	return(
		<div className={classes['watch']}>
			<div>
				<div className={classes['city']}>{name}</div>
				<div className={classes['time']}>{time}</div>
			</div>			
			<button onClick={onDelete}>❌</button>
		</div>
	)


}