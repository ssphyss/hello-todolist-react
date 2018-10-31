import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoItemComplete from './TodoItemComplete'
import './../../sass/all.scss';
import './../../assets/icon-font.css';

class Todolist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [
				{id: 1,	value: 111},
				{id: 2,	value: 222}
			],
			listComplete: [
				{id: 3,	value: 333},
				{id: 4,	value: 444}
			],
			inputValue: ''
			// inputValue2: ''
		}		
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleItemSubmit = this.handleItemSubmit.bind(this);
	}

	render() {
		return (
			<main className="wrapper">
				<section className="section section-todo">
					<div className="todo">
						<h1 className="heading-primary">
							<span className="heading-primary--main">Todo List</span>
							<span className="heading-primary--sub">Built by Phy  for her CSS AND SASS. Copyright © by Phy.</span>
						</h1>											
						<ul className="todo__list">
							<h5>代辦清單</h5>
							{
								this.state.list.map((item)=>{
									return (
										<TodoItem 
											key={item.id}
											value={item.value}
										/>
									)
								})
							}
													
							<h5>已完成</h5>				
							{
								this.state.listComplete.map((item)=>{
									return (
										<TodoItemComplete 
											key={item.id}
											value={item.value}
										/>
									)
								})
							}
							<h5>新增任務</h5>	
							<li className="todo__item--add">						
								<div className="todo__content">
									<div className="form__group">
										<input
											value={this.state.inputValue}
											// defaultValue={this.state.inputValue2}											
											onChange={this.handleInputChange}
											className="form__input" placeholder="請輸入" type="text" 
										/>
									</div>
								</div>
								<div className="todo__actions">
									<a 	
										onClick={this.handleItemSubmit}
										href='./'>
										<i className="todo__icon icon-basic-todolist-pen"></i>
										送出
									</a>
									<a href='./'><i className="todo__icon icon-basic-trashcan"></i>取消</a>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</main>
		);
	}

	// 改變值  
	handleInputChange(e){
		console.log(e.target);
		console.log(e.target.value);
		this.setState({
			inputValue: e.target.value
		})
	}

	// 送出
	handleItemSubmit(e){
		e.preventDefault();
		console.log('送出');
		this.setState((prevState) => ({
			// list : [...prevState.list, prevState.inputValue],
			list : [...prevState.list, { id:prevState.inputValue + '1', value: prevState.inputValue + '2' }],
			inputValue: ''
		}))
	}
}

export default Todolist;
