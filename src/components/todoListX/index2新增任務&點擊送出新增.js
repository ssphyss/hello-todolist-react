import React, { Component } from 'react';
import './../../sass/all.scss';
import './../../assets/icon-font.css';

class Todolist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: [
                {id: "1",inputValue: "預設值111000"},
                {id: "2",inputValue: "預設值222000"}
            ]
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
							<li className="todo__item">
								<div className="form__checkbox-group">
									<input type="checkbox" className="form__checkbox-input" id="r4" />
									<label htmlFor="r4" className="form__checkbox-label">
										<span className="form__checkbox-button"></span>									         
									</label>               
								</div>
								<div className="todo__content">
									<div className="form__group">
										<input defaultValue={this.state.list[0].inputValue} className="form__input" placeholder="請輸入" type="text" />
									</div>
								</div>
								<div className="todo__actions">
									<a href='./'><i className="todo__icon icon-basic-todolist-pen"></i>編輯</a>
									<a href='./'><i className="todo__icon icon-basic-trashcan"></i>刪除</a>
								</div>
							</li>
							<li className="todo__item">
								<div className="form__checkbox-group">
									<input type="checkbox" className="form__checkbox-input" id="r4" />
									<label htmlFor="r4" className="form__checkbox-label">
										<span className="form__checkbox-button"></span>									         
									</label>               
								</div>
								<div className="todo__content">
									<div className="form__group">
										<input defaultValue={this.state.list[1].inputValue} className="form__input" placeholder="請輸入" type="text" />
									</div>
								</div>
								<div className="todo__actions">
									<a href='./'><i className="todo__icon icon-basic-todolist-pen"></i>編輯</a>
									<a href='./'><i className="todo__icon icon-basic-trashcan"></i>刪除</a>
								</div>
							</li>
							<h5>已完成</h5>				
							<li className="todo__item--complete">
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
							</li>
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
		console.log('新增任務',this.state.inputValue)
		this.setState({
			inputValue: e.target.value
		})
	} 

	// 點擊送出新增資料
	handleItemSubmit(e){
		e.preventDefault();
		console.log('點擊送出新增資料inputValue',this.state.inputValue);
		console.log('點擊送出新增資料list',this.state.list);
		const newListItem = {
			id: this.state.inputValue,         // 用輸入的字當id
			inputValue: this.state.inputValue  // 輸入的字
		}
		this.setState({
			list : [...this.state.list, newListItem],
			inputValue: ''
		})
	}
}

export default Todolist;
