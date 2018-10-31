import React from 'react';

export default class TodoItem extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			edit: false
		}		
	}
	
	render(){
		return (
			<li className="todo__item">
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
						{this.state.edit ? 
							<input
								className="form__input" placeholder="請輸入" type="text" 
							/>
						:
							<span						
							>{this.props.content}
							</span>							
						}
						
						
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
