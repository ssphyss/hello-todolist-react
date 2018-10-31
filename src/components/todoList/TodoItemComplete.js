import React from 'react';

export default class TodoItemComplete extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
		}

	}

	render(){
		return (
			<li className="todo__item--complete">
				<div className="form__checkbox-group">
					<input 
						type="checkbox" className="form__checkbox-input" id="r1" 
					/>
					<label htmlFor="r1" className="form__checkbox-label">
						<span className="form__checkbox-button"></span>									         
					</label>               
				</div>
				<div className="todo__content">
					<div className="form__group">
						<input 
							// value={this.state.list[0].value} 
							value={this.props.value} 
							className="form__input" placeholder="請輸入" type="text" 
						/>
					</div>
				</div>
				<div className="todo__actions">
					<a href='./'><i className="todo__icon icon-basic-todolist-pen"></i>編輯</a>
					<a href='./'><i className="todo__icon icon-basic-trashcan"></i>刪除</a>
				</div>
			</li>
		);
	}	
}