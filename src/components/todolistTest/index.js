import React, { Component } from 'react';
import TodoItem from './TodoItem'
import './../../sass/all.scss';
import './../../assets/icon-font.css';

export default class TodolistTest extends Component {
	constructor(props) {
		super(props);
		// 2.
		this.state = {
			inputValue: '',
			// 1.
			// 26.
			list: [
                {id: "1",inputValue: "111000", type: "no" },
                {id: "2",inputValue: "222000", type: "ok" }
            ]			
		}
		
		this.handleInputChange = this.handleInputChange.bind(this);		
		this.handleItemSubmit = this.handleItemSubmit.bind(this);
		this.changeItemValue = this.changeItemValue.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.changeCheckbox = this.changeCheckbox.bind(this);
		this.handleItemClear = this.handleItemClear.bind(this);	
	}

	render() {
		// 27.
		const filterNo = this.state.list.filter((item) => {
			if(item.type === "no"){
				return item
			}
			return false
		})
		const filterOk = this.state.list.filter((item) => {
			if(item.type === "ok"){
				return item
			}
			return false
		})
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
							{/* 7. 傳入key和值給子組件 */}
							{
								filterNo.map((item, index)=>{
									return (
										<TodoItem 	
											// 18.		
											key={item.id}
											index={item.id}

											content={item.inputValue}
											// 16.
											changeItemValue={this.changeItemValue}
											// 23.
											deleteItem={this.deleteItem}											
											// 31.
											changeCheckbox={this.changeCheckbox}
											type={item.type}
										/>
									)
								})
							}
							<h5>已完成</h5>		
							{/* 28.		 */}
							{
								filterOk.map((item, index)=>{
									return (
										<TodoItem  		
											// 把key={index}改用{item.id}帶入
											// 把index={index}改用{item.id}帶入	
											key={item.id}
											index={item.id}
											content={item.inputValue}
											changeItemValue={this.changeItemValue}
											deleteItem={this.deleteItem}
											changeCheckbox={this.changeCheckbox}
											type={item.type}
										/>
									)
								})
							}
							<h5>新增任務</h5>	
							<li className="todo__item--add">						
								<div className="todo__content">
									<div className="form__group">
										<input	
											// 3.讀取value值 this.state.inputValue
											// 3.新增偵測改變 this.handleInputChange	
											value={this.state.inputValue}
											onChange={this.handleInputChange}	
											className="form__input" placeholder="請輸入" type="text" 
										/>
									</div>
								</div>
								<div className="todo__actions">
									<a 
										// 5.送出新增
										onClick={this.handleItemSubmit}
										href='./'><i className="todo__icon icon-basic-todolist-pen"></i>送出</a>
									<a 
										onClick={this.handleItemClear}
										href='./'><i className="todo__icon icon-basic-trashcan"></i>取消</a>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</main>
		);
  	}

	// 4. 偵測改變
	handleInputChange(e){
		console.log('e.target.value', e.target.value)
		this.setState({
			inputValue: e.target.value
		})
	}

	// 6. 送出新增
	handleItemSubmit(e){
		e.preventDefault();

		if(!this.state.inputValue.trim()){
			return false
		}

		const newListItem = {
			// id: this.state.inputValue,         // 用輸入的字當id
			id: `${Math.floor(Math.random( )*1000)}`,
			inputValue: this.state.inputValue,  // 輸入的字
			type: "no"
		}
		this.setState({
			list : [...this.state.list, newListItem],
			inputValue: ''
		})
	}

	// 17.要傳參數~重要
	changeItemValue(index, inputValue){
		// const [...list] = this.state.list;
		// list[index].inputValue = inputValue;

		// this.setState({
		// 	list : list		
		// })
		const [...list] = this.state.list;
			list.map((item)=>{
			if(item.id === index){
				item.inputValue = inputValue;
			}
			return item;
		})
		this.setState({
			list : list		
		})
	}

	// 24.要傳參數~重要
	deleteItem(index){
		const [...list] = this.state.list;
		list.splice(index, 1);
		this.setState({
			list : list		
		})
	}


	// 34. 變更Checkbox
	changeCheckbox(index, type){
		console.log('changeCheckbox：indexw2222', index, type)
		const [...list] = this.state.list;
		list.map((item, i)=>{
			if(item.id === index){
				let newType;
				if(type === "ok"){
					newType = "no";
					console.log(newType)
				}else {
					newType = "ok";
					console.log(newType)
				}
				item.type = newType
			}
			return item;
		})
		setTimeout(() => {
			this.setState({
				list : list		
			})
		}, 300);
	}

	handleItemClear(e){
		e.preventDefault();
		this.setState({
			inputValue: ''	
		})
	}
}

