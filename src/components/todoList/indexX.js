import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoItemComplete from './TodoItemComplete'
import './../../sass/all.scss';
import './../../assets/icon-font.css';

class Todolist extends Component {
	// 1. 這個構造函數會給組件的實例添加一個對象 state，state裡面保存了input值的數據狀態
	constructor(props) {
		super(props);

		this.state = {
			inputValue: '',
			// list: [],
			list: [
                {id: "1",inputValue: "預設值111"},
                {id: "2",inputValue: "預設值222"}
            ],
            listComplete: [
                {id: "3",inputValue: "333"},
                {id: "4",inputValue: "444"}
            ],	
		}		
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleItemSubmit = this.handleItemSubmit.bind(this);
		this.changeItemValue = this.changeItemValue.bind(this);
	}
	// shouldComponentUpdate(nextProps, nextState){
    //     console.log('生命週期 (要變更嗎?) shouldComponentUpdate ')
    //     if(nextProps.content !== this.props.content) {
    //         return true
	// 		console.log('有變化');
    //     }else {
    //         return false;
	// 		console.log('沒變化');
    //     }		
    // }
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
								this.state.list.map((item, index)=>{
									return (
										<TodoItem 
											key={index}
											index={index}
											// value={item}
											// value={item.inputValue}
											content={this.props.value}
											changeItemValue={this.changeItemValue}
										/>
									)
								})
							}
													
							<h5>已完成</h5>				
							{
								this.state.listComplete.map((item)=>{
									return (
										<TodoItemComplete 
											key={`${Math.floor(Math.random( )*1000)}`}
											value={item.value}
										/>
									)
								})
							}
							<h5>新增任務</h5>	
							<li className="todo__item--add">						
								<div className="todo__content">
									<div className="form__group">
										{/* 2.input輸入框發生改變(onChange)時,會調用 handleInputChange 方法 */}
										<input
											value={this.state.inputValue}
											// defaultValue={this.state.inputValue}											
											onChange={this.handleInputChange}
											className="form__input" 
											placeholder="請輸入" 
											type="text" 
										/>
									</div>
								</div>
								<div className="todo__actions">
									{/* 4.按鈕點擊時(onClick)時,會調用 handleItemSubmit 方法 */}
									<button 	
										onClick={this.handleItemSubmit}
										>
										<i className="todo__icon icon-basic-todolist-pen"></i>
										送出
									</button>
									<a href='./'><i className="todo__icon icon-basic-trashcan"></i>取消</a>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</main>
		)
	}


	// 3. 值改變
	// input輸入框發生改變(onChange)時,會調用 handleInputChange 方法，
	// 這個方法會調用 this.setState() 的方法改變state值，進而改變輸入框的值。
	// 改變值  
	handleInputChange(e){
		this.setState({
			inputValue: e.target.value
		})
	}

	// 5. 送出
	// 按鈕點擊時(onClick)時,會調用 handleItemSubmit 方法(送出時,希望清單更新變化)
	// 這個方法會調用 this.setState() 的方法改變state值，進而改變List的變化。
	// prevState是一個對之前狀態（previous state）的引用，我們是不能直接修改這個參數的值，要想修改state的值
	// 我們應該根據 prevState和props參數來創建一個新的JavaScript對象。
	handleItemSubmit(e){
		if(!this.state.inputValue.trim()){
			return false
		}
		const newListItem = {
			id: this.state.inputValue,         // 用輸入的字當id
			inputValue: this.state.inputValue  // 輸入的字
		}
		this.setState({
			list : [...this.state.list, newListItem],
			inputValue: ''
		})

		// this.setState((prevState) => ({
		// 	list : [...prevState.list, prevState.inputValue],
		// 	inputValue: ''
		// }))

		// e.preventDefault();
		
		// this.setState((prevState) => {
		// 	console.log('prevState.inputValue', prevState.inputValue)
		// 	console.log('prevState', prevState)
		// 	return {
		// 		list : [...prevState.list, prevState.inputValue],
		// 		// list : [...prevState.list, inputValue],
		// 		inputValue: ''
		// 	}			
		// })
		// this.handleInputChange({
		// 	target:{
		// 		value: ''
		// 	}
		// })
		
	}
	changeItemValue(){
		console.log('Blur時候要儲存')
		this.setState({
			// list : [...this.state.list, newListItem]
		})
	}
}
export default Todolist;

