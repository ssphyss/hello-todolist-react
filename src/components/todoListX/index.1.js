import React, { Component } from 'react';
import TodoItem from './TodoItem'
import './../../sass/all.scss';
import './../../assets/icon-font.css';

class Todolist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: [{id:"1",content: 'AA'},{id:"2", content: 'BB'}],	
			listComplete: [3, 4]
		}
		this.handleInputChange = this.handleInputChange.bind(this);		
		this.handleItemSubmit = this.handleItemSubmit.bind(this);
		// this.handleItemDelete = this.handleItemDelete.bind(this);
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
					{this.getTodoItem()	}
					
					<h5>已完成</h5>				
					{/* <li className="todo__item--complete">
						<div className="form__checkbox-group">
							<input type="checkbox" className="form__checkbox-input" id="r4" />
							<label htmlFor="r4" className="form__checkbox-label">
								<span className="form__checkbox-button"></span>									         
							</label>               
						</div>
						<div className="todo__content">
							<div className="form__group">
								<input className="form__input" placeholder="請輸入" type="text" />
							</div>
						</div>
						<div className="todo__actions">
							<a href='./'><i className="todo__icon icon-basic-todolist-pen"></i>編輯</a>
							<a href='./'><i className="todo__icon icon-basic-trashcan"></i>刪除</a>
						</div>
					</li> */}
					<h5>新增任務</h5>	
					<li className="todo__item--add">						
						<div className="todo__content">
							<div className="form__group">
								<input
									value={this.state.inputValue}
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
	getTodoItem(){
		return this.state.list.map((item)=>{
			console.log('iii', item)
			return (
				<TodoItem 
					key={item.id}
					content={item.content}
				/>
				
			)
		})
	}
	

	// handleInputBlur(e, index){
	// 	// this.setState((prevState) => ({
	// 	// 	list : [...prevState.list],
	// 	// 	// list : [...prevState.list, prevState.inputValue],
	// 	// 	inputValue: this.state.inputValue
	// 	// }))
	// 	const value = e.target.value;
	// 	this.setState((prevState) => {
	// 		const list = [...prevState.list];		
	// 		const inputValue = value;
	// 		return {list}
	// 	})
	// }

	// handleItemDelete(index){
	// 	this.setState((prevState) => {
	// 		const list = [...prevState.list];
	// 		list.splice(index, 1);
	// 		return {list}
	// 	})
	// }

	handleInputChange(e){
		console.log(e.target);
		console.log(e.target.value);
		this.setState({
			inputValue: e.target.value
		})
	}
	//  提交
  	handleItemSubmit(e){
		e.preventDefault();
		const [...list] = this.state.list;
		list.unshift({
			id: this.state.inputValue,
			content: this.state.inputValue
		})
		this.setState({
			list
		})
		// this.setState((prevState) => ({
		// 	list : [prevState.inputValue, ...prevState.list],
		// 	inputValue: ''
		// }))	
  	}
}

export default Todolist;
