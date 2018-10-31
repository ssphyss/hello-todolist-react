import React from 'react';

export default class TodoItem extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
			inputValue: ''
		}				
		this.handleSpanToInput = this.handleSpanToInput.bind(this);
		this.handleInputToSpan = this.handleInputToSpan.bind(this);
		this.handleOnChangeItem = this.handleOnChangeItem.bind(this);
		this.handleClickDelete = this.handleClickDelete.bind(this);
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
								onBlur={this.handleInputToSpan}

								// 1.onChange=focus時出現span的值
								// 寫上value和onChange,之後在blur時儲存
								value={this.state.inputValue}
								onChange={this.handleOnChangeItem}

								className="form__input" placeholder="請輸入" type="text" 
							/>
						:
							<span
								onClick={this.handleSpanToInput}
							>{this.props.content}
							</span>							
						}
						
						
					</div>
				</div>
				<div className="todo__actions">
					<a 
						onClick={this.handleSpanToInput}
						href='./'><i className="todo__icon icon-basic-todolist-pen"></i>編輯</a>
					<a 
						onClick={this.handleClickDelete}
						href='./'><i className="todo__icon icon-basic-trashcan"></i>刪除</a>
				</div>
			</li>
		);
	}

	// 切換span成input(同時也是編輯事件時)
	handleSpanToInput(e){
		e.preventDefault();
		this.setState({
			edit: true,
			// 2.
			inputValue: this.props.content  // 讓input讀取span的值
		})
	}

	// 加上自動focus
	componentDidUpdate(){
		if(this.refs.inputItem){
			this.refs.inputItem.focus()
		}
	}

	// 切換input成span(同時也是Blur事件時)
	handleInputToSpan(){
		this.setState({
			edit: false
		})
		// 4.
		this.props.changeItemValue(this.props.index, this.state.inputValue);  // 去父層綁定changeItemValue
	}

	// 3.改變Input值
	handleOnChangeItem(e){
		this.setState({
			inputValue: e.target.value
		})
	}

	// 5.刪除
	handleClickDelete(e){
		e.preventDefault();
		// 6.
		this.props.deleteItem(this.props.index);  // 去父層綁定deleteItem
	}
}
