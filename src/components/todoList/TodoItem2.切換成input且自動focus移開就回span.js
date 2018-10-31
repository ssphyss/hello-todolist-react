import React from 'react';

export default class TodoItem extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			edit: false
		}				
		this.handleSpanToInput = this.handleSpanToInput.bind(this);
		this.handleInputToSpan = this.handleInputToSpan.bind(this);
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
							// 自動focus
							// Blur就會回span
							<input
								ref="inputItem"
								onBlur={this.handleInputToSpan}
								className="form__input" placeholder="請輸入" type="text" 
							/>
						:	
							// 點擊就變成input
							<span
								onClick={this.handleSpanToInput}
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

	// Click：切換span成input
	handleSpanToInput(){
		console.log('切換span成input')
		this.setState({
			edit: true
		})
	}

	// 加上自動focus
	componentDidUpdate(){
		console.log('加上自動focus')
		if(this.refs.inputItem){
			this.refs.inputItem.focus()
		}
	}

	// Blur：切換input成span
	handleInputToSpan(){
		console.log('切換input成span')
		this.setState({
			edit: false
		})
	}
}
