import React from 'react';

export default class TodoItem extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		// this.handleItemDelete = this.handleItemDelete.bind(this);
		// this.handleItemSubmit = this.handleItemSubmit.bind(this)
	}
	componentDidMount(){
		this.setState({
			inputValue: this.props.content
		})
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
						<input
							value={this.state.inputValue}
							onChange={this.handleInputChange}
							// onBlur={(e)=>this.handleInputBlur(e)}
							className="form__input" placeholder="請輸入" type="text" 
						/>11111
					</div>
				</div>
				<div className="todo__actions">
					<a href='./'><i className="todo__icon icon-basic-todolist-pen"></i>編輯</a>
					<a 
					href='./'
					>	
					<i className="todo__icon icon-basic-trashcan"></i>刪除</a>
				</div>
			</li>
		);
	}

	handleInputChange(e){
		console.log(e.target);
		console.log(e.target.value);
		this.setState({
			inputValue: e.target.value
		})
		// const value = e.target.value;
		// this.setState(() => ({
		// 	inputValue: value,
		// }))
	}
}

