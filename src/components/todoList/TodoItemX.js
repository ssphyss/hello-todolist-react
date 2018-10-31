import React from 'react';
// import PropTypes from 'prop-types';

export default class TodoItem extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
			inputValue: ''
		}

		this.handleInputChangeItem = this.handleInputChangeItem.bind(this);
		this.handleBlurChangeItem = this.handleBlurChangeItem.bind(this);		
		this.handleClickChangeInpt = this.handleClickChangeInpt.bind(this);
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
								ref="inputItem"
								// value={this.state.list[0].value} 
								// value={this.props.value}   //會不能動
								value={this.state.inputValue}
								onBlur={this.handleBlurChangeItem}
								onChange={this.handleInputChangeItem}
								className="form__input" placeholder="請輸入" type="text" 
							/>
						:
							<span
								onClick={this.handleClickChangeInpt}
							>
							{this.props.value}
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

	handleInputChangeItem(e){
		this.setState({
			inputValue: e.target.value
		})
	}
	handleBlurChangeItem(){
		this.setState({
			edit: false
		})
		this.props.changeItemValue();
	}
	handleClickChangeInpt(){
		this.setState({
			edit: true,
			inputValue: this.props.value
		})
		// 如果DOM存在,要改寫在生命週期componentDidUpdate
		// if(this.refs.inputItem){
		// 	this.refs.inputItem.focus()
		// }	
	}
	componentDidUpdate(){
		if(this.refs.inputItem){
			this.refs.inputItem.focus()
		}
	}
}

// TodoItem.propTypes = {
//     key: PropTypes.string,
//     value: PropTypes.string
// }
