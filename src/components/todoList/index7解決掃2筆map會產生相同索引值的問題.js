import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './../../sass/all.scss';
import './../../assets/icon-font.css';

class Todolist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: [
                {id: "1",inputValue: "111000", type: "no" },
                {id: "2",inputValue: "222000", type: "ok" }
            ]
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleItemSubmit = this.handleItemSubmit.bind(this);
		this.changeItemValue = this.changeItemValue.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	render() {
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
		console.log(filterNo);
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
								filterNo.map((item, index)=>{
									return (
										<TodoItem
											// 把key={index}改用{item.id}帶入
											// 把index={index}改用{item.id}帶入
											key={item.id}
											index={item.id}
											content={item.inputValue}
											changeItemValue={this.changeItemValue}
											deleteItem={this.deleteItem}
										/>
									)
								})
							}
							
							<h5>已完成</h5>				
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
											style={{opaticy: 50}}
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
											onChange={this.handleInputChange}		
											className="form__input" placeholder="請輸入" type="text" 
										/>
									</div>
								</div>
								<div className="todo__actions">
									<a 
										onClick={this.handleItemSubmit}
										href='./'
									><i className="todo__icon icon-basic-todolist-pen"></i>送出</a>
									<a href='./'><i className="todo__icon icon-basic-trashcan"></i>取消</a>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</main>
		);
  	}

	// 新增任務
	handleInputChange(e){
		this.setState({
			inputValue: e.target.value
		})
	} 

	// 點擊送出新增資料
	handleItemSubmit(e){
		e.preventDefault();

		if(!this.state.inputValue.trim()){
			return false
		}

		const newListItem = {
			id: this.state.inputValue,         // 用輸入的字當id
			inputValue: this.state.inputValue,  // 輸入的字
			type: "no"
		}
		
		this.setState({
			list : [...this.state.list, newListItem],
			inputValue: '',
			// type: "no"
		})
	}

	// 子元件Blur時觸發
	changeItemValue(index, inputValue){
		console.log('index',index);
		const [...list] = this.state.list;
		// list[index].inputValue = inputValue;
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

	//  刪除
	deleteItem(index){		
		console.log('index',index);	
		const [...list] = this.state.list;
		list.map((item, i)=>{
			if(item.id === index){
				list.splice(i, 1);
			}
			return item;
		})
		this.setState({
			list : list		
		})
	}

}

export default Todolist;
