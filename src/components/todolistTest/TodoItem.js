import React from 'react';

export default class TodoItem extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			edit: false,			
		}		

		this.handleSpanToInput = this.handleSpanToInput.bind(this);
		this.handleInputToSpan = this.handleInputToSpan.bind(this);
		this.handleOnChangeItem = this.handleOnChangeItem.bind(this);
		this.handleClickDelete = this.handleClickDelete.bind(this);	
		this.handleCheckbox = this.handleCheckbox.bind(this);	
	}
	
	render(){
		return (
			// 29.
			<li className={this.props.type==="no" ? 'todo__item': 'todo__item--complete'}>
				<div className="form__checkbox-group">
					<input 
						// 30.
						onChange={this.handleCheckbox}
						type="checkbox" className="form__checkbox-input" id={this.props.index} 
					/>
					<label htmlFor={this.props.index} className="form__checkbox-label">
						<span className="form__checkbox-button"></span>									         
					</label>               
				</div>
				<div className="todo__content">
					<div className="form__group">
						{this.state.edit ? 
							<input
								// 11. 自動對焦
								ref="inputItem"
								// value={this.props.content}
								// 注意,用props會不動
								value={this.state.inputValue}

								// 13. 
								onBlur={this.handleInputToSpan}

								// 10.
								onChange={this.handleOnChangeItem}
								className="form__input" placeholder="請輸入" type="text" 
							/>
						:
							<span	
								// 9.點擊切換input
								onClick={this.handleSpanToInput}					
							>
							{/* 8.顯示傳入的值 */}
							{this.props.content}
							</span>							
						}
						
						
					</div>
				</div>
				<div className="todo__actions">
					<a 
						// 19.
						onClick={this.handleSpanToInput}
						href='./'
					><i className="todo__icon icon-basic-todolist-pen"></i>編輯</a>
					<a 	
						// 21.
						onClick={this.handleClickDelete}
						href='./'><i className="todo__icon icon-basic-trashcan"></i>刪除</a>
				</div>
			</li>
		);
	}	

	// 10.
	handleSpanToInput(e){
		// 20.
		e.preventDefault();

		this.setState({
			edit: true,
			inputValue: this.props.content  // 注意：讓input讀取span的值
		})
	}

	// 12. 加上自動focus
	componentDidUpdate(){
		if(this.refs.inputItem){
			this.refs.inputItem.focus()
		}
	}

	// 13.
	handleOnChangeItem(e){
		console.log('AAA')
		this.setState({
			inputValue: e.target.value
		})
	}

	// 14.注意要傳參數
	handleInputToSpan(){
		this.setState({
			edit: false
		})
		// 15.
		// this.props.changeItemValue();  // 去父層綁定changeItemValue
		this.props.changeItemValue(this.props.index, this.state.inputValue);  // 去父層綁定changeItemValue
	}

	// 22.
	handleClickDelete(e){
		e.preventDefault();
		// 25.
		this.props.deleteItem(this.props.index);  // 去父層綁定deleteItem
	}

	// 32.
	handleCheckbox(){
		console.log('this.props.index', this.props.index)
		this.props.changeCheckbox(this.props.index, this.props.type);  // 去父層綁定changeCheckbox
	}
}
