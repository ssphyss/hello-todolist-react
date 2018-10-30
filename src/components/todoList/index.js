import React, { Component } from 'react';
import './../../sass/all.scss';
import './../../assets/icon-font.css';

class Todolist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '123'		
		}
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	render() {
		console.log('inputValue：',this.state.inputValue)
		this.handleInputChange();
		return (
			<main className = "wrapper">
				<section className = "section section-todo">
				<div className = "todo">
					<h1 className = "heading-primary">
						<span className = "heading-primary--main">123Todo List</span>
						<span className = "heading-primary--sub">Built by Phy  for her CSS AND SASS. Copyright © by Phy.</span>
					</h1>
					<ul className = "todo__list">
					<li className = "todo__item">
						<div className = "form__checkbox-group">
							<input 
								// value = {this.state.inputValue}
								// onChange={(e)=>this.handleInputChange(e)}
								// onChange={(e) => console.log(e.target.value)}
								onChange={this.handleInputChange}
								type = "checkbox" className = "form__checkbox-input" id = "r1" 
							/>
							<label htmlFor = "r1" className = "form__checkbox-label">
								000<span className = "form__checkbox-button"></span>									         
							</label>							
							</div>   
							<div content={this.state.inputValue}>顯示{this.state.inputValue}      
						</div>
						<div className = "todo__content">
							<div className = "form__group">
								<input className = "form__input" placeholder = "請輸入" type = "text" />
							</div>
						</div>
						<div className = "todo__actions">
							<a href = './'><i className = "todo__icon icon-basic-todolist-pen"></i>編輯</a>
							<a href = './'><i className = "todo__icon icon-basic-trashcan"></i>刪除</a>
						</div>
					</li>
					<li className = "todo__item">
						<div className = "form__checkbox-group">
							<input type = "checkbox" className = "form__checkbox-input" id = "r2" />
							<label htmlFor = "r2" className = "form__checkbox-label">
							<span className = "form__checkbox-button"></span>									         
							</label>               
						</div>
						<div className = "todo__content">
							<div className = "form__group">
								<input className = "form__input" placeholder = "請輸入" type = "text" />
							</div>
						</div>
						<div className = "todo__actions">
							<a href = './'><i className = "todo__icon icon-basic-todolist-pen"></i>編輯</a>
							<a href = './'><i className = "todo__icon icon-basic-trashcan"></i>刪除</a>
						</div>
					</li>
					<li className = "todo__item">
						<div className = "form__checkbox-group">
							<input type = "checkbox" className = "form__checkbox-input" id = "r3" />
							<label htmlFor = "r3" className = "form__checkbox-label">
								<span className = "form__checkbox-button"></span>									         
							</label>               
						</div>
						<div className = "todo__content">
							<div className = "form__group">
								<input className = "form__input" placeholder = "請輸入" type = "text" />
							</div>
						</div>
						<div className = "todo__actions">
							<a href = './'><i className = "todo__icon icon-basic-todolist-pen"></i>編輯</a>
							<a href = './'><i className = "todo__icon icon-basic-trashcan"></i>刪除</a>
						</div>
					</li>
					<li className = "todo__item--complete">
						<div className = "form__checkbox-group">
							<input type = "checkbox" className = "form__checkbox-input" id = "r4" />
							<label htmlFor = "r4" className = "form__checkbox-label">
								<span className = "form__checkbox-button"></span>									         
							</label>               
						</div>
						<div className = "todo__content">
							<div className = "form__group">
								<input className = "form__input" placeholder = "請輸入" type = "text" />
							</div>
						</div>
						<div className = "todo__actions">
							<a href = './'><i className = "todo__icon icon-basic-todolist-pen"></i>編輯</a>
							<a href = './'><i className = "todo__icon icon-basic-trashcan"></i>刪除</a>
						</div>
					</li>
					<h5>新增任務</h5>	
					<li className = "todo__item--add">						
						<div className = "todo__content">
							<div className = "form__group">
								<input className = "form__input" placeholder = "請輸入" type = "text" />
							</div>
						</div>
						<div className = "todo__actions">
							<a href = './'><i className = "todo__icon icon-basic-todolist-pen"></i>送出</a>
							<a href = './'><i className = "todo__icon icon-basic-trashcan"></i>取消</a>
						</div>
					</li>
					</ul>
				</div>
				</section>
			</main>
		);
	}
	handleInputChange(e){
		console.log('aaa')
		// console.log('e.target.value：',e.target.value)
		// this.setState(() => ({	
		// 	inputValue: e.target.value
		// }))
	}
}

export default Todolist;
