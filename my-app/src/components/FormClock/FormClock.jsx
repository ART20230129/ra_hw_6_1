import { useState } from "react"
import classes from './formClock.module.css'

export const FormClock = ({addClock})=> {
		//начальное состояние
		const [form, setForm] = useState({
			name: '',
			timezone: '',
		});

		// обработчик изменения начального состояния
		const handleChange = ({ target }) => {
			setForm({ ...form, [target.name]: target.value })					
		}

		//Обработчик события отправки формы.
		const handleSubmit = (e)=>{
			e.preventDefault();
			if(!form.name || !form.timezone){
				return alert('Заполните все поля!')
			} else {
				addClock(form) //передача данных из формы для создания новых часов
				//очищаем инпуты формы после отправки их содежимого			
				setForm({
					name: '',
					timezone: ''
				})
			}				
		
		}

        return(
			<form className={classes["form-container"]} onSubmit={handleSubmit}>
				<div className={classes["content"]}>
					<label htmlFor="name">Город</label>
					<input type="text" id='name' name='name' value={form.name} onChange={handleChange}/>
				</div>
				<div className={classes["content"]}>
					<label htmlFor="timezone">Временная зона</label>
					<input type="number" id='timezone' name='timezone' value={form.timezone} onChange={handleChange}/>
				</div>
				<div className={classes["content"]}>
					<button type="submit" className={classes["form-button"]}>Добавить</button>
				</div>					
			</form>
	)
}